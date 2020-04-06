const {Timer} = require('../../Helpers')

class InventoryToggle {
	constructor() {
		this.complete = false
		this.inventoryHasBeenClicked = false;
		this.armorHasBeenClicked = false;
		this.statsHasBeenClicked = false;
		this.timer = new Timer(5000);
	}

	run(player) {
		if (this.complete) return true;
		if (!this.armorHasBeenClicked) return this.clickArmorMessage(player);
		if (!this.statsHasBeenClicked) return this.clickStatsMessage(player);
		if (!this.magicHasBeenClicked) return this.clickMagicMessage(player);
		if (!this.inventoryHasBeenClicked) return this.clickInventoryMessage(player);

		if (this.timer.isDone()) {
			this.complete = true;
		}
		return ("Now that you know about \n yourself, lets check out\n the world around you")


	}

	clickInventoryMessage(player) {
		if (player.info.inventoryPage === "inventory") {
			this.inventoryHasBeenClicked = true;
		} else {
			return("lastly, Click The bag \n Icon on the bottom of your \nright sidebar to see items")
		}
	}

	clickArmorMessage(player) {
		if (player.info.inventoryPage !== "armor") {
			return("Click The Human Icon on \n the bottom of your right \nsidebar to see your armor")
		} else {
			this.armorHasBeenClicked = true;
		}
	}

	clickStatsMessage(player) {
		if (player.info.inventoryPage !== "skills") {
			return("Now click The Stats \n Icon on the bottom of your \nright sidebar for levels")
		} else {
			this.statsHasBeenClicked = true;
		}		
	}

	clickMagicMessage(player) {
		if (player.info.inventoryPage !== "magic") {
			return("Click The book Icon on the \n bottom of your right sidebar\n to see spells")
		} else {
			this.timer.reset();
			this.magicHasBeenClicked = true;
		}		
	}

}

module.exports = InventoryToggle