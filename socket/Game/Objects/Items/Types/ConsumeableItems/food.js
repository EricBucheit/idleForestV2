const ItemTemplate = require('../../Template')
const {foodSettings, plantSettings, cookedSettings} = require('../../../../../GlobalSettings/itemSettings');
let food = {

	chicken: new ItemTemplate({ 
			name: "Chicken",
			price : foodSettings.chicken.price,
			img: "chicken",
			category: "rawMeat",
			useable: false,
			use : function(player) {
            	return ({skill: player.skills.health, description: "Used In Cooking", used: false});
            }
	}),

	cow: new ItemTemplate({ 
			name: "Cow",
			price : foodSettings.cow.price,
			img: "cow",
			category: "rawMeat",
			useable: false,
			use : function(player) {
            	return ({skill: player.skills.health, description: "Used In Cooking", used: false});
            }
	}),

	llama: new ItemTemplate({ 
			name: "Llama",
			price : foodSettings.llama.price,
			img: "llama",
			category: "rawMeat",
			useable: false,
			use : function(player) {
            	return ({skill: player.skills.health, description: "Used In Cooking", used: false});
            }
	}),

	pig: new ItemTemplate({ 
			name: "Pig",
			price : foodSettings.pig.price,
			img: "pig",
			category: "rawMeat",
			useable: false,
			use : function(player) {
            	return ({skill: player.skills.health, description: "Used In Cooking", used: false});
            }
	}),

	turkey: new ItemTemplate({ 
			name: "Turkey",
			price : foodSettings.turkey.price,
			img: "turkey",
			category: "rawMeat",
			useable: false,
			use : function(player) {
            	return ({skill: player.skills.health, description: "Used In Cooking", used: false});
            }
	}),
}

let plants = {
	carrot: new ItemTemplate({ 
			name: "Carrot",
			price : plantSettings.carrot.price,
			img: "carrot",
			category: "plants",
			useable: false,
			use : function(player) {
            	return ({description: "Used For Cooking carrots", used: false});
        	}
	}),

	potatoes: new ItemTemplate({ 
			name: "Potatoes", 
			price : plantSettings.potatoes.price,
			img: "potatoes",
			category: "plants",
			useable: false,
			use : function(player) {
            	return ({description: "Used For Cooking Potatoes", used: false});
        	}
	}),

	corn: new ItemTemplate({ 
			name: "Corn",
			price : plantSettings.corn.price,
			img: "corn",
			category: "plants",
			useable: false,
			use : function(player) {
            	return ({description: "Used For Cooking Corn", used: false});
        	}
	}),

	cucumber: new ItemTemplate({ 
			name: "cucumber", 
			price : plantSettings.cucumber.price,
			img: "cucumber",
			category: "plants",
			useable: false,
			use : function(player) {
            	return ({description: "Used For Cooking Cucumber", used: false});
        	}
	}),

	tomatoes: new ItemTemplate({ 
			name: "Tomatoes", 
			price : plantSettings.tomatoes.price,
			img: "tomatoe",
			category: "plants",
			useable: false,
			use : function(player) {
            	return ({description: "Used For Cooking Tomatoes", used: false});
        	}
	}),

	artichoke: new ItemTemplate({ 
			name: "Artichoke", 
			price : plantSettings.artichoke.price,
			img: "artichoke",
			category: "plants",
			useable: false,
			use : function(player) {
            	return ({description: "Used For Cooking Artichoke", used: false});
        	}
	}),
}


