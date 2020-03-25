const Items = require('../../../Game/Objects/Items');
const Inventory = require('../../../Game/Objects/Inventory');

class InventoryTest {
	constructor() {
		this.items = new Items();
		this.inventory = new Inventory(this.items);
		this.bigInventory = new Inventory(this.items, 200);
	}

	run() {
		this.addToBiginventory();
		this.addToInventory();

		this.inventory.addInventory(this.bigInventory)
		this.log(this.inventory);
		this.inventory.swap(1,2);
		this.inventory.swap(3,0)
		this.log(this.inventory);
		this.log(this.bigInventory);
		console.log(this.inventory.gold);
		this.inventory.addGold(10000);
		console.log(this.inventory.gold);

	}

	log(inventory) {
		inventory.logTakenSlots();
	}

	addToInventory() {
		this.inventory.add(this.items.getItem("Consumeable", "Potion", "smallPotion"), 22)
		this.inventory.add(this.items.getItem("Consumeable", "Potion", "largePotion"), 12)
		this.inventory.add(this.items.getItem("Consumeable", "Potion", "giantPotion"), 1)
		this.inventory.add(this.items.getItem("Armor", "Bronze", "helm"), 22)
		this.inventory.add(this.items.getItem("Armor", "Bronze", "boots"), 5)
		this.inventory.add(this.items.getItem("Armor", "Bronze", "chest"), 2)
	}

	addToBiginventory() {
		//changed the method, don't use
		// this.items.loopAllItems(this.bigInventory);
	}
}

module.exports = new InventoryTest();