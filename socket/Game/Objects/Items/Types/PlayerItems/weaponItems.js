const ItemTemplate = require('../../Template')

const {Bar, Wood} = require("../ResourceItems")
const {weaponSettings} = require('../../../../../GlobalSettings/itemSettings');

let BronzeWeapons = {

	mace: new ItemTemplate({
		name : "Mace (B)", 
		price : weaponSettings.bronze.mace.price, 
		bonus : weaponSettings.bronze.mace.bonus,
		speed : weaponSettings.bronze.mace.speed,
		img: "bronzeMace",
		category: "weapon",
		craftTime: weaponSettings.bronze.mace.craftTime,
		use : function(player) {
			player.armor.add("weapon", this, player.inventory);
			return({used: false})
		}, 
		recipe: [
			{item: Bar.bronze, quantity: weaponSettings.bronze.mace.barCraftQuantity}, 
			{item: Wood.oak, quantity: weaponSettings.bronze.mace.woodCraftQuantity}
		]
	}),

	sword: new ItemTemplate({
		name : "Sword (B)", 
		price : weaponSettings.bronze.sword.price, 
		bonus : weaponSettings.bronze.sword.bonus,
		speed : weaponSettings.bronze.sword.speed,
		img: "bronzeSword",
		category: "weapon",
		craftTime: weaponSettings.bronze.sword.craftTime,
		use : function(player) {
			player.armor.add("weapon", this, player.inventory);
			return({used: false})
		}, 
		recipe: [
			{item: Bar.bronze, quantity: weaponSettings.bronze.sword.barCraftQuantity}, 
			{item: Wood.oak, quantity: weaponSettings.bronze.sword.woodCraftQuantity}
		]
	}),

	axe: new ItemTemplate({
		name : "Axe (B)", 
		price : weaponSettings.bronze.axe.price, 
		bonus : weaponSettings.bronze.axe.bonus,
		speed : weaponSettings.bronze.axe.speed,
		img: "bronzeAxe",
		category: "tools",
		craftTime: weaponSettings.bronze.axe.craftTime,
		use : function(player) {
			player.armor.add("axe", this, player.inventory);
			return({used: false})
		}, 
		recipe: [
			{item: Bar.bronze, quantity: weaponSettings.bronze.axe.barCraftQuantity}, 
			{item: Wood.oak, quantity: weaponSettings.bronze.axe.woodCraftQuantity}
		]
	}),

	pickaxe: new ItemTemplate({
		name : "pickaxe (B)", 
		price : weaponSettings.bronze.pickaxe.price, 
		bonus : weaponSettings.bronze.pickaxe.bonus,
		speed : weaponSettings.bronze.pickaxe.speed,
		img: "bronzePickaxe",
		category: "tools",
		craftTime: weaponSettings.bronze.pickaxe.craftTime,
		use : function(player) {
			player.armor.add("pickaxe", this, player.inventory);
			return({used: false})
		}, 
		recipe: [
			{item: Bar.bronze, quantity: weaponSettings.bronze.pickaxe.barCraftQuantity}, 
			{item: Wood.oak, quantity: weaponSettings.bronze.pickaxe.woodCraftQuantity}
		]
	}),
}