let cookedFood = {

	chicken: new ItemTemplate({ 
			name: "Chicken (C)", 
			price : cookedSettings.chicken.price,
			img: "chicken",
			craftTime: cookedSettings.chicken.craftTime,
			category: "cookedMeat",
			use : function(player) {
				player.skills.hunger.giveLimit(cookedSettings.chicken.bonus)
				player.skills.hunger.addXp(cookedSettings.chicken.xp)

            	return ({skill: player.skills.hunger, description: "Eat Up", used: true});
            },
			recipe: [{item: food.chicken, quantity: 1}]
		}),

	cow: new ItemTemplate({ 
			name: "Cow (C)", 
			price : cookedSettings.cow.price,
			img: "cow",
			craftTime: cookedSettings.cow.craftTime,
			category: "cookedMeat",
			use : function(player) {
				player.skills.hunger.giveLimit(cookedSettings.cow.bonus)
				player.skills.hunger.addXp(cookedSettings.cow.xp)

            	return ({skill: player.skills.hunger, description: "Eat Up", used: true});
            },
			recipe: [{item: food.cow, quantity: 1}]
	}),
	
	llama: new ItemTemplate({ 
			name: "Llama (C)", 
			price : cookedSettings.llama.price,
			img: "llama",
			craftTime: cookedSettings.llama.craftTime,
			category: "cookedMeat",
			craftTime: 5000,
			use : function(player) {
				player.skills.hunger.giveLimit(cookedSettings.llama.bonus)
				player.skills.hunger.addXp(cookedSettings.llama.xp)

            	return ({skill: player.skills.hunger, description: "Eat Up", used: true});
            },
			recipe: [{item: food.llama, quantity: 1}]
	}),
	
	pig: new ItemTemplate({ 
			name: "Pig (C)", 
			price : cookedSettings.pig.price,
			img: "pig",
			craftTime: cookedSettings.pig.craftTime,
			category: "cookedMeat",
			use : function(player) {
				player.skills.hunger.giveLimit(cookedSettings.pig.bonus)
				player.skills.hunger.addXp(cookedSettings.pig.xp)

            	return ({skill: player.skills.hunger, description: "Eat Up", used: true});
            },
			recipe: [{item: food.pig, quantity: 1}]
	}),
	
	turkey: new ItemTemplate({ 
			name: "Turkey (C)", 
			price : cookedSettings.turkey.price,
			img: "turkey",
			craftTime: cookedSettings.turkey.craftTime,
			category: "cookedMeat",
			use : function(player) {
				player.skills.hunger.giveLimit(cookedSettings.turkey.bonus)
				player.skills.hunger.addXp(cookedSettings.turkey.xp)

            	return ({skill: player.skills.hunger, description: "Eat Up", used: true});
            },
			recipe: [{item: food.turkey, quantity: 1}]
	}),
	
	carrots: new ItemTemplate({ 
			name: "Carrots (C)", 
			price : cookedSettings.carrots.price,
			img: "carrot",
			craftTime: cookedSettings.carrots.craftTime,
			category: "cookedPlants",
			use : function(player) {
				player.skills.hunger.giveLimit(cookedSettings.carrots.bonus)
				player.skills.hunger.addXp(cookedSettings.carrots.xp)

            	return ({skill: player.skills.hunger, description: "Eat Up", used: true});
            },
			recipe: [{item: plants.carrot, quantity: 1}]
	}),
	
	potatoes: new ItemTemplate({ 
			name: "Potatoes (C)", 
			price : cookedSettings.potatoes.price,
			img: "potatoe",
			craftTime: cookedSettings.potatoes.craftTime,
			category: "cookedPlants",
			use : function(player) {
				player.skills.hunger.giveLimit(cookedSettings.potatoes.bonus)
				player.skills.hunger.addXp(cookedSettings.potatoes.xp)

            	return ({skill: player.skills.hunger, description: "Eat Up", used: true});
            },
			recipe: [{item: plants.potatoes, quantity: 1}]
	}),
	
	corn: new ItemTemplate({ 
			name: "Corn (C)", 
			price : cookedSettings.corn.price,
			img: "corn",
			craftTime: cookedSettings.corn.craftTime,
			category: "cookedPlants",
			use : function(player) {
				player.skills.hunger.giveLimit(cookedSettings.corn.bonus)
				player.skills.hunger.addXp(cookedSettings.corn.xp)

            	return ({skill: player.skills.hunger, description: "Eat Up", used: true});
            },
			recipe: [{item: plants.corn, quantity: 1}]
	}),
	
	cucumber: new ItemTemplate({ 
			name: "Cucumber (C)", 
			price : cookedSettings.cucumber.price,
			img: "cucumber",
			craftTime: cookedSettings.cucumber.craftTime,
			category: "cookedPlants",
			use : function(player) {
				player.skills.hunger.giveLimit(cookedSettings.cucumber.bonus)
				player.skills.hunger.addXp(cookedSettings.cucumber.xp)

            	return ({skill: player.skills.hunger, description: "Eat Up", used: true});
            },
			recipe: [{item: plants.cucumber, quantity: 1}]
	}),
	
	tomatoes: new ItemTemplate({ 
			name: "Tomatoes (C)", 
			price : cookedSettings.tomatoes.price,
			img: "tomatoe",
			craftTime: cookedSettings.tomatoes.craftTime,
			category: "cookedPlants",
			use : function(player) {
				player.skills.hunger.giveLimit(cookedSettings.tomatoes.bonus)
				player.skills.hunger.addXp(cookedSettings.tomatoes.xp)

            	return ({skill: player.skills.hunger, description: "Eat Up", used: true});
            },
			recipe: [{item: plants.tomatoes, quantity: 1}]
	}),
	
	artichoke: new ItemTemplate({ 
			name: "Artichoke (C)", 
			price : cookedSettings.artichoke.price,
			img: "artichoke",
			craftTime: cookedSettings.artichoke.craftTime,
			category: "cookedPlants",
			use : function(player) {
				player.skills.hunger.giveLimit(cookedSettings.artichoke.xp)
				player.skills.hunger.addXp(cookedSettings.artichoke.xp)
            	return ({skill: player.skills.hunger, description: "Eat Up", used: true});
            },
			recipe: [{item: plants.artichoke, quantity: 1}]
	}),
}

module.exports = {
		food,
		cookedFood,
		plants
	}
