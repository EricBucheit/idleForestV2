const ItemTemplate = require('../../Template')

const {Bar, Wood} = require("../ResourceItems")

let BronzeWeapons = {

	mace: new ItemTemplate({
		name : "Mace (B)", 
		price : 10000, 
		bonus : 8,
		speed : 150,
		img: "bronzeMace",
		category: "weapon",
		craftTime: 60000,
		use : function(player) {
			player.armor.add("weapon", this, player.inventory);
			return({used: false})
		}, 
		recipe: [
			{item: Bar.bronze, quantity: 10}, 
			{item: Wood.oak, quantity: 500}
		]
	}),

	sword: new ItemTemplate({
		name : "Sword (B)", 
		price : 30000, 
		bonus : 12,
		speed : 125,
		img: "bronzeSword",
		category: "weapon",
		craftTime: 60000,
		use : function(player) {
			player.armor.add("weapon", this, player.inventory);
			return({used: false})
		}, 
		recipe: [
			{item: Bar.bronze, quantity: 20}, 
			{item: Wood.oak, quantity: 700}
		]
	}),

	axe: new ItemTemplate({
		name : "Axe (B)", 
		price : 50, 
		bonus : 2,
		speed : 150,
		img: "bronzeAxe",
		category: "tools",
		craftTime: 30000,
		use : function(player) {
			player.armor.add("axe", this, player.inventory);
			return({used: false})
		}, 
		recipe: [
			{item: Bar.bronze, quantity: 2}, 
			{item: Wood.oak, quantity: 20}
		]
	}),

	pickaxe: new ItemTemplate({
		name : "pickaxe (B)", 
		price : 50, 
		bonus : 2,
		speed : 150,
		img: "bronzePickaxe",
		category: "tools",
		craftTime: 30000,
		use : function(player) {
			player.armor.add("pickaxe", this, player.inventory);
			return({used: false})
		}, 
		recipe: [
			{item: Bar.bronze, quantity: 2}, 
			{item: Wood.oak, quantity: 20}
		]
	}),
}

let IronWeapons = {
	mace: new ItemTemplate({
		name : "Iron Mace", 
		price : 100000, 
		bonus : 20,
		speed : 140,
		img: "ironMace",
		category: "weapon",
		craftTime: 120000,
		use : function(player) {
			player.armor.add("weapon", this, player.inventory);
			return({used: false})
		}, 
		recipe: [
			{item: Bar.iron, quantity: 10}, 
			{item: Wood.maple, quantity: 500}
		]
	}),

	sword: new ItemTemplate({
		name : "Iron Sword", 
		price : 115000, 
		bonus : 26,
		speed : 115,
		img: "ironSword",
		category: "weapon",
		craftTime: 120000,
		use : function(player) {
			player.armor.add("weapon", this, player.inventory);
			return({used: false})
		}, 
		recipe: [
			{item: Bar.iron, quantity: 20}, 
			{item: Wood.maple, quantity: 700}
		]
	}),

	axe: new ItemTemplate({
		name : "Iron Axe", 
		price : 500, 
		bonus : 10,
		speed : 140,
		img: "ironAxe",
		category: "tools",
		craftTime: 60000,
		use : function(player) {
			player.armor.add("axe", this, player.inventory);
			return({used: false})
		}, 
		recipe: [
			{item: Bar.iron, quantity: 2},
			{item: Wood.maple, quantity: 20}
		]
	}),

	pickaxe : new ItemTemplate({
		name : "Iron Pic", 
		price : 500, 
		bonus : 10,
		speed : 140,
		img: "ironPickaxe",
		category: "tools",
		craftTime: 60000,
		use : function(player) {
			player.armor.add("pickaxe", this, player.inventory);
			return({used: false})
		}, 
		recipe: [
			{item: Bar.iron, quantity: 2},
			{item: Wood.maple, quantity: 20}
		]
	}),

}


