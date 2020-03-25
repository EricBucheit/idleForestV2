const ItemTemplate = require('../../Template')

let magicItems = {
	teleport : new ItemTemplate({ 
			name: "Teleport\nStone", 
			price: 0,
			img: "teleportStone",
			category: "magic",
			useable : false,
			use: function(player, level) {
				if (level === 1) {
					player.info.currLevel = 1
				} else {
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
				return {used:false}

			}
	}),
	
}


module.exports = {
	magicItems
}

