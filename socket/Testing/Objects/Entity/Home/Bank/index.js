const Bank = require('../../../../../Game/Objects/Entity/Home/Bank');
const Items = require('../../../../../Game/Objects/Items');
const Inventory = require('../../../../../Game/Objects/Inventory');

class BankTest {
	constructor() {
		let items = new Items()
		let settings = {
			items : items,
			body : {
				x : 100,
				y: 100,
				width : 32,
				height: 32,
				velocityX : 5,
				velocityY : 5
			}
		}
		this.bank = new Bank(settings);
		this.inventory = new Inventory(items);
		this.items = items;
	}

	run() {
		this.hasMaxSlots();
		this.isInitiallyEmpty();
		this.bank.inventory.logTakenSlots();
		// this.slotsAreTaken();
		this.itemsTransferFromInventory()
		this.bank.inventory.logTakenSlots();


	}

	hasMaxSlots() {
		if( this.bank.inventory.max === 200) {
			console.log("PASS: Bank Has 200 Slots");
		}
	}

	isInitiallyEmpty() {
		if (this.bank.inventory.countTakenSlots() === 0) {
			console.log("PASS: Bank has zero Items")
		} else {
			console.log("FAIL: BANK Has ITEMS ON INITIALIZE");
		}
	}

	addItemsToBank() {
		this.bank.inventory.add(this.items.randomItem(100, "Weapon", "Bronze"));
		this.bank.inventory.add(this.items.randomItem(100, "Weapon", "Iron"));
		this.bank.inventory.add(this.items.randomItem(100, "Weapon", "Diamond"));
		this.bank.inventory.add(this.items.randomItem(100, "Weapon", "Platinum"));
	}

	addManyitems(inventory) {
		for (var i = 0; i < 150; i++) {
			inventory.add(this.items.randomItem(100, "Weapon", "Bronze"));
		}
	}

	slotsAreTaken() {
		if (this.bank.inventory.countTakenSlots() > 0) {
			console.log("PASS: Bank has Items")
		} else {
			console.log("FAIL: Bank Didn't Get any Items")
		}
	}

	itemsTransferFromInventory() {
		this.addManyitems(this.inventory);
		this.inventory.logTakenSlots();

		this.bank.inventory.addInventory(this.inventory);
		this.slotsAreTaken();

	}

}

module.exports = new BankTest()