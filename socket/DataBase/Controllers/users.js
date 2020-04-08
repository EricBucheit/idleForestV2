const {db} = require ('../')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const { Op } = require("sequelize");

function login(name, password, existingPlayer, game) {
	if (!name || !password) {
		game.socket.emit("login", {success: false, exists: false, error: true, message: "Name and Password Required"});
		return ; 
	}
	db.users.findOne({
		      where : {name : name},
		      include: [
		        {
		          model: db.info,
		        },
		        {
		          model: db.animations,
		        },
		      ]
		}).then(user => {
			if (user) {
				bcrypt.compare(password, user.password, function(err, response) {
					if (response === true) {
			    		existingPlayer(game.socket, game.gameState, user)
			    		game.socket.emit("login", {success: true, exists: true, message: "Success"});
					} else {
						game.socket.emit("login", {success: false, exists: true, message: "Wrong Password"});
					}
				});
			} else {
				game.socket.emit("login", {success: false, exists: false, message: "Create New"});
			}
		});
}


function register(name, password, newPlayer, existingPlayer, game) {
	bcrypt.hash(password, saltRounds, function(err, hash) {
		db.users.findOrCreate({
			where: 
				{
					name: name
				},
			defaults : {
		        password:  hash,
		        gold : 100,
			},
		})
		.then(([user, created]) => {
	    	if (created) {
	    		try {

				  	db.connection.transaction(async (t) => {
					    const info = await db.info.create({
		    				user_id: user.id,
		    				name: user.name,
		    				description: `user number: ${user.id}`,
		    				curr_level: 1,
		    				highestLevel : 1,
		    				deaths: 0,
		    				difficulty: game.data.difficulty,
		    				sound : game.data.sound,
		    				farmLevel : 0,
		    				farmWaterCount: 0,
		    				waterWellLevel: 0,
		    			}, { transaction: t });

					    const animations = await db.animations.create({
		    				user_id: user.id,
		    				img: game.data.skin,
		    				hair: game.data.hair,
		    				shirt : game.data.shirt,
		    				pants : game.data.pants,
		    			}, { transaction: t });

				    	return {info : info, animations: animations};

				  }).then(res => {
				  	user = user.dataValues;
				  	user.animation = res.animations.dataValues;
				  	user.info = res.info.dataValues
				  	delete user.password;
				  	newPlayer(game.socket, game.gameState, user)
					game.socket.emit("register", true)
				  });
				} catch (error) {
					console.log(error)
				}
				
	    	} else {
	    		if (user) {
					bcrypt.compare(password, user.password, function(err, response) {
						if (response === true) {
							db.users.findOne({
							      where : {id : user.id},
							      include: [
							        {
							          model: db.info,
							        },
							        {
							          model: db.animations,
							        },
							      ]
							    }).then(user => {
									existingPlayer(game.socket, game.gameState, user)
			    					game.socket.emit("login", {success: true, exists: true, message: "Success"});
							    });
						} else {
							game.socket.emit("login", {success: false, exists: true, message: "Wrong Password"});
						}
					});

				} else {
					game.socket.emit("login", {success: false, exists: false, message: "Please Try Again Later"});
				}
	    	}			
		});
	})
}

function createArmor(player) {
	let armor = [];
	for (let name in player.armor.spaces) {
		let pkg = player.armor.spaces[name].packageDB(name)
		pkg.user_id = player.info.user_id;
		armor.push(pkg)
	}
	db.armor.bulkCreate(armor).then(res => {
		// console.log(res);
	}).catch(err => {
		console.log(err)
	});
}

function createSkills(player) {
	let skills = [];
	for (let name in player.skills) {
		let pkg = player.skills[name].packageDB()
		pkg.user_id = player.info.user_id;
		pkg.name = name;
		skills.push(pkg)
	}
	db.skills.bulkCreate(skills).then(res => {
		// console.log(res);
	}).catch(err => {
		console.log(err)
	});
}

function createInventory(player) {
	db.inventory.bulkCreate(player.inventory.packageDB(player.info.user_id)).then(res => {
		// console.log(res);
	}).catch(err => {
		console.log(err)
	});
}

function createBank(player) {
	db.bank.bulkCreate(player.home.bank.inventory.packageDB(player.info.user_id)).then(res => {
		// console.log(res);
	}).catch(err => {
		console.log(err)
	});
}

function createFarm(player) {
	db.farm.bulkCreate(player.home.farm.packageDB(player.info.user_id)).then(res => {
		// console.log(res)
	}).catch(err => {
		console.log(err)
	})
}



