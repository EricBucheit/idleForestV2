const ItemTemplate = require('../../Template')
const {Bar} = require("../ResourceItems")
const {armorSettings} = require('../../../../../GlobalSettings/itemSettings');
let BronzeArmor = {
	helm : new ItemTemplate({
		name: "Bronze Helm", 
		price: armorSettings.bronze.helm.price,
		bonus: armorSettings.bronze.helm.bonus,
		img: "bronzeHelm",
		category: "armor",
		craftTime: armorSettings.bronze.helm.craftTime,
		use : function(player) {
			player.armor.add("helm", this, player.inventory);	
			return ({used: false})
		}, 
		recipe : [{item: Bar.bronze, quantity: armorSettings.bronze.helm.craftCostQuantity}]
	}),

	chest : new ItemTemplate({
		name: "Bronze Chest", 
		price: armorSettings.bronze.chest.price,
		bonus : armorSettings.bronze.chest.bonus,
		img: "bronzeChest",
		category: "armor",
		craftTime: armorSettings.bronze.chest.craftTime,

		use : function(player) {
			player.armor.add("chest", this, player.inventory)
			return ({used: false})
		}, 
		recipe : [{item: Bar.bronze, quantity: armorSettings.bronze.chest.craftCostQuantity}]
	}),

	legs : new ItemTemplate({
			name: "Bronze Legs", 
			price: armorSettings.bronze.legs.price,
			bonus : armorSettings.bronze.legs.bonus,
			img: "bronzeLegs",
			category: "armor",
			craftTime: armorSettings.bronze.legs.craftTime,

			use : function(player) {
				player.armor.add("legs", this, player.inventory)
				return ({used: false})
			}, 
			recipe : [{item: Bar.bronze, quantity: armorSettings.bronze.legs.craftCostQuantity}]
	}),

	boots : new ItemTemplate({
		name: "Bronze Boots", 
		price: armorSettings.bronze.boots.price,
		bonus: armorSettings.bronze.boots.bonus,
		img: "bronzeBoots",
		category: "armor",
		craftTime: armorSettings.bronze.boots.craftTime,

		use : function(player) {
				player.armor.add("feet", this, player.inventory);
				return ({used: false})
			}, 
			recipe : [{item: Bar.bronze, quantity: armorSettings.bronze.boots.craftCostQuantity}]
	}),

	shield : new ItemTemplate({
		name: "Bronze Shield", 
		price: armorSettings.bronze.shield.price,
		bonus: armorSettings.bronze.shield.bonus,
		img: "bronzeShield",
		category: "armor",
		craftTime: armorSettings.bronze.shield.craftTime,

		use : function(player) {
			player.armor.add("shield", this, player.inventory);			
			return ({used: false})
		}, 
		recipe : [{item: Bar.bronze, quantity: armorSettings.bronze.shield.craftCostQuantity}]
	})
}

let IronArmor = {
	helm : new ItemTemplate({
		name: "Iron Helm", 
		price: armorSettings.iron.helm.price,
		bonus : armorSettings.iron.helm.bonus,
		img: "ironHelm",		
		category: "armor",
		craftTime: armorSettings.iron.helm.craftTime,
		use : function(player) {
			player.armor.add("helm", this, player.inventory)
			return ({used: false})
		}, 
		recipe : [{item: Bar.iron, quantity: armorSettings.iron.helm.craftCostQuantity}]
	}),

	chest : new ItemTemplate({
		name: "Iron Chest", 
		price: armorSettings.iron.chest.price,
		bonus : armorSettings.iron.chest.bonus,
		img: "ironChest",		
		category: "armor",
		craftTime: armorSettings.iron.chest.craftTime,
		use : function(player) {
			player.armor.add("chest", this, player.inventory)
			return ({used: false})
		}, 
		recipe : [{item: Bar.iron, quantity: armorSettings.iron.chest.craftCostQuantity}]
	}),

	legs : new ItemTemplate({
		name: "Iron Legs", 
		price: armorSettings.iron.legs.price,
		bonus : armorSettings.iron.legs.bonus,
		img: "ironLegs",		
		category: "armor",
		craftTime: armorSettings.iron.legs.craftTime,
		use : function(player) {
			player.armor.add("legs", this, player.inventory);
			return ({used: false})
		}, 
		recipe : [{item: Bar.iron, quantity: armorSettings.iron.legs.craftCostQuantity}]
	}),

	boots : new ItemTemplate({
		name: "Iron Boots", 
		price: armorSettings.iron.boots.price,
		bonus : armorSettings.iron.boots.bonus,
		img: "ironBoots",		
		category: "armor",
		craftTime: armorSettings.iron.boots.craftTime,
		use : function(player) {
			player.armor.add("feet", this, player.inventory);
			return ({used: false})

		}, 
		recipe : [{item: Bar.iron, quantity: armorSettings.iron.boots.craftCostQuantity}]
	}),

	shield : new ItemTemplate({
		name: "Iron Shield", 
		price: armorSettings.iron.shield.price,
		bonus : armorSettings.iron.shield.bonus,
		img: "ironShield",		
		category: "armor",
		craftTime: armorSettings.iron.shield.craftTime,
		use : function(player) {
			player.armor.add("shield", this, player.inventory);
			return ({used: false})
		}, 
		recipe : [{item: Bar.iron, quantity: armorSettings.iron.shield.craftCostQuantity}]
	}),
}

