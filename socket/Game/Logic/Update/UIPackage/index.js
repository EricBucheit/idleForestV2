class UIPackage {

	packageEntity(contents) {
		let pack = [];
	      for (var x = 0; x < contents.length; x++) {
	      	contents[x].action.hitBubble.check()
	        pack.push({
	            body : contents[x].body,
	            info: {
	            	type : contents[x].info.type,
	            },
	            skills : {
	            	health: {
	            		value: contents[x].skills.health.value,
	            		current: contents[x].skills.health.current
	            	},
	            },
	            navigation: {
					direction: contents[x].navigation.direction,
				},
	           	action : contents[x].action.current,
	            animation : {
	            	img: contents[x].animation.img,
	            	index: contents[x].animation.indices[contents[x].action.current].index,
	            },
	            hitBubble : contents[x].action.hitBubble.package(),

	        })
	      }
	      return (pack)

	}

	packagePayload(socket, gameState, payload) {
		let user = gameState.players[socket.id]
		let player =  user.player;

		let bank = false
		let menu = false

		if (player.info.menu.current !== "none") {
			if (player.info.menu.current === "bank") {
				if (player.info.currLevel === 1) {
					bank = {
						 items : player.home.bank.inventory.package(),
						 page: player.home.bank.page,
						 index : player.home.bank.index,
						 body : player.home.bank.body,
					}
				}
			} else if (	player.info.menu.current === "cook" || 
						player.info.menu.current === "craft" || 
						player.info.menu.current === "buy") {
				let playerMenu = player.info.menu;
				
				menu = {
					items : player.home.menu.packageItems(gameState.items, player.info.menu.current,  player.info.menu.category, player.info.menu.subcategory),
					categoryButtons : player.home.menu.categoryButtons(gameState.items[playerMenu.current], playerMenu.category),
					subcategoryButtons : player.home.menu.subcategoryButtons(gameState.items[playerMenu.current], playerMenu.category, playerMenu.subcategory),
					selectedCategory: playerMenu.category,
					selectedSubcategory: playerMenu.subcategory,
					background: player.home.menu.background,
					closeButton: player.home.menu.closeButton,
					craftQueue : gameState.players[socket.id].crafting.packageQueue(),
				}	
			}
		}

		let farm = false;
		if (player.info.currLevel === 0) {
			farm = {
				level : player.home.farm.level,
				rows : player.home.farm.rows,
				columns : player.home.farm.columns,
				water : player.home.farm.water,
				items : player.home.farm.packageItems(),
			}
		}

		player.action.hitBubble.check();
		let currentPlayerPackage = {
			body : player.body,
			actionButtons: player.action.buttons,
			navigation: {
				direction: player.navigation.direction,
			},
			action : player.action.current,
			task: player.action.task,
			animation: {
				img: player.animation.img,
				hair: player.animation.hair,
				shirt: player.animation.shirt,
				pants: player.animation.pants,
				helm : player.armor.spaces.helm.animationInfo(),
				chest: player.armor.spaces.chest.animationInfo(),
				legs: player.armor.spaces.legs.animationInfo(),
				feet: player.armor.spaces.feet.animationInfo(),
				weapon: player.armor.spaces.weapon.animationInfo(),
				shield: player.armor.spaces.shield.animationInfo(),
				bow: player.armor.spaces.bow.animationInfo(),
				arrows: player.armor.spaces.arrows.animationInfo(),
				pickaxe: player.armor.spaces.pickaxe.animationInfo(),
				axe: player.armor.spaces.axe.animationInfo(),
				index: player.animation.indices[player.action.current].index,
				magicIndex: player.animation.indices.spell.index,
				magicImg : player.magic.img,

			},
			sound: player.info.sound,
			bank : bank,
			menu : menu,
			farm : farm,
			skills: player.skills,
			inventory: player.inventory.package(),
			sortItem : user.MouseDownHandler.sortItems.package(),
			dblClickMenu : user.RightClickHandler.dblClickMenu.package(),
			infoBox : user.MoveHandler.infoBox.package(),
			magicUI : player.magic.inventoryUI,
			info : {
				currentLevel: player.info.currLevel,
				gold: player.inventory.gold,
				inventoryPage: player.info.inventoryPage,
				menu: player.info.menu.current,
			},
			hitBubble : player.action.hitBubble.package(),
		}

		let merchantPackage = false
		if (player.info.currLevel === 1) {
			let merchant = gameState.players[socket.id].npcs.merchant
			merchantPackage =  {
				body: merchant.body,
				navigation: {
					direction: merchant.navigation.direction,
				},
				action : merchant.action.current,
				animation: {
					img: merchant.animation.img,
					hair: merchant.animation.hair,
					shirt: merchant.animation.shirt,
					pants: merchant.animation.pants,
					helm : merchant.armor.spaces.helm.animationInfo(),
					chest: merchant.armor.spaces.chest.animationInfo(),
					shield: merchant.armor.spaces.shield.animationInfo(),
					legs : false,
					feet : false,
					
					index: merchant.animation.indices[player.action.current].index,
				}
			}
		}

		let tutorialMasterPackage = false
		if (!user.tutorial.completed.finished) {
			let tutorialMaster = gameState.players[socket.id].npcs.tutorialMaster
			tutorialMasterPackage =  {
				body: tutorialMaster.body,
				navigation: {
					direction: tutorialMaster.navigation.direction,
				},
				action : tutorialMaster.action.current,
				animation: {
					img: tutorialMaster.animation.img,
					hair: tutorialMaster.animation.hair,
					shirt: tutorialMaster.animation.shirt,
					pants: tutorialMaster.animation.pants,
					helm : tutorialMaster.armor.spaces.helm.animationInfo(),
					chest: tutorialMaster.armor.spaces.chest.animationInfo(),
					shield: tutorialMaster.armor.spaces.shield.animationInfo(),
					legs : false,
					feet : false,
					index: tutorialMaster.animation.indices[player.action.current].index,
				},
				message: user.tutorial.message,
			}
		}



		let npcPackage = {
			merchant : merchantPackage,
			tutorialMaster : tutorialMasterPackage,
		}

		let levelPackage = {
			body: gameState.players[socket.id].level.body,
			inventory : gameState.players[socket.id].level.newInventory.package(),
			
		}

		payload.currentPlayer = currentPlayerPackage;
		payload.enemies = this.packageEntity(gameState.players[socket.id].enemies);
		payload.ores = this.packageEntity(gameState.players[socket.id].ores);
		payload.trees = this.packageEntity(gameState.players[socket.id].trees);
		payload.animals = this.packageEntity(gameState.players[socket.id].animals);
		payload.npcs = npcPackage;
		payload.level = levelPackage;
	}

}

module.exports = UIPackage