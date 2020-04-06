const {RigidBody} = require('../../Helpers')
const {bottomPanelSettings} = require('../../../GlobalSettings')
class UIButtons {
	constructor() {
		this.inventoryButtons = this.bottomButtons();
	}

	bottomButtons() {
		let pos = {
			x: bottomPanelSettings.x,
			y: bottomPanelSettings.y,
		}

		return ({
			stats: this.makeButton("skills" , "stats", pos.x += bottomPanelSettings.xOffset, pos.y),
			inventory: this.makeButton("inventory", "inventory", pos.x += bottomPanelSettings.xOffset, pos.y),
			armor: this.makeButton("armor" , "armor", pos.x += bottomPanelSettings.xOffset, pos.y),
			magic: this.makeButton("magic" , "magic", pos.x += bottomPanelSettings.xOffset, pos.y),
		})
	}


	makeButton(name, img, x, y) {
		return ({
			name: name,
			img: img,
			body: new RigidBody({x: x, y: y, width: bottomPanelSettings.width, height: bottomPanelSettings.height})
		})
	}


}

module.exports = UIButtons