let GoldArmor = {
	helm : new ItemTemplate({
		name: "Gold Helm", 
		price: armorSettings.gold.helm.price,
		bonus : armorSettings.gold.helm.bonus,
		img: "goldHelm",
		category: "armor",
		craftTime: armorSettings.gold.helm.craftTime,
		use : function(player) {
			player.armor.add("helm", this, player.inventory)
			return ({used: false})
		}, 
		recipe : [{item: Bar.gold, quantity: armorSettings.gold.helm.craftCostQuantity}]
	}),

	chest : new ItemTemplate({
		name: "Gold Chest", 
		price: armorSettings.gold.chest.price,
		bonus : armorSettings.gold.chest.bonus,
		img : "goldChest",
		category: "armor",
		craftTime: armorSettings.gold.chest.craftTime,
		use : function(player) {
			player.armor.add("chest", this, player.inventory);
			return ({used: false})

		}, 
		recipe : [{item: Bar.gold, quantity: armorSettings.gold.chest.craftCostQuantity}]
	}),
	
	legs : new ItemTemplate({
		name: "Gold Legs", 
		price: armorSettings.gold.legs.price,
		bonus : armorSettings.gold.legs.bonus,
		img: "goldLegs",
		category: "armor",
		craftTime: armorSettings.gold.legs.craftTime,
		use : function(player) {
			player.armor.add("legs", this, player.inventory);
			return ({used: false})
		}, 
		recipe : [{item: Bar.gold, quantity: armorSettings.gold.legs.craftCostQuantity}]
	}),
	
	boots : new ItemTemplate({
		name: "Gold Boots", 
		price: armorSettings.gold.boots.price,
		bonus : armorSettings.gold.boots.bonus,
		img: "goldBoots",
		category: "armor",
		craftTime: armorSettings.gold.boots.craftTime,
		use : function(player) {
			player.armor.add("feet", this, player.inventory);
			return ({used: false})
		}, 
		recipe : [{item: Bar.gold, quantity: armorSettings.gold.boots.craftCostQuantity}]
	}),

	shield : new ItemTemplate({
		name: "Gold Shield", 
		price: armorSettings.gold.shield.price,
		bonus : armorSettings.gold.shield.bonus,
		img: "goldShield",
		category: "armor",
		craftTime: armorSettings.gold.shield.craftTime,
		use : function(player) {
			player.armor.add("shield", this, player.inventory);
			return ({used: false})
		}, 
		recipe : [{item: Bar.gold, quantity: armorSettings.gold.shield.craftCostQuantity}]
	}),
}


