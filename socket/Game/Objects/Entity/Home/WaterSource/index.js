const {Timer, RigidBody} = require('../../../../Helpers')
const {waterSourceSettings} = require('../../../../../GlobalSettings')
class WaterSource {
	constructor(items, settings) {
		this.water = items.getSubcategory("Consumeable", "Water");
		this.level = settings.level || 0;
		this.prices = waterSourceSettings.prices;
		this.timer = new Timer(waterSourceSettings.timer);
		this.body = new RigidBody(waterSourceSettings.body);
		this.upgradeButton = {body: new RigidBody(waterSourceSettings.upgradeButtonBody)};
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