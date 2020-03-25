const ItemTemplate = require('../../Template')

let food = {

	chicken: new ItemTemplate({ 
			name: "Chicken",
			price : 0,
			img: "chicken",
			category: "rawMeat",
			useable: false,
			craftTime: 10000,
			use : function(player) {
            	return ({skill: player.skills.health, description: "Used In Cooking", used: false});
            }
	}),

	cow: new ItemTemplate({ 
			name: "Cow",
			price : 0,
			img: "cow",
			category: "rawMeat",
			useable: false,
			craftTime: 10000,
			use : function(player) {
            	return ({skill: player.skills.health, description: "Used In Cooking", used: false});
            }
	}),

	llama: new ItemTemplate({ 
			name: "Llama",
			price : 0,
			img: "llama",
			category: "rawMeat",
			useable: false,
			craftTime: 10000,
			use : function(player) {
            	return ({skill: player.skills.health, description: "Used In Cooking", used: false});
            }
	}),

	pig: new ItemTemplate({ 
			name: "Pig",
			price : 0,
			img: "pig",
			category: "rawMeat",
			useable: false,
			craftTime: 10000,
			use : function(player) {
            	return ({skill: player.skills.health, description: "Used In Cooking", used: false});
            }
	}),

	turkey: new ItemTemplate({ 
			name: "Turkey",
			price : 0,
			img: "turkey",
			category: "rawMeat",
			useable: false,
			craftTime: 10000,
			use : function(player) {
            	return ({skill: player.skills.health, description: "Used In Cooking", used: false});
            }
	}),
}

let plants = {
	carrot: new ItemTemplate({ 
			name: "Carrot",
			price : 0,
			img: "carrot",
			category: "plants",
			useable: false,
			craftTime: 5000,
			use : function(player) {
            	return ({description: "Used For Cooking carrots", used: false});
        	}
	}),

	potatoes: new ItemTemplate({ 
			name: "Potatoes", 
			price : 0,
			img: "potatoes",
			category: "plants",
			useable: false,
			craftTime: 5000,
			use : function(player) {
            	return ({description: "Used For Cooking Potatoes", used: false});
        	}
	}),

	corn: new ItemTemplate({ 
			name: "Corn",
			price : 0,
			img: "corn",
			category: "plants",
			useable: false,
			craftTime: 5000,
			use : function(player) {
            	return ({description: "Used For Cooking Corn", used: false});
        	}
	}),

	cucumber: new ItemTemplate({ 
			name: "cucumber", 
			price : 0,
			img: "cucumber",
			category: "plants",
			useable: false,
			craftTime: 5000,
			use : function(player) {
            	return ({description: "Used For Cooking Cucumber", used: false});
        	}
	}),

	tomatoes: new ItemTemplate({ 
			name: "Tomatoes", 
			price : 0,
			img: "tomatoe",
			category: "plants",
			useable: false,
			craftTime: 5000,
			use : function(player) {
            	return ({description: "Used For Cooking Tomatoes", used: false});
        	}
	}),

	artichoke: new ItemTemplate({ 
			name: "Artichoke", 
			price : 0,
			img: "artichoke",
			category: "plants",
			useable: false,
			craftTime: 5000,
			use : function(player) {
            	return ({description: "Used For Cooking Artichoke", used: false});
        	}
	}),
}