let PlatinumArmor = {
	helm : new ItemTemplate({
		name: "Platinum Helm", 
		price: armorSettings.platinum.helm.price,
		bonus : armorSettings.platinum.helm.bonus,
		img: "platinumHelm",
		category: "armor",
		craftTime: armorSettings.platinum.helm.craftTime,
		use : function(player) {
			player.armor.add("helm", this, player.inventory)
			return ({used: false})

		}, 
		recipe : [{item: Bar.platinum, quantity: armorSettings.platinum.helm.craftCostQuantity}]
	}),

	chest : new ItemTemplate({
		name: "Platinum Chest", 
		price: armorSettings.platinum.chest.price,
		bonus : armorSettings.platinum.chest.bonus,
		img: "platinumChest",
		category: "armor",
		craftTime: armorSettings.platinum.chest.craftTime,
		use : function(player) {
			player.armor.add("chest", this, player.inventory)
			return ({used: false})
		}, 
		recipe : [{item: Bar.platinum, quantity: armorSettings.platinum.chest.craftCostQuantity}]
	}),

	legs : new ItemTemplate({
		name: "Platinum Legs", 
		price: armorSettings.platinum.legs.price,
		bonus : armorSettings.platinum.legs.bonus,
		img: "platinumLegs",
		category: "armor",
		craftTime: armorSettings.platinum.legs.craftTime,
		use : function(player) {
			player.armor.add("legs", this, player.inventory);
			return ({used: false})

		}, 
		recipe : [{item: Bar.platinum, quantity: armorSettings.platinum.legs.craftCostQuantity}]
	}),
	boots : new ItemTemplate({
		name: "Platinum Boots", 
		price: armorSettings.platinum.boots.price,
		bonus : armorSettings.platinum.boots.bonus,
		img: "platinumBoots",		
		category: "armor",
		craftTime: armorSettings.platinum.boots.craftTime,
		use : function(player) {
			player.armor.add("feet", this, player.inventory);
			return ({used: false})
		}, 
		recipe : [{item: Bar.platinum, quantity: armorSettings.platinum.boots.craftCostQuantity}]
	}),

	shield : new ItemTemplate({
		name: "Platinum Shield", 
		price: armorSettings.platinum.shield.price, 
		bonus : armorSettings.platinum.shield.bonus,
		img: "platinumShield",		
		category: "armor",
		craftTime: armorSettings.platinum.shield.craftTime,
		use : function(player) {
			player.armor.add("shield", this, player.inventory);
			return ({used: false})
		}, 
		recipe : [{item: Bar.platinum, quantity: armorSettings.platinum.shield.craftCostQuantity}]
	}),

}

let DiamondArmor = {
		helm : new ItemTemplate({
			name: "Diamond Helm", 
			price: armorSettings.diamond.helm.price, 
			bonus : armorSettings.diamond.helm.bonus,
			img: "diamondHelm",
			category: "armor",
			craftTime: armorSettings.diamond.helm.craftTime,
			use : function(player) {
				player.armor.add("helm", this, player.inventory)
				return ({used: false})
			}, 
			recipe : [{item: Bar.diamond, quantity: armorSettings.diamond.helm.craftCostQuantity}]
			}),

		chest : new ItemTemplate({
			name: "Diamond Chest", 
			price: armorSettings.diamond.chest.price, 
			bonus : armorSettings.diamond.chest.bonus,
			img: "diamondChest",
			category: "armor",
			craftTime: armorSettings.diamond.chest.craftTime,
			use : function(player) {
				player.armor.add("chest", this, player.inventory)
				return ({used: false})
			}, 
			recipe : [{item: Bar.diamond, quantity: armorSettings.diamond.chest.craftCostQuantity}]
		}),
		legs : new ItemTemplate({
			name: "Diamond Legs", 
			price: armorSettings.diamond.legs.price, 
			bonus : armorSettings.diamond.legs.bonus,
			img: "diamondLegs",
			category: "armor",
			craftTime: armorSettings.diamond.legs.craftTime,
			use : function(player) {
				player.armor.add("legs", this, player.inventory)
				return ({used: false})
			}, 
			recipe : [{item: Bar.diamond, quantity: armorSettings.diamond.legs.craftCostQuantity}]
		}),
		boots : new ItemTemplate({
			name: "Diamond Boots", 
			price: armorSettings.diamond.boots.price, 
			bonus : armorSettings.diamond.boots.bonus,
			img: "diamondBoots",
			category: "armor",
			craftTime: armorSettings.diamond.boots.craftTime,
			use : function(player) {
				player.armor.add("feet", this, player.inventory);
				return ({used: false})
			}, 
			recipe : [{item: Bar.diamond, quantity: armorSettings.diamond.boots.craftCostQuantity}]
		}),
		shield : new ItemTemplate({
			name: "Diamond Shield", 
			price: armorSettings.diamond.shield.price,
			bonus : armorSettings.diamond.shield.bonus,
			img: "diamondShield",
			category: "armor",
			craftTime: armorSettings.diamond.shield.craftTime,
			use : function(player) {
				player.armor.add("shield", this, player.inventory)
				return ({used: false})
			},
			recipe : [{item: Bar.diamond, quantity: armorSettings.diamond.shield.craftCostQuantity}]
		}),

}

module.exports = {
	 BronzeArmor,
	 IronArmor,
	 GoldArmor,
	 PlatinumArmor,
	 DiamondArmor
}

