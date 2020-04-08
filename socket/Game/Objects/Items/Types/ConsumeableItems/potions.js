const ItemTemplate = require('../../Template')
const {cookedFood} = require("./food");
const {potionSettings} = require('../../../../../GlobalSettings/itemSettings')

let potions = {
	
	tiny : new ItemTemplate({
		name: "Potion (T)",
		price: potionSettings.tiny.price,
		img : "tiny",
		category: "potion",
		use: function(player) {
			player.skills.health.giveLimit(potionSettings.tiny.boost)
        	return ({skill: player.skills.health, description: "Quick health", used: true});
		}, 
		recipe: [{item: cookedFood.chicken, quantity: potionSettings.meatCost}, {item: cookedFood.carrots, quantity: potionSettings.vegetableCost}]
	}),

	small: new ItemTemplate({
		name: "Potion (S)",
		price: potionSettings.small.price,
		img: "small",
		category: "potion",
		use: function(player) {
			player.skills.health.giveLimit(potionSettings.small.boost)
        	return ({skill: player.skills.health, description: "Quick health", used: true});
		},
		recipe: [{item: cookedFood.cow, quantity: potionSettings.meatCost}, {item: cookedFood.potatoes, quantity: potionSettings.vegetableCost}]
	}),

	medium : new ItemTemplate({
		name: "Potion (M)",
		price: potionSettings.medium.price,
		img: "medium",
		category: "potion",
		use: function(player) {
			player.skills.health.giveLimit(potionSettings.medium.boost)
        	return ({skill: player.skills.health, description: "Quick health", used: true});
		},
		recipe: [{item: cookedFood.llama, quantity: potionSettings.meatCost}, {item: cookedFood.corn, quantity: potionSettings.vegetableCost}]
	}),

	large : new ItemTemplate({
		name: "Potion (L)",
		price: potionSettings.large.price,
		img: "large",
		category: "potion",
		use: function(player) {
			player.skills.health.giveLimit(potionSettings.large.boost)
        	return ({skill: player.skills.health, description: "Quick health", used: true});
		}, 
		recipe: [{item: cookedFood.pig, quantity: potionSettings.meatCost}, {item: cookedFood.cucumber, quantity: potionSettings.vegetableCost}]
	}),

	giant : new ItemTemplate({
		name: "Potion (G)",
		price: potionSettings.giant.price,
		img: "giant",
		category: "potion",
		use: function(player) {
			player.skills.health.giveLimit(potionSettings.giant.boost)
        	return ({skill: player.skills.health, description: "Quick health", used: true});
		}, 
		recipe: [{item: cookedFood.turkey, quantity: potionSettings.meatCost}, {item: cookedFood.tomatoes, quantity: potionSettings.vegetableCost}]
	}),
	god : new ItemTemplate({
		name: "Potion (GD)",
		price: potionSettings.god.price,
		img: "god",
		category: "potion",
		use: function(player) {
			player.skills.health.giveLimit(potionSettings.god.boost)
        	return ({skill: player.skills.health, description: "Quick health", used: true});
		}, 
		recipe: [{item: cookedFood.turkey, quantity: potionSettings.meatCost}, {item: cookedFood.artichoke, quantity: 20}]
	})
}

module.exports = potions