let GoldWeapons = {
	
	mace: new ItemTemplate({
		name : "Gold Mace", 
		price : 300000, 
		bonus : 40,
		speed : 130,
		img: "goldMace",
		category: "weapon",
		craftTime: 180000,
		use : function(player) {
			player.armor.add("weapon", this, player.inventory);
			return({used: false})
		}, 
		recipe: [
			{item: Bar.gold, quantity: 10}, 
			{item: Wood.mahogony, quantity: 500}
		]
	}),

	sword: new ItemTemplate({
		name : "Gold Sword", 
		price : 350000, 
		bonus : 50,
		speed : 105,
		img: "goldSword",
		category: "weapon",
		craftTime: 180000,
		use : function(player) {
			player.armor.add("weapon", this, player.inventory);
			return({used: false})
		}, 
		recipe: [
			{item: Bar.gold, quantity: 20}, 
			{item: Wood.mahogony, quantity: 700}
		]
	}),

	axe: new ItemTemplate({
		name : "Gold Axe", 
		price : 20000, 
		bonus : 20,
		speed : 130,
		img: "goldAxe",
		category: "tools",
		craftTime: 90000,
		use : function(player) {
			player.armor.add("axe", this, player.inventory);
			return({used: false})
		}, 
		recipe: [
			{item: Bar.gold, quantity: 2},
			{item: Wood.mahogony, quantity: 20}
		]
	}),
	
	pickaxe: new ItemTemplate({
		name : "Gold Pic", 
		price : 20000, 
		bonus : 20,
		speed : 130,
		img: "goldPickaxe",
		category: "tools",
		craftTime: 90000,
		use : function(player) {
			player.armor.add("pickaxe", this, player.inventory);
			return({used: false})
		}, 
		recipe: [
			{item: Bar.gold, quantity: 2},
			{item: Wood.mahogony, quantity: 20}
		]
	}),
}


let PlatinumWeapons = {
	
	mace: new ItemTemplate({
		name : "Platinum Mace", 
		price : 800000, 
		bonus : 70,
		speed : 120,
		img: "platinumMace",
		category: "weapon",
		craftTime: 240000,
		use : function(player) {
			player.armor.add("weapon", this, player.inventory);
			return({used: false})
		}, 
		recipe: [
			{item: Bar.platinum, quantity: 20}, 
			{item: Wood.magic, quantity: 500}
		]
	}),

	sword: new ItemTemplate({
		name : "Platinum Sword", 
		price : 900000, 
		bonus : 85,
		speed : 95,
		img: "platinumSword",
		category: "weapon",
		craftTime: 240000,
		use : function(player) {
			player.armor.add("weapon", this, player.inventory);
			return({used: false})
		}, 
		recipe: [
			{item: Bar.platinum, quantity: 30}, 
			{item: Wood.magic, quantity: 700}
		]
	}),

	axe: new ItemTemplate({
		name : "Platinum Axe", 
		price : 50000, 
		bonus : 40,
		speed : 120,
		img: "platinumAxe",
		category: "tools",
		craftTime: 120000,
		use : function(player) {
			player.armor.add("axe", this, player.inventory);
			return({used: false})
		}, 
		recipe: [
			{item: Bar.platinum, quantity: 2}, 
			{item: Wood.magic, quantity: 20}
		]
	}),

	pickaxe: new ItemTemplate({
		name : "Platinum Pic", 
		price : 50000, 
		bonus : 40,
		speed : 120,
		img: "platinumPickaxe",
		category: "tools",
		craftTime: 120000,
		use : function(player) {
			player.armor.add("pickaxe", this, player.inventory);
			return({used: false})
		}, 
		recipe: [
			{item: Bar.platinum, quantity: 2}, 
			{item: Wood.magic, quantity: 20}
		]
	}),
}

let DiamondWeapons = {
	mace: new ItemTemplate({
		name : "Diamond Mace", 
		price : 2000000, 
		bonus : 115,
		speed : 110,
		img: "diamondMace",
		category: "weapon",
		craftTime: 300000,
		use : function(player) {
			player.armor.add("weapon", this, player.inventory);
			return({used: false})
		}, 
		recipe: [
			{item: Bar.diamond, quantity: 50}, 
			{item: Wood.super, quantity: 500}
		]
	}),

	sword: new ItemTemplate({
		name : "Diamond Sword", 
		price : 2500000, 
		bonus : 140,
		speed : 85,
		img: "diamondSword",
		category: "weapon",
		craftTime: 300000,
		use : function(player) {
			player.armor.add("weapon", this, player.inventory);
			return({used: false})
		}, 
		recipe: [
			{item: Bar.diamond, quantity: 75}, 
			{item: Wood.super, quantity: 700}
		]
	}),

	axe: new ItemTemplate({
		name : "Diamond Axe", 
		price : 100000, 
		bonus : 70,
		speed : 110,
		img : "diamondAxe",
		category: "tools",
		craftTime: 240000,
		use : function(player) {
			player.armor.add("axe", this, player.inventory);
			return({used: false})
		}, 
		recipe: [
			{item: Bar.diamond, quantity: 2}, 
			{item: Wood.super, quantity: 20}
		]
	}),

	pickaxe: new ItemTemplate({
		name : "Diamond Pic", 
		price : 100000, 
		bonus : 70,
		speed : 110,
		img: "diamondPickaxe",
		category: "tools",
		craftTime: 240000,
		use : function(player) {
			player.armor.add("pickaxe", this, player.inventory);
			return({used: false})
		}, 
		recipe: [
			{item: Bar.diamond, quantity: 2}, 
			{item: Wood.super, quantity: 20}
		]
	}),
}