let cookedFood = {

	chicken: new ItemTemplate({ 
			name: "Chicken (C)", 
			price : 5,
			img: "chicken",
			category: "cookedMeat",
			use : function(player) {
				player.skills.hunger.giveLimit(3)
				player.skills.hunger.addXp(20)

            	return ({skill: player.skills.hunger, description: "Eat Up", used: true});
            },
			recipe: [{item: food.chicken, quantity: 1}]
		}),

	cow: new ItemTemplate({ 
			name: "Cow (C)", 
			price : 20,
			img: "cow",
			category: "cookedMeat",
			use : function(player) {
				player.skills.hunger.giveLimit(6)
				player.skills.hunger.addXp(40)

            	return ({skill: player.skills.hunger, description: "Eat Up", used: true});
            },
			recipe: [{item: food.cow, quantity: 1}]
	}),
	
	llama: new ItemTemplate({ 
			name: "Llama (C)", 
			price : 50,
			img: "llama",
			category: "cookedMeat",
			use : function(player) {
				player.skills.hunger.giveLimit(10)
				player.skills.hunger.addXp(80)

            	return ({skill: player.skills.hunger, description: "Eat Up", used: true});
            },
			recipe: [{item: food.llama, quantity: 1}]
	}),
	
	pig: new ItemTemplate({ 
			name: "Pig (C)", 
			price : 100,
			img: "pig",
			category: "cookedMeat",
			use : function(player) {
				player.skills.hunger.giveLimit(20)
				player.skills.hunger.addXp(160)

            	return ({skill: player.skills.hunger, description: "Eat Up", used: true});
            },
			recipe: [{item: food.pig, quantity: 1}]
	}),
	
	turkey: new ItemTemplate({ 
			name: "Turkey (C)", 
			price : 200,
			img: "turkey",
			category: "cookedMeat",
			use : function(player) {
				player.skills.hunger.giveLimit(40)
				player.skills.hunger.addXp(300)

            	return ({skill: player.skills.hunger, description: "Eat Up", used: true});
            },
			recipe: [{item: food.turkey, quantity: 1}]
	}),
	
	carrots: new ItemTemplate({ 
			name: "Carrots (C)", 
			price : 5,
			img: "carrot",
			category: "cookedPlants",
			use : function(player) {
				player.skills.hunger.giveLimit(1)
				player.skills.hunger.addXp(2)

            	return ({skill: player.skills.hunger, description: "Eat Up", used: true});
            },
			recipe: [{item: plants.carrot, quantity: 1}]
	}),
	
	potatoes: new ItemTemplate({ 
			name: "Potatoes (C)", 
			price : 5,
			img: "potatoe",
			category: "cookedPlants",
			use : function(player) {
				player.skills.hunger.giveLimit(5)
				player.skills.hunger.addXp(10)

            	return ({skill: player.skills.hunger, description: "Eat Up", used: true});
            },
			recipe: [{item: plants.potatoes, quantity: 1}]
	}),
	
	corn: new ItemTemplate({ 
			name: "Corn (C)", 
			price : 5,
			img: "corn",
			category: "cookedPlants",
			use : function(player) {
				player.skills.hunger.giveLimit(10)
				player.skills.hunger.addXp(25)

            	return ({skill: player.skills.hunger, description: "Eat Up", used: true});
            },
			recipe: [{item: plants.corn, quantity: 1}]
	}),
	
	cucumber: new ItemTemplate({ 
			name: "Cucumber (C)", 
			price : 5,
			img: "cucumber",
			category: "cookedPlants",
			use : function(player) {
				player.skills.hunger.giveLimit(20)
				player.skills.hunger.addXp(50)

            	return ({skill: player.skills.hunger, description: "Eat Up", used: true});
            },
			recipe: [{item: plants.cucumber, quantity: 1}]
	}),
	
	tomatoes: new ItemTemplate({ 
			name: "Tomatoes (C)", 
			price : 5,
			img: "tomatoe",
			category: "cookedPlants",
			use : function(player) {
				player.skills.hunger.giveLimit(40)
				player.skills.hunger.addXp(100)

            	return ({skill: player.skills.hunger, description: "Eat Up", used: true});
            },
			recipe: [{item: plants.tomatoes, quantity: 1}]
	}),
	
	artichoke: new ItemTemplate({ 
			name: "Artichoke (C)", 
			price : 5,
			img: "artichoke",
			category: "cookedPlants",
			use : function(player) {
				player.skills.hunger.giveLimit(80)
				player.skills.hunger.addXp(200)
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
