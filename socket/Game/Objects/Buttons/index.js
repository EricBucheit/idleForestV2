const {RigidBody} = require('../../Helpers')

class UIButtons {
	constructor() {
		this.inventoryButtons = this.bottomButtons();
	}

	bottomButtons() {
		let pos = {
			x: 330,
			y: 445,
		}

		return ({
			stats: this.makeButton("skills" ,"stats", pos.x += 30, 445),
			inventory: this.makeButton("inventory", "inventory", pos.x += 30, 445),
			armor: this.makeButton("armor" , "armor", pos.x += 30, 445),
			magic: this.makeButton("magic" , "magic", pos.x += 30, 445),
		})
	}


	makeButton(name, img, x, y) {
		return ({
			name: name,
			img: img,
			body: new RigidBody({x: x, y: y, width: 32, height: 32})
		})
	}


}

module.exports = UIButtons