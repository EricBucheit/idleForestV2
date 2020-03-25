const Items = require('../../../../../Game/Objects/Items');
const Inventory = require('../../../../../Game/Objects/Inventory');

const Farm = require('../../../../../Game/Objects/Entity/Home/Farm');


class FarmTest {
	constructor() {
		this.items = new Items();
		this.testInventory = new Inventory(this.items);
		this.testInventory.addGold(1000000000);
		this.seeds = this.items.getSubcategory("Resources", "Seeds");
		this.waterItems = this.items.getSubcategory("Consumeable", "Water");
		this.weapons = this.items.getSubcategory("Weapon", "Bronze");
		this.farm = new Farm(this.items);
		this.farm.setPlotTimers(5,5);
		this.singlePlot = this.farm.plot(this.items);
	}

	run() {
		console.log("RUNNING FARMTESTS")
		// this.testSinglePlot();
		this.growAllPlots();
		this.decayAllPlots();

		this.growAllPlots();
		this.decayAllPlots();

		this.testLevels();
	}

	testWater() {
		console.log("---------------------")
		console.log("WATER TESTING / ADD")
		console.log(this.farm.addWater(this.waterItems.tiny).message);
		console.log("AFTER TINY WATER: ", this.farm.water)
		console.log(this.farm.addWater(this.waterItems.small).message);
		console.log("AFTER SMALL WATER: ", this.farm.water)
		console.log(this.farm.addWater(this.waterItems.medium).message);
		console.log("AFTER MEDIUM WATER: ", this.farm.water)
		console.log(this.farm.addWater(this.waterItems.large).message);
		console.log("AFTER LARGE WATER: ", this.farm.water)
		
		for (let i = 0; i < 1000000; i++) {
			this.farm.addWater(this.waterItems.god);
		}

		// test wrong items;
		console.log(this.farm.addWater(this.weapons.axe).message);

		console.log("FINAL AFTER GOD WATER: ", this.farm.water)
		console.log("---------------------")

	}



	testLevels() {
		console.log("---------------------")
		console.log("LEVEL TESTING / ADD")

		console.log(this.farm.plots.length);
		this.farm.levelUp(this.testInventory);
		this.farmIsLevel(1);
		console.log(this.testInventory.gold)
		console.log(this.farm.plots.length);
		this.farm.levelUp(this.testInventory);
		this.farmIsLevel(2);
		console.log(this.testInventory.gold)
		console.log(this.farm.plots.length);
		this.farm.levelUp(this.testInventory);
		this.farmIsLevel(3);
		console.log(this.testInventory.gold)
		console.log(this.farm.plots.length);
		this.farm.levelUp(this.testInventory);
		this.farmIsLevel(4);
		console.log(this.testInventory.gold)
		console.log(this.farm.plots.length);
		this.farm.levelUp(this.testInventory);
		this.farmIsLevel(5);
		console.log(this.testInventory.gold)
		console.log(this.farm.plots.length);
		console.log("---------------------")

	}

	farmIsLevel(level) {
		if(this.farm.level === level) {
			console.log("Pass Level = ", level);
		} else {
			console.log("FAIL Level Does not Equal ", level)
		}
	}

	growAllPlots() {
		this.testWater();
		this.addAllSeeds()
		this.currentPlotsHaveSeeds();
		for (var i = 0; i < 1200000; i++) {
			this.farm.grow();
		}
		this.harvestAllTest();
		this.testInventory.logTakenSlots();


	}

	decayAllPlots() {
		this.farm.water = 0;
		this.addAllSeeds();
		this.currentPlotsHaveSeeds();
		for (var i = 0; i < 500000; i++) {
			this.farm.grow();
		}
		this.decayAllTest();
		this.testInventory.logTakenSlots();

	}

	addAllSeeds() {
		this.addPlot(0, this.seeds.carrot);
		this.addPlot(1, this.seeds.potatoe);
		this.addPlot(2, this.seeds.corn);
		this.addPlot(3, this.seeds.cucumber);
		this.addPlot(4, this.seeds.tomatoe);
		this.addPlot(5, this.seeds.artichoke);
	}



	addPlot(index, seed) {
		this.farm.plant(index, seed)
	}

	harvestAllTest() {
		console.log("---------------------")
		console.log("HARVESTING ALL TEST")
		for (var i = 0; i <= 5; i++) {
			this.readyForHarvest(i);
			this.harvestPlot(i);
			this.plotIsFalse(i);
		}
		console.log("---------------------")
	}

	harvestPlot(index) {
		this.farm.harvest(index, this.testInventory);
	}

	plotIsFalse(index) {
		if (this.farm.plots[index].seed === false) {
			console.log(`PASS PLOT ${index} IS FALSE`);
		} else {
			console.log(`FAIL PLOT ${index} IS TRUE`)
		}
	}

	currentPlotsHaveSeeds() {
		console.log("---------------------")
		console.log("PLOTS HAVE SEEDS TEST ALL TEST")
		for (var i = 0; i <= 5; i++) {
			this.plotHasSeed(i);
		}
		console.log("---------------------")
	}

	plotHasSeed(index) {
		if (this.farm.plots[index].seed) {
			console.log(`PASS PLOT ${index} HAS SEED`);
		} else {
			console.log(`FAIL PLOT ${index} IS FALSE`)
		}
	}


	decayAllTest() {
		console.log("---------------------")
		console.log("Decay All TEST")
		for (var i = 0; i <= 5; i++) {
			this.seedIsDecayed(i);
			this.harvestPlot(i);
			this.plotIsFalse(i);
		}
		console.log("---------------------")

	}
	seedIsDecayed(index) {
		if(this.farm.plots[index].decaying === true) {
			console.log(`PASS SEED ${index} IS DECAYED`)
		} else {
			console.log(`FAIL PLOT ${index} IS NOT DECAYED`)
		}
	}

	readyForHarvest(index) {
		if (this.farm.plots[index].level === 3) {
			console.log(`PASS ${index} READY FOR HARVEST`)
		} else {
			console.log(`FAIL ${index} PLOT IS NOT READY FOR HARVEST`)
		}
	}



	testSinglePlot() {
		this.singlePlot.plant(this.seeds.corn);
		this.singlePlot.harvest(this.testInventory);
		this.singlePlot.plant(this.weapons.mace);
		this.testInventory.logTakenSlots();
	}
}

module.exports = new FarmTest();