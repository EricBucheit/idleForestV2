const ItemTemplate = require('../../Template')
const {Bar} = require("../ResourceItems")

let BronzeArmor = {
	helm : new ItemTemplate({
		name: "Bronze Helm", 
		price: 10000,
		bonus: 12,
		img: "bronzeHelm",
		category: "armor",
		craftTime: 60000,
		use : function(player) {
			player.armor.add("helm", this, player.inventory);	
			return ({used: false})
		}, 
		recipe : [{item: Bar.bronze, quantity: 30}]
	}),

	chest : new ItemTemplate({
		name: "Bronze Chest", 
		price: 15000,
		bonus : 18,
		img: "bronzeChest",
		category: "armor",
		craftTime: 60000,

		use : function(player) {
			player.armor.add("chest", this, player.inventory)
			return ({used: false})
		}, 
		recipe : [{item: Bar.bronze, quantity: 50}]
	}),

	legs : new ItemTemplate({
			name: "Bronze Legs", 
			price: 13000,
			bonus : 16,
			img: "bronzeLegs",
			category: "armor",
			craftTime: 60000,

			use : function(player) {
				player.armor.add("legs", this, player.inventory)
				return ({used: false})
			}, 
			recipe : [{item: Bar.bronze, quantity: 40}]
	}),

	boots : new ItemTemplate({
		name: "Bronze Boots", 
		price: 9000,
		bonus: 10,
		img: "bronzeBoots",
		category: "armor",
		craftTime: 60000,

		use : function(player) {
				player.armor.add("feet", this, player.inventory);
				return ({used: false})
			}, 
			recipe : [{item: Bar.bronze, quantity: 20}]
	}),

	shield : new ItemTemplate({
		name: "Bronze Shield", 
		price: 13000,
		bonus: 19,
		img: "bronzeShield",
		category: "armor",
		craftTime: 60000,

		use : function(player) {
			player.armor.add("shield", this, player.inventory);			
			return ({used: false})
		}, 
		recipe : [{item: Bar.bronze, quantity: 30}]
	})
}

let IronArmor = {
	helm : new ItemTemplate({
		name: "Iron Helm", 
		price: 50000,
		bonus : 27,
		img: "ironHelm",		
		category: "armor",
		craftTime: 120000,
		use : function(player) {
			player.armor.add("helm", this, player.inventory)
			return ({used: false})
		}, 
		recipe : [{item: Bar.iron, quantity: 50}]
	}),

	chest : new ItemTemplate({
		name: "Iron Chest", 
		price: 65000,
		bonus : 34,
		img: "ironChest",		
		category: "armor",
		craftTime: 120000,
		use : function(player) {
			player.armor.add("chest", this, player.inventory)
			return ({used: false})
		}, 
		recipe : [{item: Bar.iron, quantity: 80}]
	}),

	legs : new ItemTemplate({
		name: "Iron Legs", 
		price: 60000,
		bonus : 32,
		img: "ironLegs",		
		category: "armor",
		craftTime: 120000,
		use : function(player) {
			player.armor.add("legs", this, player.inventory);
			return ({used: false})
		}, 
		recipe : [{item: Bar.iron, quantity: 70}]
	}),

	boots : new ItemTemplate({
		name: "Iron Boots", 
		price: 40000,
		bonus : 25,
		img: "ironBoots",		
		category: "armor",
		craftTime: 120000,
		use : function(player) {
			player.armor.add("feet", this, player.inventory);
			return ({used: false})

		}, 
		recipe : [{item: Bar.iron, quantity: 40}]
	}),

	shield : new ItemTemplate({
		name: "Iron Shield", 
		price: 60000,
		bonus : 29,
		img: "ironShield",		
		category: "armor",
		craftTime: 120000,
		use : function(player) {
			player.armor.add("shield", this, player.inventory);
			return ({used: false})
		}, 
		recipe : [{item: Bar.iron, quantity: 60}]
	}),
}

let GoldArmor = {
	helm : new ItemTemplate({
		name: "Gold Helm", 
		price: 100000,
		bonus : 47,
		img: "goldHelm",
		category: "armor",
		craftTime: 180000,
		use : function(player) {
			player.armor.add("helm", this, player.inventory)
			return ({used: false})
		}, 
		recipe : [{item: Bar.gold, quantity: 50}]
	}),

	chest : new ItemTemplate({
		name: "Gold Chest", 
		price: 180000,
		bonus : 56,
		img : "goldChest",
		category: "armor",
		craftTime: 180000,
		use : function(player) {
			player.armor.add("chest", this, player.inventory);
			return ({used: false})

		}, 
		recipe : [{item: Bar.gold, quantity: 80}]
	}),
	
	legs : new ItemTemplate({
		name: "Gold Legs", 
		price: 110000,
		bonus : 52,
		img: "goldLegs",
		category: "armor",
		craftTime: 180000,
		use : function(player) {
			player.armor.add("legs", this, player.inventory);
			return ({used: false})
		}, 
		recipe : [{item: Bar.gold, quantity: 70}]
	}),
	
	boots : new ItemTemplate({
		name: "Gold Boots", 
		price: 90000,
		bonus : 48,
		img: "goldBoots",
		category: "armor",
		craftTime: 180000,
		use : function(player) {
			player.armor.add("feet", this, player.inventory);
			return ({used: false})
		}, 
		recipe : [{item: Bar.gold, quantity: 40}]
	}),

	shield : new ItemTemplate({
		name: "Gold Shield", 
		price: 112000,
		bonus : 51,
		img: "goldShield",
		category: "armor",
		craftTime: 180000,
		use : function(player) {
			player.armor.add("shield", this, player.inventory);
			return ({used: false})
		}, 
		recipe : [{item: Bar.gold, quantity: 60}]
	}),
}


