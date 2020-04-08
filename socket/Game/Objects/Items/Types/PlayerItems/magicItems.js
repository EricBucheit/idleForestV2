const ItemTemplate = require('../../Template')
const {magicSettings} = require('../../../../../GlobalSettings/itemSettings');

let magicItems = {
	teleport : new ItemTemplate({ 
			name: "Teleport\nStone", 
			price: 0,
			img: "teleportStone",
			category: "magic",
			useable : false,
			use: function(player, level) {
				if (level === 1) {
					player.skills.magic.addXp(player.info.currLevel * magicSettings.teleport.xp)
					player.info.currLevel = 1
				} else {
					player.skills.magic.addXp(level * magicSettings.teleport.xp)
					player.info.currLevel = player.info.currLevel + level;
				}
				player.action.teleported = true;
				return { used: false }
			}
	}),

	shield : new ItemTemplate({ 
			name: "Shield\nStone", 
			price: 0,
			img: "shieldStone",
			category: "magic",
			useable : false,
			use: function(player, level) {
				player.skills.defense.boost = level;
				player.skills.magic.addXp(level * magicSettings.shield.xp)

				return {used:false}
			}
	}),

	attack : new ItemTemplate({ 
			name: "Attack\nStone", 
			price: 0,
			img: "attackStone",
			category: "magic",
			useable : false,
			use: function(player, level) {
				player.skills.attack.boost = level;
				player.skills.magic.addXp(level * magicSettings.attack.xp)

				return {used:false}

			}
	}),

	archer : new ItemTemplate({ 
			name: "Archer\nStone", 
			price: 0,
			img: "archerStone",
			category: "magic",
			useable : false,
			use: function(player, level) {
				player.skills.range.boost = level;
				player.skills.magic.addXp(level * magicSettings.archer.xp)

				return {used:false}

			}
	}),

	mining : new ItemTemplate({ 
			name: "Mining\nStone", 
			price: 0,
			img: "miningStone",
			category: "magic",
			useable : false,
			use: function(player, level) {
				player.skills.mining.boost = level;
				player.skills.magic.addXp(level * magicSettings.mining.xp)

				return {used:false}

			}
	}),

	hunting : new ItemTemplate({ 
			name: "Hunting\nStone", 
			price: 0,
			img: 'huntingStone',
			category: "magic",
			useable : false,
			use: function(player, level) {
				player.skills.hunting.boost = level;
				player.skills.magic.addXp(level * magicSettings.hunting.xp)

				return {used:false}

			}
	}),
	
	woodcutting : new ItemTemplate({ 
			name: "WoodCutting\nStone", 
			price: 0,
			img: "woodCuttingStone",
			category: "magic",
			useable : false,
			use: function(player, level) {
				player.skills.woodcutting.boost = level;
				player.skills.magic.addXp(level * magicSettings.woodcutting.xp)

				return {used:false}

			}
	}),
	
}


module.exports = {
	magicItems
}