function createPlayerData(player) {
	createArmor(player);
	createSkills(player);
	createInventory(player);
	createBank(player);
	createFarm(player);
}

function loadBank(player, items) {
	db.users.findOne({
		where : {id: player.info.user_id},
		include: [
			        {
			          model: db.bank,
			          order: [
					            ['slot_id', 'ASC'],
					        ],
			        }
		    	],
	}).then(res => {
		for (let index in res.dataValues.banks) {
			let item = res.dataValues.banks[index];
			if (item.item_id === -1) {
				continue
			}
			let foundItem = items.getItem(item.category_name, item.subCategory_name, item.item_name)
			player.home.bank.inventory.add(foundItem, item.quantity)
		}
	}).catch(err => {
		console.log(err)
	});
}

function loadInventory(player, items) {
	db.users.findOne({
		where : {id: player.info.user_id},
		include: [
			        {
			          model: db.inventory,
			          order: [
					            ['slot_id', 'ASC'],
					        ],
			        }
		    	],
	}).then(res => {
		for (let index in res.dataValues.inventories) {
			let item = res.dataValues.inventories[index];
			if (item.item_id === -1) {
				continue
			}
			let foundItem = items.getItem(item.category_name, item.subCategory_name, item.item_name)
			player.inventory.add(foundItem, item.quantity)
		}
	}).catch(err => {
		console.log(err)
	});
}

function loadLevelItems(player, currLevel, level, items) {
	try{
		level.newInventory.empty();
		db.users.findOne({
		where : {id: player.info.user_id},
		include: [
			        {
			          model: db.levelItems,
			          where : {level: currLevel, item_id : {[Op.not] : -1}},
			          order: [
					            ['slot_id', 'ASC'],
					        ],
			        }
		    	],
		}).then(res => {
			if (res) {
				// console.log(`LAADING LEVEL ${currLevel} items`)
				for (let index in res.levelItems) {
					let item = res.levelItems[index].dataValues;
					let foundItem = items.none()
					if (item.item_id === -1) {
						foundItem = items.none()
					} else {
						foundItem = items.getItem(item.category_name, item.subCategory_name, item.item_name)
						foundItem.setPos(item.x, item.y)
					}
					level.newInventory.add(foundItem, item.quantity)
				}
			}
		}).catch(err => {
			console.log(err)
		});
	} catch(err) {
		console.log(err)
	}
}

function loadFarm(player, items) {
	db.users.findOne({
		where : {id: player.info.user_id},
		include: [
			        {
			          model: db.farm,
			          order: [
					            ['slot_id', 'ASC'],
					        ],
			        }
		    	],
	}).then(res => {
		for (let index in res.dataValues.farms) {
			let item = res.dataValues.farms[index];
			if (item.item_id === -1) {
				continue
			}
			let foundItem = items.getItem(item.category_name, item.subCategory_name, item.item_name)
			player.home.farm.loadSeed(foundItem, item.level)
		}


	}).catch(err => {
		console.log(err)
	});
}

function loadArmor(player, items) {
	db.users.findOne({
		where : {id: player.info.user_id},
		include: [
			        {
			          model: db.armor,
			          order: [
					            ['slot_id', 'ASC'],
					        ],
			        }
		    	],
	}).then(res => {
		for (let index in res.dataValues.armors) {
			let armor = res.dataValues.armors[index];
			if (armor.item_id === -1) {
				continue
			}
			let foundItem = items.getItem(armor.category_name, armor.subCategory_name, armor.item_name)
			player.armor.spaces[armor.name].set(foundItem);
			player.armor.spaces[armor.name].item.quantity = armor.quantity;
			player.armor.addBonus();
		}
	}).catch(err => {
		console.log(err)
	});
}

function loadSkills(player) {
	db.users.findOne({
		where : {id: player.info.user_id},
		include: [
			        {
			          model: db.skills,
			          order: [
					            ['slot_id', 'ASC'],
					        ],
			        }
		    	],
	}).then(res => {
		for (let index in res.dataValues.skills) {
			let skill = res.dataValues.skills[index];
			player.skills[skill.name].loadDB(skill)
		}
	}).catch(err => {
		console.log(err)
	});
}



function loadPlayer(player, items) {
	loadBank(player, items);
	loadInventory(player, items);
	loadFarm(player, items);
	loadArmor(player, items);
	loadSkills(player);
}