let IronWeapons = {
	mace: new ItemTemplate({
		name : "Iron Mace", 
		price : weaponSettings.iron.mace.price, 
		bonus : weaponSettings.iron.mace.bonus,
		speed : weaponSettings.iron.mace.speed,
		img: "ironMace",
		category: "weapon",
		craftTime: weaponSettings.iron.mace.craftTime,
		use : function(player) {
			player.armor.add("weapon", this, player.inventory);
			return({used: false})
		}, 
		recipe: [
			{item: Bar.iron, quantity: weaponSettings.iron.mace.barCraftQuantity}, 
			{item: Wood.maple, quantity: weaponSettings.iron.mace.woodCraftQuantity}
		]
	}),

	sword: new ItemTemplate({
		name : "Iron Sword", 
		price : weaponSettings.iron.sword.price, 
		bonus : weaponSettings.iron.sword.bonus,
		speed : weaponSettings.iron.sword.speed,
		img: "ironSword",
		category: "weapon",
		craftTime: weaponSettings.iron.sword.craftTime,
		use : function(player) {
			player.armor.add("weapon", this, player.inventory);
			return({used: false})
		}, 
		recipe: [
			{item: Bar.iron, quantity: weaponSettings.iron.sword.barCraftQuantity}, 
			{item: Wood.maple, quantity: weaponSettings.iron.sword.woodCraftQuantity}
		]
	}),

	axe: new ItemTemplate({
		name : "Iron Axe", 
		price : weaponSettings.iron.axe.price, 
		bonus : weaponSettings.iron.axe.bonus,
		speed : weaponSettings.iron.axe.speed,
		img: "ironAxe",
		category: "tools",
		craftTime: weaponSettings.iron.axe.craftTime,
		use : function(player) {
			player.armor.add("axe", this, player.inventory);
			return({used: false})
		}, 
		recipe: [
			{item: Bar.iron, quantity: weaponSettings.iron.axe.barCraftQuantity},
			{item: Wood.maple, quantity: weaponSettings.iron.axe.woodCraftQuantity}
		]
	}),

	pickaxe : new ItemTemplate({
		name : "Iron Pic", 
		price : weaponSettings.iron.pickaxe.price, 
		bonus : weaponSettings.iron.pickaxe.bonus,
		speed : weaponSettings.iron.pickaxe.speed,
		img: "ironPickaxe",
		category: "tools",
		craftTime: weaponSettings.iron.pickaxe.craftTime,
		use : function(player) {
			player.armor.add("pickaxe", this, player.inventory);
			return({used: false})
		}, 
		recipe: [
			{item: Bar.iron, quantity: weaponSettings.iron.pickaxe.barCraftQuantity},
			{item: Wood.maple, quantity: weaponSettings.iron.pickaxe.woodCraftQuantity}
		]
	}),

}


let GoldWeapons = {
	
	mace: new ItemTemplate({
		name : "Gold Mace", 
		price : weaponSettings.gold.mace.price, 
		bonus : weaponSettings.gold.mace.bonus,
		speed : weaponSettings.gold.mace.speed,
		img: "goldMace",
		category: "weapon",
		craftTime: weaponSettings.gold.mace.craftTime,
		use : function(player) {
			player.armor.add("weapon", this, player.inventory);
			return({used: false})
		}, 
		recipe: [
			{item: Bar.gold, quantity: weaponSettings.gold.mace.barCraftQuantity}, 
			{item: Wood.mahogony, quantity: weaponSettings.gold.mace.woodCraftQuantity}
		]
	}),

	sword: new ItemTemplate({
		name : "Gold Sword", 
		price : weaponSettings.gold.sword.price, 
		bonus : weaponSettings.gold.sword.bonus,
		speed : weaponSettings.gold.sword.speed,
		img: "goldSword",
		category: "weapon",
		craftTime: weaponSettings.gold.sword.craftTime,
		use : function(player) {
			player.armor.add("weapon", this, player.inventory);
			return({used: false})
		}, 
		recipe: [
			{item: Bar.gold, quantity: weaponSettings.gold.sword.barCraftQuantity}, 
			{item: Wood.mahogony, quantity: weaponSettings.gold.sword.woodCraftQuantity}
		]
	}),

	axe: new ItemTemplate({
		name : "Gold Axe", 
		price : weaponSettings.gold.axe.price,
		bonus : weaponSettings.gold.axe.bonus,
		speed : weaponSettings.gold.axe.speed,
		img: "goldAxe",
		category: "tools",
		craftTime: weaponSettings.gold.axe.craftTime,
		use : function(player) {
			player.armor.add("axe", this, player.inventory);
			return({used: false})
		}, 
		recipe: [
			{item: Bar.gold, quantity: weaponSettings.gold.axe.barCraftQuantity},
			{item: Wood.mahogony, quantity: weaponSettings.gold.axe.woodCraftQuantity}
		]
	}),
	
	pickaxe: new ItemTemplate({
		name : "Gold Pic", 
		price : weaponSettings.gold.pickaxe.price,
		bonus : weaponSettings.gold.pickaxe.bonus,
		speed : weaponSettings.gold.pickaxe.speed,
		img: "goldPickaxe",
		category: "tools",
		craftTime: weaponSettings.gold.pickaxe.craftTime,
		use : function(player) {
			player.armor.add("pickaxe", this, player.inventory);
			return({used: false})
		}, 
		recipe: [
			{item: Bar.gold, quantity: weaponSettings.gold.pickaxe.barCraftQuantity},
			{item: Wood.mahogony, quantity: weaponSettings.gold.pickaxe.woodCraftQuantity}
		]
	}),
}


