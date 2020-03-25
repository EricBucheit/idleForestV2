const WaterSource = require('../../../../../Game/Objects/Entity/Home/WaterSource');
const Items = require('../../../../../Game/Objects/Items');
const Inventory = require('../../../../../Game/Objects/Inventory');
const {Log} = require('../../../../../Game/Helpers');

class WaterSourceTest {
	constructor() {
		let items = new Items();
		this.waterSource = new WaterSource(items);
		this.waterSource.timer.setExpiration(50);

		this.inventoryTest = new Inventory(items);
		this.inventoryTest.addGold(10000000);

	}

	run () {
		for (var i = 0; i < 5; i++) {
			this.levelAndAddWater()
		}
		this.levelToMax();
		this.inventoryTest.logTakenSlots();

	}

	logItems() {
		console.log(this.waterSource.water);
	}

	levelToMax() {
		this.levelUp();
		this.levelUp();
		this.levelUp();
		this.levelUp();
	}

	levelAndAddWater() {
		this.levelUp();
		this.addWaterToInventory();
	}

	levelUp() {
		Log.message(this.waterSource.levelUp(this.inventoryTest))
	}

	addWaterToInventory() {
		for (let x = 0; x < 5000000; x++) {
			let collected = this.waterSource.collect(this.inventoryTest);
			Log.message(collected);
		}
	}

}

module.exports = new WaterSourceTest();