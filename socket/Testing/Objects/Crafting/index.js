const Crafting = require('../../../Game/Objects/Crafting')
const Inventory = require('../../../Game/Objects/Inventory') 
const Items = require('../../../Game/Objects/Items') 

class CraftTest {
	constructor() {
		this.items = new Items();

		this.inventory = new Inventory(this.items, {max:200});
		let bronzeBar = this.items.getItem("Resources", "Bars", "bronze");
		let oak = this.items.getItem("Resources", "Wood", "oak");

		this.inventory.add(bronzeBar, 1000);
		this.inventory.add(oak, 1000);

		this.inventory.logTakenSlots();
		this.crafting = new Crafting(this.items);
	}

	run() {
		let craftItem = this.items.getItem("Weapon", "Bronze", "sword");
		this.crafting.begin(this.inventory, craftItem);
		this.crafting.logQueue()
		let time = 50000
		for (var i = 0; i < time; i++) {
			this.crafting.checkTime()
		}
		console.log("FINISHED BEFORE")
		this.crafting.finished.logTakenSlots();
		this.crafting.collect(this.inventory, 0);
		console.log("INVENTORY")
		this.inventory.logTakenSlots();
		console.log("FINISHED AFTER")
		this.crafting.finished.logTakenSlots();

	}
}

let Test = new CraftTest();
Test.run();
