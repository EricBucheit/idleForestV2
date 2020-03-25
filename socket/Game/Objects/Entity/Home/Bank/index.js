const {RigidBody} = require('../../../../Helpers');
const Inventory = require("../../../Inventory")
class Bank {
	constructor(items, settings) {
		this.inventory = new Inventory(items, settings);
		this.page = 0;
		this.index = 0;
		this.body = new RigidBody({
									x : 32,
									y : 32 * 4,
									width : 32,
									height : 32,
									velocityX : 0,
									velocityY : 0,
								})

		this.pageUpButton = {body: new RigidBody({
											x : 9.7 * 32, 
											y : 32 * 11,
											width : 32,
											height : 32,
											velocityX : 0,
											velocityY : 0,
										})}

		this.pageDownButton = {body: new RigidBody({
											x : 9.7 * 32, 
											y : 32 * 12,
											width : 32,
											height : 32,
											velocityX : 0,
											velocityY : 0,
										})}
		this.closeButton = {body: new RigidBody({
											x : 10 * 32, 
											y : 32 * 1,
											width : 32,
											height : 32,
											velocityX : 0,
											velocityY : 0,
										})}

		this.info = "Click For Bank";
	}

	nextPage() {
		if (this.index + 0.5 >= 3) {
			this.index = 3;
		} else {
			this.index+=0.5;
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