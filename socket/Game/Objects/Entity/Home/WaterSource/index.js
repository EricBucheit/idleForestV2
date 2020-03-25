const {Timer, RigidBody} = require('../../../../Helpers')

class WaterSource {
	constructor(items, settings) {
		this.water = items.getSubcategory("Consumeable", "Water");
		this.level = settings.level || 0;
		this.prices = [1000, 10000, 100000, 1000000, 5000000, 20000000];
		this.timer = new Timer(1000);
		this.body = new RigidBody({
			x: 240 - 13,
			y: 80 - 15,
			width: 90,
			height: 75,
		})

		this.upgradeButton = {body: new RigidBody({
				x: 247,
				y: 36,
				width: 50,
				height: 25
			})
		}
	}

	upgradePrice() {
		return (`$${this.prices[this.level].toString()}`)
	}

	collect(inventory) {
		if (this.timer.check()) {
			var waterTypes = Object.keys(this.water);
   			let item = this.water[waterTypes[this.level]].copy();
   			inventory.add(item);
   			return ({message: `Add Water Success`, code: 1})
		} else {
			return ({message: `Waiting for Timer`, code: 0})
		}
	}

	levelUp(inventory) {
		if (this.level < this.prices.length - 1 && inventory.gold >= this.prices[this.level]) {
			inventory.gold = inventory.gold - this.prices[this.level];
			this.level++;
			return ({message: `Upgrade to Level ${this.level} Success`, code: 1})
		} else {
			if(this.level === this.prices.length - 1) {
				return ({message: "MAX LEVEL", code: 2})
			} else if (inventory.gold < this.prices[this.level]) {
				return ({message: "Not Enough gold to Upgrade", code: 2});
			} else {
				return ({message: "Something Went Wrong", code: -1});
			}
		}
	}
}

module.exports = WaterSource;