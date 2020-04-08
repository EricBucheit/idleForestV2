
const Projectiles = require("../Projectile");
const {RigidBody, Timer} = require('../../../Helpers/bodies')

class Magic {
	constructor(items) {

		let stones = items.getSubcategory("Magic", "Stones");
		this.projectiles = new Projectiles();
		this.teleport = this.makeTeleport(stones.teleport, "teleport");
		this.defense = this.makeSpell(stones.shield, "defense");
		this.attack = this.makeSpell(stones.attack, "attack" );
		this.archery = this.makeSpell(stones.archer, "range" );
		this.mining = this.makeSpell(stones.mining, false );
		this.hunting = this.makeSpell(stones.hunting, false );
		this.woodcutting = this.makeSpell(stones.woodcutting, false );

		this.img = false;
		this.busy = false;
		this.castIndex = false;
		this.inventoryUI = [];
		this.packageUI(items, stones)
	}

	setupCast(index, player) {
		let hasMaterials = false
		this.castIndex = parseInt(index)

		if (this.castIndex === 0) {
			this.img = this.teleport.img
			hasMaterials = this.teleport.check(player, 5, 1)
		} else if (this.castIndex === 1) {
			this.img = this.teleport.img
			hasMaterials = this.teleport.check(player, 5, 5)
		} else if (this.castIndex === 2) {
			this.img = this.teleport.img
			hasMaterials = this.teleport.check(player, 10, 10)
		} else if (this.castIndex === 3) {
			this.img = this.defense.img
			hasMaterials = this.defense.check(player, 5)
		} else if (this.castIndex === 4) {
			this.img = this.defense.img
			hasMaterials = this.defense.check(player, 20)
		} else if (this.castIndex === 5) {
			this.img = this.defense.img
			hasMaterials = this.defense.check(player, 50)
		} else if (this.castIndex === 6) {
			this.img = this.attack.img
			hasMaterials = this.attack.check(player, 5)
		} else if (this.castIndex === 7) {
			this.img = this.attack.img
			hasMaterials = this.attack.check(player, 20)
		} else if (this.castIndex === 8) {
			this.img = this.attack.img
			hasMaterials = this.attack.check(player, 50)
		} else if (this.castIndex === 9) {
			this.img = this.archery.img
			hasMaterials = this.archery.check(player, 5)
		} else if (this.castIndex === 10) {
			this.img = this.archery.img
			hasMaterials = this.archery.check(player, 20)
		} else if (this.castIndex === 11) {
			this.img = this.archery.img
			hasMaterials = this.archery.check(player, 50)
		} else if (this.castIndex === 12) {
			this.img = this.mining.img
			hasMaterials = this.mining.check(player, 5)
		} else if (this.castIndex === 13) {
			this.img = this.mining.img
			hasMaterials = this.mining.check(player, 20)
		} else if (this.castIndex === 14) {
			this.img = this.mining.img
			hasMaterials = this.mining.check(player, 50)
		} else if (this.castIndex === 15) {
			this.img = this.woodcutting.img
			hasMaterials = this.woodcutting.check(player, 5)
		} else if (this.castIndex === 16) {
			this.img = this.woodcutting.img
			hasMaterials = this.woodcutting.check(player, 20)
		} else if (this.castIndex === 17) {
			this.img = this.woodcutting.img
			hasMaterials = this.woodcutting.check(player, 50)
		} else if (this.castIndex === 18) {
			this.img = this.hunting.img
			hasMaterials = this.hunting.check(player, 5);
		} else if (this.castIndex === 19) {
			this.img = this.hunting.img
			hasMaterials = this.hunting.check(player, 20);
		} else if (this.castIndex === 20) {
			this.img = this.hunting.img
			hasMaterials = this.hunting.check(player, 50);
		}
		if (hasMaterials) {
			this.castIndex = parseInt(index)
			this.busy = true
		} else {
			this.castIndex = false
			return false
		}
	}
	

