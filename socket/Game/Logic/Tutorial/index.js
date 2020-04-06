const InventoryToggle = require("./inventoryToggle");
const {Timer} = require('../../Helpers')
class Tutorial {
	constructor(items, finished = false) {
		this.progress = 0;
		this.completed = {
			collectWater: false,
			buy: false,
			goToWild: false,
			fight: false,
			goHomeFromWild: false,
			bank: false,
			collectWaterToFarm: false,
			goToFarm: false,
			addWaterToFarm: false,
			plantSeed: false,
			harvestSeed: false,
			cook: false,
			waitForCraft: false,
			lastMessage : false,
			finished: finished,
		}
		this.waterItems = items.getSubcategory("Consumeable", "Water");
		this.foodItems = items.getSubcategory("Consumeable", "Plants");
		this.cookedFoodItems = items.getSubcategory("Consumeable", "Cooked");
		this.potionItems = items.getSubcategory("Consumeable", "Potion");

		this.seeds = items.getSubcategory("Resources", "Seeds");
		this.inventoryToggle = new InventoryToggle();
		this.message = "Welcome to idle Forest, \n I am Your guide, \n let me show you some things";
		this.timer = new Timer(3000);
		this.finishTimer = new Timer(5000);
		this.loadedPlayer = finished;
	}

	run = (player) => {	
		if (this.loadedPlayer) return (false)
		if (!this.timer.isDone()) return false

		if (!this.inventoryToggle.complete) {
			this.message = this.inventoryToggle.run(player);
		}

		else if (!this.completed.collectWater) {
			this.message = this.collectWater(player);
		}

		else if (!this.completed.buy) {
			this.message = this.buy(player);
		}
		else if (!this.completed.goToWild) {
			this.message = this.goToWild(player);
		}
		else if (!this.completed.fight) {
			this.message = this.fight(player);
		}
		else if (!this.completed.goHomeFromWild) {
			this.message = this.goHomeFromWild(player);
		}
		else if (!this.completed.bank) {
			this.message = this.bank(player);
		}
		else if (!this.completed.collectWaterToFarm) {
			this.message = this.collectWaterToFarm(player);
		}
		else if (!this.completed.goToFarm) {
			this.message = this.goToFarm(player);
		}
		else if (!this.completed.addWaterToFarm) {
			this.message = this.addWaterToFarm(player);
		}
		else if (!this.completed.plantSeed) {
			this.message = this.plantSeed(player);
		}
		else if (!this.completed.harvestSeed) {
			this.message = this.harvestSeed(player);
		}
		else if (!this.completed.cook) {
			this.message = this.cook(player);
		}
		else if (!this.completed.waitForCraft) {
			this.message = this.waitForCraft(player);
		}
		else if (!this.completed.lastMessage) {
			this.message = this.finished(player);
		} else if (this.finishTimer.isDone()) {
			this.completed.finished = true;
		}


	}

	collectWater = (player) => {
		let waterMatch = false;
		for (let index in this.waterItems) {
			let item = player.inventory.find(this.waterItems[index]);
			if (item.found && item.item.quantity >= 5) {
				this.completed.collectWater = true;
			}
		}
		return ("Click The WaterWell, We \n Are going to need at least \nfive tiny waters to start")
	}


	buy = (player) => {
		if (player.info.menu.current === "buy") {
			player.inventory.add(this.potionItems['tiny'], 5)
			this.completed.buy = true;
		}
		return ("Click on the guy with the \n diamond armor, he has \n goods for sale, ill spot you \n a few potions to start")
	

	}

	goToWild = (player) => {
		if (player.info.currLevel > 1) {
			this.completed.goToWild = true;
		}
		return ("Make sure home and farm on  \nthe bottom panel are \n unclicked,you will \n automatically go to the wild");
	}

	fight = (player) => {
		if (player.info.currLevel > 1) {
			this.completed.fight = true
		}
		return ("Make sure home and farm on the bottom \n panel are unclicked, you will \n automatically go to the wild");
	
	}

	goHomeFromWild = (player) => {
		if (player.info.currLevel <= 1) {
			this.completed.goHomeFromWild = true
		}
		return ("When you are done, Head back \n home by toggling the\n  home or farm buttons \n in the bottom panel");
	}

	bank = (player) => {
		if (player.info.menu.current === "bank") {
			this.completed.bank = true;
			return ("This is where you can \n store your items for safe keeping");
		}
		return ("Time to Check out your bank, \n click the chest in the \n upper left of the room")
	}

	collectWaterToFarm = (player) => {
		let waterMatch = false;
		for (let index in this.waterItems) {
			let item = player.inventory.find(this.waterItems[index]);
			if (item.found && item.item.quantity >= 10) {
				this.completed.collectWaterToFarm = true;
				return("Good You have Water to go farm")
			}
		}
		return ("Click The WaterWell again, \n We Are going to need at least \n ten tiny waters to start \n farming")
	}

	goToFarm = (player) => {
		if (player.info.currLevel === 0) {
			this.completed.goToFarm = true;
			return ("Welcome to the farm")
		}
		return ("Click the farm button on \n the bottom Panel, make \n sure home is unselected")
	}

	addWaterToFarm = (player) => {
		if (player.home.farm.water >= 50) {
			this.completed.addWaterToFarm = true;
			return("Good Job, your \n farm has enough water \n to grow a plant.")
		}
		return ("Click Water in your \n inventory to add \n it to the farm.")
	}
	
	plantSeed = (player) => {
		for (let index in this.seeds) {
			let item = player.inventory.find(this.seeds[index])
			if (item.found && item.item.quantity >= 50) {
				this.completed.plantSeed = true;
				return("Click on a seed in \n your inventory to plant the seed")
			}
		}
		player.inventory.add(this.seeds["carrot"], 1)
		return("looks like you don't have \n any seeds, I'll spot \n you some for now")
	}

	harvestSeed = (player) => {
		for (let index in this.foodItems) {
			let item = player.inventory.find(this.foodItems[index])			
			if (item.found && item.item.quantity >= 1) {
				this.completed.harvestSeed = true;
				return("This is how you farm")
			}
		}
		return ("Plant a seed and wait until your \n seed is fully grown, hover \n the mouse or click to harvest")
	}
	
	cook = (player) => {
		if (player.info.menu.current === "cook") {
			this.completed.cook = true;
			return ("Good Job, now navigate \n to the Consumeable Tab")
		}
		return ("Click on the furnace at home \n to cook some of the food\n you harvested")
	}

	waitForCraft = (player) => {
		for (let index in this.cookedFoodItems) {
			let item = player.inventory.find(this.cookedFoodItems[index])
			if (item.found && item.item.quantity >= 1) {
				this.completed.waitForCraft = true;
				return("Great, you cooked your first meal, \n you must be hungry by now")
			}
		}
		return ("In the Consumeable Tab, \n click the item you wish \n to cook and wait for it to be\n finished, once it is finished, \nclick to collect it.");
	}
	
	finished() {
		this.completed.lastMessage = true;
		this.finishTimer.reset();
		return ("Well, you made it, you are ready \n for your adventure young one. \n I will keep in touch");
	}
}

module.exports = Tutorial