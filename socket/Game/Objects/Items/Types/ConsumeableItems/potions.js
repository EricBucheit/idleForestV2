const ItemTemplate = require('../../Template')
const {cookedFood} = require("./food");

let potions = {
	
	tiny : new ItemTemplate({
		name: "Potion (T)",
		price: 100,
		img : "tiny",
		category: "potion",
		use: function(player) {
			player.skills.health.giveLimit(5)
        	return ({skill: player.skills.health, description: "Quick health", used: true});;
		}, 
		recipe: [{item: cookedFood.chicken, quantity: 1}, {item: cookedFood.carrots, quantity: 5}]
	}),

	small: new ItemTemplate({
		name: "Potion (S)",
		price: 500,
		img: "small",
		category: "potion",
		use: function(player) {
			player.skills.health.giveLimit(10)
        	return ({skill: player.skills.health, description: "Quick health", used: true});;
		},
		recipe: [{item: cookedFood.cow, quantity: 1}, {item: cookedFood.potatoes, quantity: 5}]
	}),

	medium : new ItemTemplate({
		name: "Potion (M)",
		price: 1500,
		img: "medium",
		category: "potion",
		use: function(player) {
			player.skills.health.giveLimit(25)
        	return ({skill: player.skills.health, description: "Quick health", used: true});;
		},
		recipe: [{item: cookedFood.llama, quantity: 1}, {item: cookedFood.corn, quantity: 5}]
	}),

	large : new ItemTemplate({
		name: "Potion (L)",
		price: 3000,
		img: "large",
		category: "potion",
		use: function(player) {
			player.skills.health.giveLimit(50)
        	return ({skill: player.skills.health, description: "Quick health", used: true});;
		}, 
		recipe: [{item: cookedFood.pig, quantity: 1}, {item: cookedFood.cucumber, quantity: 5}]
	}),

	giant : new ItemTemplate({
		name: "Potion (G)",
		price: 6000,
		img: "giant",
		category: "potion",
		use: function(player) {
			player.skills.health.giveLimit(100)
        	return ({skill: player.skills.health, description: "Quick health", used: true});;
		}, 
		recipe: [{item: cookedFood.turkey, quantity: 1}, {item: cookedFood.tomatoes, quantity: 5}]
	}),
	god : new ItemTemplate({
		name: "Potion (GD)",
		price: 10000,
		img: "god",
		category: "potion",
		use: function(player) {
			player.skills.health.giveLimit(200)
        	return ({skill: player.skills.health, description: "Quick health", used: true});;
		}, 
		recipe: [{item: cookedFood.turkey, quantity: 1}, {item: cookedFood.artichoke, quantity: 20}]
	})
}

module.exports = potions