	cast(player) {
		if (this.castIndex === false) return false

		if (this.castIndex === 0) {
			this.teleport.home(player)
		} else if (this.castIndex === 1) {
			this.teleport.five(player)
		} else if (this.castIndex === 2) {
			this.teleport.ten(player)
		} else if (this.castIndex === 3) {
			this.defense.five(player)
		} else if (this.castIndex === 4) {
			this.defense.ten(player)
		} else if (this.castIndex === 5) {
			this.defense.thirty(player)
		} else if (this.castIndex === 6) {
			this.attack.five(player)
		} else if (this.castIndex === 7) {
			this.attack.ten(player)
		} else if (this.castIndex === 8) {
			this.attack.thirty(player)
		} else if (this.castIndex === 9) {
			this.archery.five(player)
		} else if (this.castIndex === 10) {
			this.archery.ten(player)
		} else if (this.castIndex === 11) {
			this.archery.thirty(player)
		} else if (this.castIndex === 12) {
			this.mining.five(player)
		} else if (this.castIndex === 13) {
			this.mining.ten(player)
		} else if (this.castIndex === 14) {
			this.mining.thirty(player)
		} else if (this.castIndex === 15) {
			this.woodcutting.five(player)
		} else if (this.castIndex === 16) {
			this.woodcutting.ten(player)
		} else if (this.castIndex === 17) {
			this.woodcutting.thirty(player)
		} else if (this.castIndex === 18) {
			this.hunting.five(player)
		} else if (this.castIndex === 19) {
			this.hunting.ten(player)
		} else if (this.castIndex === 20) {
			this.hunting.thirty(player)
		}

		this.castIndex = false
		this.img = false;
		this.busy = false;
	}

	packageUI(items, stones) {

		let magic = [
						"teleport",
						"shield",
						"attack",
						"archer",
						"mining",
						"woodcutting",
						"hunting",
					]
		let x_start = 357;
		let y_start = 147;

		for (let rows = 0; rows < 7; rows++) {
			let stone = magic[rows];
			for (let columns = 0; columns < 3; columns++) {
				let item = items.package(stones[stone]);
				item.body = new RigidBody({x: x_start + (columns * 40), y: y_start + (rows * 40), width: 40, height: 40})
				this.inventoryUI.push(item);
			}
		}
	}

	shoot(player, enemy, item) {
		let damage = item.boost;
		this.projectiles.fire(player, enemy, item, damage);
	}

	checkCollision(enemies) {
		this.projectiles.checkCollision(enemies);
	}

	makeSpell(stone, img) {
		return({
			stone: stone,
			img : img,
			
			pushSpells(spellArr) {
				spellArr.push(this.five, this.ten, this.thirty, this.fifty)
			},

			check(player, quantity) {
				let find = player.inventory.find(this.stone)

				if (find.found) {
					if (player.inventory.spaces[find.index].quantity >= quantity) {
						return true
					}
				}
				return false
			},

			spell : function(player, quantity, level) {
				let find = player.inventory.find(this.stone)

				if (find.found) {
					if (player.inventory.spaces[find.index].quantity >= quantity) {
						this.stone.use(player, level);
						player.inventory.delete(find.index, quantity);
					}
				}
			},

			five : function(player) {
				this.spell(player, 5, 5)
			},

			ten : function(player) {
				this.spell(player, 20, 10)

			},

			thirty : function(player) {
				this.spell(player, 50, 30)

			},

			fifty : function(player) {
				this.spell(player, 100, 50)
			},

		})
	}

	makeTeleport (teleport_stone, img) {
		return({
			stone : teleport_stone,
			img : img,
			pushSpells(spellArr) {
				spellArr.push(this.home, this.ten, this.fifty, this.oneHundred)
			},

			check(player, quantity, level) {
				if (player.info.highestLevel < player.info.currLevel + level && level !== 1) {
					return false
				}
				let find = player.inventory.find(this.stone)

				if (find.found) {
					if (player.inventory.spaces[find.index].quantity >= quantity) {
						return true
					}
				}
				return false
			},

			teleport : function(player, quantity, level) {
				if (player.info.highestLevel < player.info.currLevel + level && level !== 1) {
					return false
				}

				if (level === 1) {
					player.action.buttons.home.start();
				}
				if (level > 1) {
					player.action.buttons.home.stop();
				}

				let find = player.inventory.find(this.stone)

				if (find.found) {
					if (player.inventory.spaces[find.index].quantity >= quantity) {
						this.stone.use(player, level);
						player.inventory.delete(find.index, quantity);
					}
				}
			},

			home : function(player) {
				this.teleport(player, 5, 1);
			},

			five : function(player) {
				this.teleport(player, 5, 5);
			},

			ten : function(player) {
				this.teleport(player, 10, 10);
			},

			oneHundred : function(player) {
				this.teleport(player, 100, 100);
			},

		})
	}
}

module.exports = Magic;