let PlatinumWeapons = {
	
	mace: new ItemTemplate({
		name : "Platinum Mace", 
		price : weaponSettings.platinum.mace.price,
		bonus : weaponSettings.platinum.mace.bonus,
		speed : weaponSettings.platinum.mace.speed,
		img: "platinumMace",
		category: "weapon",
		craftTime: weaponSettings.platinum.mace.craftTime,
		use : function(player) {
			player.armor.add("weapon", this, player.inventory);
			return({used: false})
		}, 
		recipe: [
			{item: Bar.platinum, quantity: weaponSettings.platinum.mace.barCraftQuantity}, 
			{item: Wood.magic, quantity: weaponSettings.platinum.mace.woodCraftQuantity}
		]
	}),

	sword: new ItemTemplate({
		name : "Platinum Sword", 
		price : weaponSettings.platinum.sword.price, 
		bonus : weaponSettings.platinum.sword.bonus,
		speed : weaponSettings.platinum.sword.speed,
		img: "platinumSword",
		category: "weapon",
		craftTime: weaponSettings.platinum.sword.craftTime,
		use : function(player) {
			player.armor.add("weapon", this, player.inventory);
			return({used: false})
		}, 
		recipe: [
			{item: Bar.platinum, quantity: weaponSettings.platinum.sword.barCraftQuantity}, 
			{item: Wood.magic, quantity: weaponSettings.platinum.sword.woodCraftQuantity}
		]
	}),

	axe: new ItemTemplate({
		name : "Platinum Axe", 
		price : weaponSettings.platinum.axe.price, 
		bonus : weaponSettings.platinum.axe.bonus,
		speed : weaponSettings.platinum.axe.speed,
		img: "platinumAxe",
		category: "tools",
		craftTime: weaponSettings.platinum.axe.craftTime,
		use : function(player) {
			player.armor.add("axe", this, player.inventory);
			return({used: false})
		}, 
		recipe: [
			{item: Bar.platinum, quantity: weaponSettings.platinum.axe.barCraftQuantity}, 
			{item: Wood.magic, quantity: weaponSettings.platinum.axe.woodCraftQuantity}
		]
	}),

	pickaxe: new ItemTemplate({
		name : "Platinum Pic", 
		price : weaponSettings.platinum.pickaxe.price, 
		bonus : weaponSettings.platinum.pickaxe.bonus,
		speed : weaponSettings.platinum.pickaxe.speed,
		img: "platinumPickaxe",
		category: "tools",
		craftTime: weaponSettings.platinum.pickaxe.craftTime,
		use : function(player) {
			player.armor.add("pickaxe", this, player.inventory);
			return({used: false})
		}, 
		recipe: [
			{item: Bar.platinum, quantity: weaponSettings.platinum.pickaxe.barCraftQuantity}, 
			{item: Wood.magic, quantity: weaponSettings.platinum.pickaxe.woodCraftQuantity}
		]
	}),
}

