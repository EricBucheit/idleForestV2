const {RigidBody} = require("../../Helpers")
const Inventory = require ("../Inventory");


class Level {
	constructor(items) {

		this.inventory = []
		this.newInventory = new Inventory(items, {stack: false, max:200});
		let mapSettings = {
			x : 0,
			y : 0,
			width : 15,
			height : 15,
			velocityX : 5,
			velocityY : 5,
		}

		let prevLevelSettings = {
			x : 32 * 5,
			y : -32,
			width : 32,
			height : 32,
			velocityX : 0,
			velocityY : 0,
		}


		let nextLevelSettings = {
			x : 32 * 5,
			y : 32 * 15,
			width : 32,
			height : 32,
			velocityX : 0,
			velocityY : 0,
		}

		let centerLevelSettings = {
			x : 32 * 5,
			y : 32 * 7,
			width : 32,
			height : 32,
			velocityX : 0,
			velocityY : 0,
		}

		let centerLeftSettings = {
			x : 32,
			y : 32 * 7,
			width : 32,
			height : 32,
			velocityX : 0,
			velocityY : 0,
		}

		this.body = new RigidBody(mapSettings);		
		this.prevLevel = {body: new RigidBody(prevLevelSettings)};
		this.nextLevel = {body: new RigidBody(nextLevelSettings)};
		this.centerLevel = {body:  new RigidBody(centerLevelSettings)};
		this.centerLeftLevel = {body:  new RigidBody(centerLeftSettings)};

	}

	addInventoryToLevel(items, currLevel) {
		if (!this.inventory[currLevel]) {
			this.inventory[currLevel] = new Inventory(items, {stack: false, max:200});
		}
	}
}

module.exports = Level