let rangeWeapons = {
	
	oak: new ItemTemplate({
		name : "Oak Bow", 
		price : 10000, 
		bonus : 20,
		speed : 120,
		img: "oakBow",
		category: "range",
		craftTime : 10000,
		use : function(player) {
			player.armor.add("bow", this, player.inventory);
			return({used: false})
		}, 
		recipe: [{item: Wood.oak, quantity: 500}]
	}),

	maple: new ItemTemplate({
		name : "Maple Bow", 
		price : 100000, 
		bonus : 42,
		speed : 110,
		img: "mapleBow",
		category: "range",
		craftTime : 20000,

		use : function(player) {
			player.armor.add("bow", this, player.inventory);
			return({used: false})
		}, 
		recipe: [{item: Wood.maple, quantity: 500}]
	}),

	mahogony: new ItemTemplate({
		name : "Mahogony Bow", 
		price : 500000, 
		bonus : 65,
		speed : 100,
		img: "mahogonyBow",
		category: "range",
		craftTime : 30000,

		use : function(player) {
			player.armor.add("bow", this, player.inventory);
			return({used: false})
		}, 
		recipe: [{item: Wood.mahogony, quantity: 500}]
	}),

	magic: new ItemTemplate({
		name : "Magic Bow", 
		price : 1000000, 
		bonus : 88,
		speed : 90,
		img: "magicBow",
		category: "range",
		craftTime : 40000,
		use : function(player) {
			player.armor.add("bow", this, player.inventory);
			return({used: false})
		}, 
		recipe: [{item: Wood.magic, quantity: 500}]
	}),

	super: new ItemTemplate({
		name : "Super Bow", 
		price : 10000000, 
		bonus : 123,
		speed : 80,
		img: "superBow",
		category: "range",
		craftTime : 50000,

		use : function(player) {
			player.armor.add("bow", this, player.inventory);
			return({used: false})
		}, 
		recipe: [{item: Wood.super, quantity: 500}]
	}),
}

let arrows = {
	bronze: new ItemTemplate({
		name : "Bronze Arrow", 
		price : 200, 
		bonus : 22,
		img: "bronzeArrow",
		category: "range",
		craftTime: 5000,
		use : function(player) {
			player.armor.addArrows(this, player.inventory);
			return({used: false})
		}, 
		recipe: [
			{item: Bar.bronze, quantity: 1}, 
			{item: Wood.oak, quantity: 1}
		]
	}),

	iron: new ItemTemplate({
		name : "Iron Arrow", 
		price : 500, 
		bonus : 32,
		img: "ironArrow",
		category: "range",
		craftTime: 6000,
		use : function(player) {
			player.armor.addArrows(this, player.inventory);
			return({used: false})
		}, 
		recipe: [
			{item: Bar.iron, quantity: 1}, 
			{item: Wood.maple, quantity: 1}
		]
	}),

	gold: new ItemTemplate({
		name : "Gold Arrow", 
		price : 2000, 
		bonus : 44,
		img: "goldArrow",
		category: "range",
		craftTime: 7000,
		use : function(player) {
			player.armor.addArrows(this, player.inventory);
			return({used: false})
		}, 
		recipe: [
			{item: Bar.gold, quantity: 1}, 
			{item: Wood.mahogony, quantity: 1}
		]
	}),

	platinum: new ItemTemplate({
		name : "Platinum Arrow", 
		price : 5000, 
		bonus : 56,
		img: "platinumArrow",
		category: "range",
		craftTime: 8000,
		use : function(player) {
			player.armor.addArrows(this, player.inventory);
			return({used: false})
		}, 
		recipe: [
			{item: Bar.platinum, quantity: 1}, 
			{item: Wood.magic, quantity: 1}
		]
	}),

	diamond: new ItemTemplate({
		name : "Diamond Arrow", 
		price : 10000, 
		bonus : 76,
		img: "diamondArrow",
		category: "range",
		craftTime: 10000,
		use : function(player) {
			player.armor.addArrows(this, player.inventory);
			return({used: false})
		}, 
		recipe: [
			{item: Bar.diamond, quantity: 1}, 
			{item: Wood.super, quantity: 1}
		]
	}),
}

module.exports = {
	 BronzeWeapons,
	 IronWeapons,
	 GoldWeapons,
	 PlatinumWeapons,
	 DiamondWeapons,
	 rangeWeapons,
	 arrows
}

