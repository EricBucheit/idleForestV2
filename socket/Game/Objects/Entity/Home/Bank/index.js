const {RigidBody} = require('../../../../Helpers');
const Inventory = require("../../../Inventory");
const {bankSettings} = require('../../../../../GlobalSettings');
class Bank {
	constructor(items, settings) {
		this.inventory = new Inventory(items, settings);
		this.page = 0;
		this.index = 0;
		this.body = new RigidBody(bankSettings.positions.chestBody)
		this.pageUpButton = {body: new RigidBody(bankSettings.positions.pageUpButton)}
		this.pageDownButton = {body: new RigidBody(bankSettings.positions.pageDownButton)}
		this.closeButton = {body: new RigidBody(bankSettings.positions.closeButton)}

		this.info = "Click For Bank";
	}

	nextPage() {
		if (this.index + 0.5 >= 3) {
			this.index = 3;
		} else {
			this.index += 0.5;
		}
		this.page = this.index * 50;
	}

	prevPage() {
		if (this.index - 0.5 <= 0) {
			this.index = 0;
		} else {
			this.index-=0.5;
		}
		this.page = this.index * 50;
	}
}

module.exports = Bank