let PlatinumArmor = {
	helm : new ItemTemplate({
		name: "Platinum Helm", 
		price: 200000,
		bonus : 68,
		img: "platinumHelm",
		category: "armor",
		craftTime: 240000,
		use : function(player) {
			player.armor.add("helm", this, player.inventory)
			return ({used: false})

		}, 
		recipe : [{item: Bar.platinum, quantity: 50}]
	}),

	chest : new ItemTemplate({
		name: "Platinum Chest", 
		price: 250000,
		bonus : 75,
		img: "platinumChest",
		category: "armor",
		craftTime: 240000,
		use : function(player) {
			player.armor.add("chest", this, player.inventory)
			return ({used: false})
		}, 
		recipe : [{item: Bar.platinum, quantity: 80}]
	}),

	legs : new ItemTemplate({
		name: "Platinum Legs", 
		price: 225000,
		bonus : 72,
		img: "platinumLegs",
		category: "armor",
		craftTime: 240000,
		use : function(player) {
			player.armor.add("legs", this, player.inventory);
			return ({used: false})

		}, 
		recipe : [{item: Bar.platinum, quantity: 70}]
	}),
	boots : new ItemTemplate({
		name: "Platinum Boots", 
		price: 190000,
		bonus : 69,
		img: "platinumBoots",		
		category: "armor",
		craftTime: 240000,
		use : function(player) {
			player.armor.add("feet", this, player.inventory);
			return ({used: false})
		}, 
		recipe : [{item: Bar.platinum, quantity: 40}]
	}),

	shield : new ItemTemplate({
		name: "Platinum Shield", 
		price: 230000, 
		bonus : 70,
		img: "platinumShield",		
		category: "armor",
		craftTime: 240000,
		use : function(player) {
			player.armor.add("shield", this, player.inventory);
			return ({used: false})
		}, 
		recipe : [{item: Bar.platinum, quantity: 60}]
	}),

}

let DiamondArmor = {
		helm : new ItemTemplate({
			name: "Diamond Helm", 
			price: 500000, 
			bonus : 88,
			img: "diamondHelm",
			category: "armor",
			craftTime: 300000,
			use : function(player) {
				player.armor.add("helm", this, player.inventory)
				return ({used: false})
			}, 
			recipe : [{item: Bar.diamond, quantity: 100}]
			}),

		chest : new ItemTemplate({
			name: "Diamond Chest", 
			price: 750000, 
			bonus : 95,
			img: "diamondChest",
			category: "armor",
			craftTime: 300000,
			use : function(player) {
				player.armor.add("chest", this, player.inventory)
				return ({used: false})
			}, 
			recipe : [{item: Bar.diamond, quantity: 150}]
		}),
		legs : new ItemTemplate({
			name: "Diamond Legs", 
			price: 600000, 
			bonus : 91,
			img: "diamondLegs",
			category: "armor",
			craftTime: 300000,
			use : function(player) {
				player.armor.add("legs", this, player.inventory)
				return ({used: false})
			}, 
			recipe : [{item: Bar.diamond, quantity: 130}]
		}),
		boots : new ItemTemplate({
			name: "Diamond Boots", 
			price: 450000, 
			bonus : 86,
			img: "diamondBoots",
			category: "armor",
			craftTime: 300000,
			use : function(player) {
				player.armor.add("feet", this, player.inventory);
				return ({used: false})
			}, 
			recipe : [{item: Bar.diamond, quantity: 80}]
		}),
		shield : new ItemTemplate({
			name: "Diamond Shield", 
			price: 610000,
			bonus : 90,
			img: "diamondShield",
			category: "armor",
			craftTime: 300000,
			use : function(player) {
				player.armor.add("shield", this, player.inventory)
				return ({used: false})
			},
			recipe : [{item: Bar.diamond, quantity: 120}]
		}),

}

module.exports = {
	 BronzeArmor,
	 IronArmor,
	 GoldArmor,
	 PlatinumArmor,
	 DiamondArmor
}

