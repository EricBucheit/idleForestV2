const ItemTemplate = require('../../Template')
const {waterSettings} = require('../../../../../GlobalSettings/itemSettings');
let water = {
	tiny : new ItemTemplate({ 
		name: "Water (T)", 
		img: "tiny",
		category: "water",
		use: function(player) { 
			player.skills.thirst.giveLimit(waterSettings.tiny.bonus)
			player.skills.thirst.addXp(waterSettings.tiny.xp)
        	return ({skill: player.skills.thirst, description: "Drink Up", used: true});
		}
	}),

	small: new ItemTemplate({ 
		name: "Water (S)",
		img: "small",
		category: "water",
		use: function(player) {
			player.skills.thirst.giveLimit(waterSettings.small.bonus)
			player.skills.thirst.addXp(waterSettings.small.xp)
        	return ({skill: player.skills.thirst, description: "Drink Up", used: true});
		}
	}),

	medium: new ItemTemplate({ 
		name: "Water (M)",
		img: "medium",
		category: "water",
		use: function(player) {
			player.skills.thirst.giveLimit(waterSettings.medium.bonus)
			player.skills.thirst.addXp(waterSettings.medium.xp)
        	return ({skill: player.skills.thirst, description: "Drink Up", used: true});
		}
	}),

	large: new ItemTemplate({ 
		name: "Water (L)",
		img: "large",
		category: "water",
		use: function(player) {
			player.skills.thirst.giveLimit(waterSettings.large.bonus)
			player.skills.thirst.addXp(waterSettings.large.xp)
        	return ({skill: player.skills.thirst, description: "Drink Up", used: true});
		}
	}),

	giant: new ItemTemplate({ 
		name: "Water (G)",
		img: "giant",
		category: "water",
		use: function(player) {
			player.skills.thirst.giveLimit(waterSettings.giant.bonus)
			player.skills.thirst.addXp(waterSettings.giant.xp)
        	return ({skill: player.skills.thirst, description: "Drink Up", used: true});
		}
	}),

	god: new ItemTemplate({ 
		name: "Water (GD)",
		img: "god",
		category: "water",
		use: function(player) {
			player.skills.thirst.giveLimit(waterSettings.god.bonus)
			player.skills.thirst.addXp(waterSettings.god.xp)
        	return ({skill: player.skills.thirst, description: "Drink Up", used: true});
		}
	}),
}

module.exports = water;