let DiamondWeapons = {
	mace: new ItemTemplate({
		name : "Diamond Mace", 
		price : weaponSettings.diamond.mace.price,
		bonus : weaponSettings.diamond.mace.bonus,
		speed : weaponSettings.diamond.mace.speed,
		img: "diamondMace",
		category: "weapon",
		craftTime: weaponSettings.diamond.mace.craftTime,
		use : function(player) {
			player.armor.add("weapon", this, player.inventory);
			return({used: false})
		}, 
		recipe: [
			{item: Bar.diamond, quantity: weaponSettings.diamond.mace.barCraftQuantity}, 
			{item: Wood.super, quantity: weaponSettings.diamond.mace.woodCraftQuantity}
		]
	}),

	sword: new ItemTemplate({
		name : "Diamond Sword", 
		price : weaponSettings.diamond.sword.price,
		bonus : weaponSettings.diamond.sword.bonus,
		speed : weaponSettings.diamond.sword.speed,
		img: "diamondSword",
		category: "weapon",
		craftTime: weaponSettings.diamond.sword.craftTime,
		use : function(player) {
			player.armor.add("weapon", this, player.inventory);
			return({used: false})
		}, 
		recipe: [
			{item: Bar.diamond, quantity: weaponSettings.diamond.sword.barCraftQuantity}, 
			{item: Wood.super, quantity: weaponSettings.diamond.sword.woodCraftQuantity}
		]
	}),

	axe: new ItemTemplate({
		name : "Diamond Axe", 
		price : weaponSettings.diamond.axe.price,
		bonus : weaponSettings.diamond.axe.bonus,
		speed : weaponSettings.diamond.axe.speed,
		img : "diamondAxe",
		category: "tools",
		craftTime: weaponSettings.diamond.axe.craftTime,
		use : function(player) {
			player.armor.add("axe", this, player.inventory);
			return({used: false})
		}, 
		recipe: [
			{item: Bar.diamond, quantity: weaponSettings.diamond.axe.barCraftQuantity}, 
			{item: Wood.super, quantity: weaponSettings.diamond.axe.woodCraftQuantity}
		]
	}),

	pickaxe: new ItemTemplate({
		name : "Diamond Pic", 
		price : weaponSettings.diamond.pickaxe.price, 
		bonus : weaponSettings.diamond.pickaxe.bonus,
		speed : weaponSettings.diamond.pickaxe.speed,
		img: "diamondPickaxe",
		category: "tools",
		craftTime: weaponSettings.diamond.pickaxe.craftTime,
		use : function(player) {
			player.armor.add("pickaxe", this, player.inventory);
			return({used: false})
		}, 
		recipe: [
			{item: Bar.diamond, quantity: weaponSettings.diamond.pickaxe.barCraftQuantity}, 
			{item: Wood.super, quantity: weaponSettings.diamond.pickaxe.woodCraftQuantity}
		]
	}),
}

let rangeWeapons = {
	
	oak: new ItemTemplate({
		name : "Oak Bow", 
		price : weaponSettings.bow.oak.price,
		bonus : weaponSettings.bow.oak.bonus,
		speed : weaponSettings.bow.oak.speed,
		img: "oakBow",
		category: "range",
		craftTime : weaponSettings.bow.oak.craftTime,
		use : function(player) {
			player.armor.add("bow", this, player.inventory);
			return({used: false})
		}, 
		recipe: [{item: Wood.oak, quantity: weaponSettings.bow.oak.woodCraftQuantity}]
	}),

	maple: new ItemTemplate({
		name : "Maple Bow", 
		price : weaponSettings.bow.maple.price,
		bonus : weaponSettings.bow.maple.bonus,
		speed : weaponSettings.bow.maple.speed,
		img: "mapleBow",
		category: "range",
		craftTime : weaponSettings.bow.maple.craftTime,

		use : function(player) {
			player.armor.add("bow", this, player.inventory);
			return({used: false})
		}, 
		recipe: [{item: Wood.maple, quantity: weaponSettings.bow.maple.woodCraftQuantity}]
	}),

	mahogony: new ItemTemplate({
		name : "Mahogony Bow", 
		price : weaponSettings.bow.mahogony.price,
		bonus : weaponSettings.bow.mahogony.bonus,
		speed : weaponSettings.bow.mahogony.speed,
		img: "mahogonyBow",
		category: "range",
		craftTime : weaponSettings.bow.mahogony.craftTime,

		use : function(player) {
			player.armor.add("bow", this, player.inventory);
			return({used: false})
		}, 
		recipe: [{item: Wood.mahogony, quantity: weaponSettings.bow.mahogony.woodCraftQuantity}]
	}),

	magic: new ItemTemplate({
		name : "Magic Bow", 
		price : weaponSettings.bow.magic.price,
		bonus : weaponSettings.bow.magic.bonus,
		speed : weaponSettings.bow.magic.speed,
		img: "magicBow",
		category: "range",
		craftTime : weaponSettings.bow.magic.craftTime,
		use : function(player) {
			player.armor.add("bow", this, player.inventory);
			return({used: false})
		}, 
		recipe: [{item: Wood.magic, quantity: weaponSettings.bow.magic.woodCraftQuantity}]
	}),

	super: new ItemTemplate({
		name : "Super Bow", 
		price : weaponSettings.bow.super.price,
		bonus : weaponSettings.bow.super.bonus,
		speed : weaponSettings.bow.super.speed,
		img: "superBow",
		category: "range",
		craftTime : weaponSettings.bow.super.craftTime,

		use : function(player) {
			player.armor.add("bow", this, player.inventory);
			return({used: false})
		}, 
		recipe: [{item: Wood.super, quantity: weaponSettings.bow.super.woodCraftQuantity}]
	}),
}