function savePlayer(player) {
	try {
		db.users.update({gold: player.inventory.gold}, {
			where: {
				id: player.info.user_id,
			}
		})

		player.info.farmLevel = player.home.farm.level;
		player.info.farmWaterCount = player.home.farm.water;
		player.info.waterWellLevel = player.home.waterSource.level;
		db.info.update(player.info, {
			where : {
				id : player.info.user_id,
			},
		})
		return ({code: 1, message: "save User successful"})
	} catch(err) {
		return ({code: -1, message: "save Unsuccessful"})
	}
}

function saveBank(player) {
	try {
		let bank = player.home.bank.inventory.packageDB(player.info.user_id)
		for(let item in bank) {
			if (bank[item].id === -1) {
				continue ;
			}
			db.bank.update(bank[item], {
				where: {
					user_id : player.info.user_id,
					slot_id : bank[item].slot_id,
				}
			})
		}
		return ({code: 1, message: "save Bank successful"})
	} catch(err) {
		return ({code: -1, message: "save Unsuccessful"})
	}
}

function saveInventory(player) {
	try {
		let inventory = player.inventory.packageDB(player.info.user_id)
		for(let item in inventory) {
			if (inventory[item].id === -1) {
				continue ;
			}
			db.inventory.update(inventory[item], {
				where: {
					user_id : player.info.user_id,
					slot_id : inventory[item].slot_id,
				}
			})
		}
		return ({code: 1, message: "save Inventory successful"})
	} catch(err) {
		return ({code: -1, message: "save Unsuccessful"})
	}
}

function saveSkills(player) {
	try {
		let skills = [];
		for (let name in player.skills) {
			let pkg = player.skills[name].packageDB()
			pkg.user_id = player.info.user_id;
			pkg.name = name;
			db.skills.update(pkg, {
				where : {
					user_id : pkg.user_id,
					name : pkg.name,
				}
			})
		}
		return ({code: 1, message: "save Skills successful"})
	} catch(err) {
		return ({code: -1, message: "save Unsuccessful"})
	}
}

function saveArmor(player) {
	try {
		let armor = [];
		for (let name in player.armor.spaces) {
			let pkg = player.armor.spaces[name].packageDB(name)
			pkg.user_id = player.info.user_id;
			db.armor.update(pkg, {
				where : {
					user_id : pkg.user_id,
					name : pkg.name,
				}
			})
		}
		return ({code: 1, message: "save Armor successful"})
	} catch(err) {
		return ({code: -1, message: "save Unsuccessful"})
	}
}


function saveFarm(player) {
	try {
		let farm = player.home.farm.packageDB(player.info.user_id)
		for(let item in farm) {
			if (farm[item].id === -1) {
				continue ;
			}
			db.farm.update(farm[item], {
				where: {
					user_id : player.info.user_id,
					slot_id : farm[item].slot_id,
				}
			})
		}
		return ({code: 1, message: "Save Farm Success"})

	} catch (e) {
		return ({code: -1, message: "Failed to save Farm"});
	}
}

function saveLevelItems(player, currLevel, level) {

	try {
		let inventory = level.newInventory.packageDB(player.info.user_id)
		db.levelItems.findOne({
			where: 
				{
					user_id: player.info.user_id, 
					level: currLevel
				}
		}).then(levelItems => {
			if (levelItems) {
				for(let item in inventory) {
					db.levelItems.update(inventory[item], {
					where: {
						user_id: player.info.user_id,
						slot_id : inventory[item].slot_id,
						level : currLevel,
					}
					}).then(res => {
					})
				}
			} else {


				for(let item in inventory) {
					inventory[item].level = currLevel
					db.levelItems.create(inventory[item]).then(res => {
					})
				}
			}
		})
		return ({code: 1, message: "save Inventory successful"})
	} catch(err) {
		return ({code: -1, message: "save Unsuccessful", err: err})
	}
}


function saveProgress(player, socket, gameState) {
	let message = "Save Success";
	if (savePlayer(player).code === -1) message = "Save Unsuccessful"
	if (saveBank(player).code === -1) message = "Save Unsuccessful"
	if (saveInventory(player).code === -1) message = "Save Unsuccessful"
	if (saveSkills(player).code === -1) message = "Save Unsuccessful"
	if (saveArmor(player).code === -1) message = "Save Unsuccessful"
	if (saveFarm(player).code === -1) message = "Save Unsuccessful"
	saveLevelItems(player, player.info.currLevel, gameState.players[socket.id].level)
	socket.emit("save", message);

}


module.exports = {
	login : login,
	register : register,
	createPlayerData : createPlayerData,
	loadPlayer : loadPlayer,
	saveProgress : saveProgress,
	saveLevelItems: saveLevelItems,
	loadLevelItems : loadLevelItems,
}
