let itemSettings = {
	consumeable : {
	     potion : {
	     	meatCost: 1,
	     	vegetableCost: 5,
	        tiny : {
	        	price: 100,
	        	boost: 2,
	        },
	        small : {
	        	price: 500,
	        	boost: 7,
	        },
	        medium : {
	        	price: 1500,
	        	boost: 16,
	        },
	        large : {
	        	price: 3000,
	        	boost: 35,
	        },
	        giant : {
	        	price: 6000,
	        	boost: 70,
	        },
	        god : {
	        	price: 10000,
	        	boost: 150,
	        },
	     },

	     food : {
	        chicken : {
	        	price : 0,
				craftTime : 10000,
	        },
	        cow : {
	        	price : 0,
				craftTime : 10000,
	        },
	        llama : {
	        	price : 0,
				craftTime : 10000,
	        },
	        pig : {
	        	price : 0,
				craftTime : 10000,
	        },
	        turkey : {
	        	price : 0,
				craftTime : 10000,
	        },
	     },
	     water : {
	        tiny : {
				bonus: 1,
				xp: 10,

	        },
	        small : {
				bonus: 2,
				xp: 25,

	        },
	        medium : {
				bonus: 4,
				xp: 60,

	        },
	        large : {
				bonus: 8,
				xp: 130,

	        },
	        giant : {
				bonus: 16,
				xp: 270,
	        },
	        god : {
				bonus: 32,
				xp: 500,

	        },
	     },

	     cooked : {
	        chicken : {
				price: 5,
				craftTime: 5000,
				bonus: 3, 
				xp: 20,
	        },
	        cow : {
				price: 20,
				craftTime: 5000,
				bonus: 6,
				xp: 40,
	        },
	        llama : {
				price: 50,
				craftTime: 7000,
				bonus: 10,
				xp: 80,
	        },
	        pig : {
				price: 100, 
				craftTime: 9000,
				bonus: 20,
				xp: 160,
	        },
	        turkey : {
				price: 200,
				craftTime: 10000,
				bonus: 40,
				xp: 300,
	        },
	        carrots : {
				price: 10,
				craftTime: 3000, 
				bonus: 1,
				xp: 8,
	        },
	        potatoes : {
				price: 20,
				craftTime: 3000,
				bonus: 4,
				xp: 20,
	        },
	        corn : {
				price: 30,
				craftTime: 4000,
				bonus: 8,
				xp: 30,
	        },
	        cucumber : {
				price: 40,
				craftTime: 4000,
				bonus: 16,
				xp: 40,
	        },
	        tomatoes : {
				price: 50,
				craftTime: 5000,
				bonus: 25,
				xp: 80,
	        },
	        artichoke : {
				price: 60,
				craftTime: 6000,
				bonus: 40,
				xp: 140,
	        },
	    },
		plants : {
	        carrot : {
	        	price: 0,
				craftTime: 5000,
	        },
	        potatoes : {
	        	price: 0,
				craftTime: 5000,
	        },
	        corn : {
	        	price: 0,
				craftTime: 5000,
	        },
	        cucumber : {
	        	price: 0,
				craftTime: 5000,
	        },
	        tomatoes : {
	        	price: 0,
				craftTime: 5000,
	        },
	        artichoke : {
	        	price: 0,
				craftTime: 5000,
	        },
		}
	}, 
	resources : {
	    ores : {
	        tin : {

	        },
	        copper : {

	        },
	        iron : {

	        },
	        gold : {

	        },
	        platinum : {

	        },
	        diamond : {

	        },
	     },
	    wood : {
	        oak : {

	        },
	        maple : {

	        },
	        mahogony : {

	        },
	        magic : {

	        },
	        super : {

	        },
	     },
	    seeds : {
	    	harvestQuantity: 2,
	    	seedsNeededToPlant: 1,
	        carrot : {

	        },
	        potatoe : {

	        },
	        corn : {

	        },
	        cucumber : {

	        },
	        tomatoe : {

	        },
	        artichoke : {

	        },
	     },
	    bars : {
	    	barCreationQuantity : 5,
	        bronze : {
	        	craftTime: 5000,
	        },
	        iron : {
	        	craftTime: 6000,
	        },
	        gold : {
	        	craftTime: 8000,
	        },
	        platinum : {
	        	craftTime: 9000,
	        },
	        diamond : {
	        	craftTime: 10000,
	        },
	    },
	},
	armor : {
		bronze : {
			helm : {
				price: 10000,
				bonus: 12,
				craftTime: 60000,
				craftCostQuantity: 30
			},
			chest : {
				price: 15000,
				bonus : 18,
				craftTime: 60000,
				craftCostQuantity: 50
			},
			legs : {
				price: 13000,
				bonus : 16,
				craftTime: 60000,
				craftCostQuantity: 40
			},
			boots : {
				price: 9000,
				bonus: 10,
				craftTime: 60000,
				craftCostQuantity: 20
			},
			shield : {
				price: 13000,
				bonus: 19,
				craftTime: 60000,
				craftCostQuantity: 30
			},
		},
		iron : {
			helm : {
				price: 50000,
				bonus : 27,
				craftTime: 120000,
				craftCostQuantity: 50, 
			},
			chest : {
				price: 65000,
				bonus : 34,
				craftTime: 120000,
				craftCostQuantity: 80
			},
			legs : {
				price: 60000,
				bonus : 32,
				craftTime: 120000,
				craftCostQuantity: 70
			},
			boots : {
				price: 40000,
				bonus : 25,
				craftTime: 120000,
				craftCostQuantity: 40
			},
			shield : {
				price: 60000,
				bonus : 29,
				craftTime: 120000,
				craftCostQuantity: 60,
			},
		},
		gold : {
			helm : {
				price: 100000,
				bonus : 75,
				craftTime: 180000,
				craftCostQuantity: 50
			},
			chest : {
				price: 180000,
				bonus : 99,
				craftTime: 180000,
				craftCostQuantity: 80,
			},
			legs : {
				price: 110000,
				bonus : 92,
				craftTime: 180000,
				craftCostQuantity: 70
			},
			boots : {
				price: 90000,
				bonus : 65,
				craftTime: 180000,
				craftCostQuantity: 40
			},
			shield : {
				price: 112000,
				bonus : 85,
				craftTime: 180000,
				craftCostQuantity: 60
			},
		},
		platinum : {
			helm : {
				price: 200000,
				bonus : 122,
				craftTime: 240000,
				craftCostQuantity: 50
			},
			chest : {
				price: 250000,
				bonus : 147,
				craftTime: 240000,
				craftCostQuantity: 80
			},
			legs : {
				price: 225000,
				bonus : 142,
				craftTime: 240000,
				craftCostQuantity: 70
			},
			boots : {
				price: 190000,
				bonus : 110,
				craftTime: 240000,
				craftCostQuantity: 40
			},
			shield : {
				price: 230000, 
				bonus : 130,
				craftTime: 240000,
				craftCostQuantity: 60
			},
		},
		diamond : {
			helm : {
				price: 500000, 
				bonus : 185,
				craftTime: 300000,
				craftCostQuantity: 100
			},
			chest : {
				price: 750000, 
				bonus : 210,
				craftTime: 300000,
				craftCostQuantity: 150
			},
			legs : {
				price: 600000,
				bonus : 200,
				craftTime: 300000,
				craftCostQuantity: 130
			},
			boots : {
				price: 450000, 
				bonus : 174,
				craftTime: 300000,
				craftCostQuantity: 80
			},
			shield : {
				price: 610000,
				bonus : 194,
				craftTime: 300000,
				craftCostQuantity: 120
			},
		},
	}, 
	weapon : {
		bronze : {
			mace: {
				price : 10000, 
				bonus : 8,
				speed : 150,
				craftTime: 60000,
				barCraftQuantity: 10,
				woodCraftQuantity: 500,
			},

			sword: {
				price : 30000, 
				bonus : 12,
				speed : 125,
				craftTime: 60000,
				barCraftQuantity: 20,
				woodCraftQuantity: 700,
			},

			axe: {
				price : 50, 
				bonus : 2,
				speed : 150,
				craftTime: 30000,
				barCraftQuantity: 2,
				woodCraftQuantity: 20,
			},

			pickaxe: {
				price : 50, 
				bonus : 2,
				speed : 150,
				craftTime: 30000,
				barCraftQuantity: 2,
				woodCraftQuantity: 20,
			},
		},

		iron : {
			mace : {
				price : 100000, 
				bonus : 20,
				speed : 140,
				craftTime: 120000,
				barCraftQuantity: 10, 
				woodCraftQuantity: 500,
			},
			sword : {
				price : 115000, 
				bonus : 26,
				speed : 115,
				craftTime: 120000,
				barCraftQuantity: 20, 
				woodCraftQuantity: 700,
			},
			axe : {
				price : 500, 
				bonus : 10,
				speed : 140,
				barCraftQuantity: 2,
				woodCraftQuantity: 20,
			},
			pickaxe : {
				price : 500, 
				bonus : 10,
				speed : 140,
				craftTime: 60000,
				barCraftQuantity: 2,
				woodCraftQuantity: 20,
			},

		},
		gold : {
			mace: {
				price : 300000, 
				bonus : 53,
				speed : 130,
				craftTime: 180000,
				barCraftQuantity: 10,
				woodCraftQuantity: 500
			},

			sword: {
				price : 350000, 
				bonus : 72,
				speed : 105,
				craftTime: 180000,
				barCraftQuantity: 20,
				woodCraftQuantity: 700
			},

			axe: {
				price : 20000, 
				bonus : 54,
				speed : 130,
				craftTime: 90000,
				barCraftQuantity: 2,
				woodCraftQuantity: 20
			},
	
			pickaxe: {
				price : 20000, 
				bonus : 54,
				speed : 130,
				craftTime: 90000,
				barCraftQuantity: 2,
				woodCraftQuantity: 20
			},
		},
		platinum : {
			mace : {
				price : 800000, 
				bonus : 110,
				speed : 120,
				craftTime: 240000,
				barCraftQuantity: 20,
				woodCraftQuantity: 500
			},
			sword : {
				price : 900000, 
				bonus : 130,
				speed : 95,
				craftTime: 240000,
				barCraftQuantity: 30,
				woodCraftQuantity: 700
			},
			axe : {
				price : 50000, 
				bonus : 110,
				speed : 120,
				craftTime: 120000,
				barCraftQuantity: 2,
				woodCraftQuantity: 20
			},
			pickaxe : {
				price : 50000, 
				bonus : 110,
				speed : 120,
				craftTime: 120000,
				barCraftQuantity: 2,
				woodCraftQuantity: 20
			},
		},
		diamond : {
			mace : {
				price : 2000000, 
				bonus : 154,
				speed : 110,
				craftTime: 300000,
				barCraftQuantity: 50,
				woodCraftQuantity: 500
			},
			sword : {
				price : 2500000, 
				bonus : 175,
				craftTime: 300000,
				barCraftQuantity: 75,
				woodCraftQuantity: 70
			},
			axe : {
				price : 100000, 
				bonus : 160,
				speed : 110,
				craftTime: 240000,
				barCraftQuantity: 2,
				woodCraftQuantity: 20
			},
			pickaxe : {
				price : 100000, 
				bonus : 160,
				speed : 110,
				craftTime: 240000,
				barCraftQuantity: 2,
				woodCraftQuantity: 20
			},
		},
		bow : {
			oak : {
				price : 10000, 
				bonus : 20,
				speed : 120,
				craftTime : 10000,
				woodCraftQuantity: 500,
			},
			maple : {
				price : 100000, 
				bonus : 42,
				speed : 110,
				craftTime : 20000,
				woodCraftQuantity: 500,
			},
			mahogony : {
				price : 500000, 
				bonus : 65,
				speed : 100,
				img: "mahogonyBow",
				category: "range",
				craftTime : 30000, 
				woodCraftQuantity: 500,
			},
			magic : {
				price : 1000000, 
				bonus : 88,
				speed : 90,
				craftTime : 40000,
				woodCraftQuantity: 500,
			},
			super : {
				price : 10000000, 
				bonus : 123,
				speed : 80,
				craftTime : 50000,
				woodCraftQuantity: 500,
			},
		},
		arrows : {
			bronze : {
				price : 200, 
				bonus : 22,
				craftTime: 5000,
				barCraftQuantity:1,
				woodCraftQuantity: 1,
			},
			iron : {
				price : 500, 
				bonus : 32,
				craftTime: 6000,
				barCraftQuantity:1,
				woodCraftQuantity: 1,
			},
			gold : {
				price : 2000, 
				bonus : 44,
				craftTime: 7000,
				barCraftQuantity:1,
				woodCraftQuantity: 1,
			},
			platinum : {
				price : 5000, 
				bonus : 56,
				craftTime: 8000,
				barCraftQuantity:1,
				woodCraftQuantity: 1,
			},
			diamond : {
				price : 10000, 
				bonus : 76,
				craftTime: 10000,
				barCraftQuantity:1,
				woodCraftQuantity: 1,
			},
		},
	},
	magic : {
	    stones : {
			teleport : {
				xp: 4,
				multiplier: 10,
			},
			shield : {
				xp: 4,
				multiplier: 10,
			},
			attack : {
				xp: 4,
				multiplier: 10,
			},
			archer : {
				xp: 4,
				multiplier: 10,
			},
			mining : {
				xp: 4,
				multiplier: 10,
			},
			hunting : {
				xp: 4,
				multiplier: 10,
			},
			woodcutting : {
				xp: 4,
				multiplier: 10,
			},
	    },
	},
}

module.exports = {
	potionSettings: itemSettings.consumeable.potion,
	waterSettings: itemSettings.consumeable.water,
	foodSettings: itemSettings.consumeable.food,
	plantSettings: itemSettings.consumeable.plants,
	cookedSettings : itemSettings.consumeable.cooked,
	seedSettings : itemSettings.resources.seeds,
	barSettings: itemSettings.resources.bars,
	magicSettings: itemSettings.magic.stones,
	armorSettings: itemSettings.armor,
	weaponSettings: itemSettings.weapon,
}