let arrows = {
	bronze: new ItemTemplate({
		name : "Bronze Arrow", 
		price : weaponSettings.arrows.bronze.price,
		bonus : weaponSettings.arrows.bronze.bonus,
		img: "bronzeArrow",
		category: "range",
		craftTime: weaponSettings.arrows.bronze.craftTime,
		use : function(player) {
			player.armor.addArrows(this, player.inventory);
			return({used: false})
		}, 
		recipe: [
			{item: Bar.bronze, quantity: weaponSettings.arrows.bronze.barCraftQuantity}, 
			{item: Wood.oak, quantity: weaponSettings.arrows.bronze.woodCraftQuantity}
		]
	}),

	iron: new ItemTemplate({
		name : "Iron Arrow", 
		price : weaponSettings.arrows.iron.price,
		bonus : weaponSettings.arrows.iron.bonus,
		img: "ironArrow",
		category: "range",
		craftTime: weaponSettings.arrows.iron.craftTime,
		use : function(player) {
			player.armor.addArrows(this, player.inventory);
			return({used: false})
		}, 
		recipe: [
			{item: Bar.iron, quantity: weaponSettings.arrows.iron.barCraftQuantity}, 
			{item: Wood.maple, quantity: weaponSettings.arrows.iron.woodCraftQuantity}
		]
	}),

	gold: new ItemTemplate({
		name : "Gold Arrow", 
		price : weaponSettings.arrows.gold.price, 
		bonus : weaponSettings.arrows.gold.bonus,
		img: "goldArrow",
		category: "range",
		craftTime: weaponSettings.arrows.gold.craftTime,
		use : function(player) {
			player.armor.addArrows(this, player.inventory);
			return({used: false})
		}, 
		recipe: [
			{item: Bar.gold, quantity: weaponSettings.arrows.gold.barCraftQuantity}, 
			{item: Wood.mahogony, quantity: weaponSettings.arrows.gold.woodCraftQuantity}
		]
	}),

	platinum: new ItemTemplate({
		name : "Platinum Arrow", 
		price : weaponSettings.arrows.platinum.price,
		bonus : weaponSettings.arrows.platinum.bonus,
		img: "platinumArrow",
		category: "range",
		craftTime: weaponSettings.arrows.platinum.craftTime,
		use : function(player) {
			player.armor.addArrows(this, player.inventory);
			return({used: false})
		}, 
		recipe: [
			{item: Bar.platinum, quantity: weaponSettings.arrows.platinum.barCraftQuantity}, 
			{item: Wood.magic, quantity: weaponSettings.arrows.platinum.woodCraftQuantity}
		]
	}),

	diamond: new ItemTemplate({
		name : "Diamond Arrow", 
		price : weaponSettings.arrows.diamond.price,
		bonus : weaponSettings.arrows.diamond.bonus,
		img: "diamondArrow",
		category: "range",
		craftTime: weaponSettings.arrows.diamond.craftTime,
		use : function(player) {
			player.armor.addArrows(this, player.inventory);
			return({used: false})
		}, 
		recipe: [
			{item: Bar.diamond, quantity: weaponSettings.arrows.diamond.barCraftQuantity}, 
			{item: Wood.super, quantity: weaponSettings.arrows.diamond.woodCraftQuantity}
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

