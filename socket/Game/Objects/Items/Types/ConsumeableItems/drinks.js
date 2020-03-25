const ItemTemplate = require('../../Template')

let water = {
	tiny : new ItemTemplate({ 
		name: "Water (T)", 
		bonus : 5,
		img: "tiny",
		category: "water",
		use: function(player) { 
			player.skills.thirst.giveLimit(1)
			player.skills.thirst.addXp(5)
        	return ({skill: player.skills.thirst, description: "Drink Up", used: true});
		}
	}),

	small: new ItemTemplate({ 
		name: "Water (S)",
		bonus : 15,
		img: "small",
		category: "water",
		use: function(player) {
			player.skills.thirst.giveLimit(2)
			player.skills.thirst.addXp(10)
        	return ({skill: player.skills.thirst, description: "Drink Up", used: true});
		}
	}),

	medium: new ItemTemplate({ 
		name: "Water (M)",
		bonus : 30,
		img: "medium",
		category: "water",
		use: function(player) {
			player.skills.thirst.giveLimit(4)
			player.skills.thirst.addXp(20)
        	return ({skill: player.skills.thirst, description: "Drink Up", used: true});
		}
	}),

	large: new ItemTemplate({ 
		name: "Water (L)",
		bonus : 60,
		img: "large",
		category: "water",
		use: function(player) {
			player.skills.thirst.giveLimit(8)
			player.skills.thirst.addXp(40)
        	return ({skill: player.skills.thirst, description: "Drink Up", used: true});
		}
	}),

	giant: new ItemTemplate({ 
		name: "Water (G)",
		bonus : 100,
		img: "giant",
		category: "water",
		use: function(player) {
			player.skills.thirst.giveLimit(16)
			player.skills.thirst.addXp(80)
        	return ({skill: player.skills.thirst, description: "Drink Up", used: true});
		}
	}),

	god: new ItemTemplate({ 
		name: "Water (GD)",
		bonus : 200,
		img: "god",
		category: "water",
		use: function(player) {
			player.skills.thirst.giveLimit(32)
			player.skills.thirst.addXp(160)
        	return ({skill: player.skills.thirst, description: "Drink Up", used: true});
		}
	}),
}

module.exports = water;
