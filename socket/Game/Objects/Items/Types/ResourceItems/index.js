const ItemTemplate = require("../../Template");

const {plants} = require("../ConsumeableItems/food")

let harvestQuantity = 10;
let barCreationQuantity = 5;

let Ore = {
	tin : new ItemTemplate({
			name: "Ore (T)",
			img: "tin",
			category: "ore",
			useable : false,
			use : function() {
				return ({description: "Used to Craft Armor and Weapons", used: false});
			}
	}),

	copper : new ItemTemplate({
			name: "Ore (C)",
			img: "copper",
			category: "ore",
			useable : false,
			use : function() {
				return ({description: "Used to Craft Armor and Weapons", used: false});
			}
	}),

	iron : new ItemTemplate({
			name: "Ore (I)",
			img: "iron",
			category: "ore",
			useable : false,
			use : function() {
				return ({description: "Used to Craft Armor and Weapons", used: false});
			}
	}),

	gold : new ItemTemplate({
			name: "Ore (G)",
			img: "gold",
			category: "ore",
			useable : false,
			use : function() {
				return ({description: "Used to Craft Armor and Weapons", used: false});
			}
	}),

	platinum : new ItemTemplate({
			name: "Ore (P)",
			img: "platinum",
			category: "ore",
			useable : false,
			use : function() {
				return ({description: "Used to Craft Armor and Weapons", used: false});
			}
	}),

	diamond: new ItemTemplate({
			name: "Diamond",
			img: "diamond",
			category: "ore",
			useable : false,
			use : function() {
				return ({description: "Used To Craft The Best Armor and Weapons", used: false});
			}
	}),
}

let Bar = {
	bronze: new ItemTemplate({
			name: "Bar (B)",
			img: "bronze",
			category: "bar",
			useable : false,
			craftTime: 5000,
			use : function() {
				return ({description: "Used To Create Armor and Weapons", used: false});
			},
			recipe: [{item: Ore.copper, quantity: barCreationQuantity}, {item: Ore.tin, quantity: barCreationQuantity}]
	}),

	iron: new ItemTemplate({
			name: "Bar (I)",
			img: "iron",
			category: "bar",
			useable : false,
			craftTime: 6000,
			use : function() {
				return ({description: "Used To Create Armor and Weapons", used: false});
			},
			recipe: [{item: Ore.iron, quantity:  barCreationQuantity}]
	}),

	gold: new ItemTemplate({
			name: "Bar (G)",
			img: "gold",
			category: "bar",
			useable : false,
			craftTime: 8000,
			use : function() {
				return ({description: "Used To Create Armor and Weapons", used: false});
			},
			recipe: [{item: Ore.gold, quantity:  barCreationQuantity}]
	}),

	platinum: new ItemTemplate({
			name: "Bar (P)",
			img: "platinum",
			category: "bar",
			useable : false,
			craftTime: 9000,
			use : function() {
				return ({description: "Used To Create Armor and Weapons", used: false});
			},
			recipe: [{item: Ore.platinum, quantity:  barCreationQuantity}]
	}),

	diamond: new ItemTemplate({
			name: "Diamond Brick",
			img: "diamond",
			category: "bar",
			useable : false,
			craftTime: 10000,
			use : function() {
				return ({description: "Used To Craft Diamond Armor", used: false});
			},
			recipe: [{item: Ore.diamond, quantity: barCreationQuantity}]
	}),
}


let Wood = {
	oak : new ItemTemplate({
			name: "Oak",
			img: "oak",
			category: "wood",
			useable: false,
			use : function() {
            	return ({description: "Used to Fletch weapon Handles", used: false});
			}
	}),

	maple : new ItemTemplate({
			name: "Maple",
			img: "maple", 
			category: "wood",
			useable: false,
			use : function() {
            	return ({description: "Used to Fletch weapon Handles", used: false});
			}
	}),

	mahogony : new ItemTemplate({
			name: "Mahogony",
			img: "mahogony",
			category: "wood",
			useable: false,
			use : function() {
            	return ({description: "Used to Fletch weapon Handles", used: false});
			}
	}),

	magic : new ItemTemplate({
			name: "Magic Log", 
			img: "magic",
			category: "wood",
			useable: false,
			use : function() {
            	return ({description: "Used to Fletch weapon Handles", used: false});
			}
	}),

	super : new ItemTemplate({
			name: "Super Log",
			img: "super",
			category: "wood",
			useable: false,
			use : function() {
            	return ({description: "Used to Fletch weapon Handles", used: false});
			}
	}),
}

let Seeds = {
	carrot : new ItemTemplate({
		name: "Seeds (C)",
		img: "carrot",
		category: "seed",
		useable: false,
		use : function() {
			let item = plants.carrot.copy();
			item.quantity = harvestQuantity;
        	return ({item : item, description: "Used For Farming carrots", used: false});
		}
	}),

	potatoe : new ItemTemplate({
		name: "Seeds (P)",
		img: "potatoe",
		category: "seed",
		useable: false,
		use : function() {
			let item = plants.potatoes.copy();
			item.quantity = harvestQuantity;	

        return ({item : item, description: "Used For Farming Potatoes", used: false});
	}
	}),

	corn : new ItemTemplate({
		name: "Seeds (CO)",
		img: "corn",
		category: "seed",
		useable: false,
		use : function() {
			let item = plants.corn.copy();
			item.quantity = harvestQuantity;
        	return ({item : item, description: "Used For Farming Corn", used: false});
		}
	}),

	cucumber : new ItemTemplate({
		name: "Seeds (CU)",
		img: "cucumber",
		category: "seed",
		useable: false,
		use : function() {
			let item = plants.cucumber.copy();
			item.quantity = harvestQuantity;
        	return ({item : item, description: "Used For Farming Cucumber", used: false});
		}
	}),

	tomatoe : new ItemTemplate({
		name: "Seeds (T)",
		img: "tomatoe",
		category: "seed",
		useable: false,
		use : function() {
			let item = plants.tomatoes.copy();
			item.quantity = harvestQuantity;
        	return ({item : item, description: "Used For Farming Tomatoes", used: false});
		}
	}),

	artichoke : new ItemTemplate({
		name: "Seeds (A)",
		img: "artichoke",
		category: "seed",
		useable: false,
		use : function() {
			let item = plants.artichoke.copy();
			item.quantity = harvestQuantity;
        	return ({item : item, description: "Used For Farming Artichoke", used: false});
		}
	}),
}




module.exports = {
	 Ore,
	 Bar,
	 Wood,
	 Seeds
}

