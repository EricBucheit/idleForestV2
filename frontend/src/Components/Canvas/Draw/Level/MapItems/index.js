import Render from '../../Render'
import {itemImages} from '../../../../../Images'

export default class MapItems {

	constructor() {
		this.render = new Render()
	}

	draw(canvas, inventory) {
		if (!inventory) {
			return false
		}

		for (let item in inventory) {
			let category = inventory[item].category;
			let img = inventory[item].img;
			if (!itemImages[category] || !itemImages[category][img]) {
				//if it doesn't exist then it show name, may implement later
				// this.render.text(inventory[item].name, inventory[item].x, inventory[item].y, 7, canvas.ctx)
			} else {
				this.render.img(itemImages[category][img], inventory[item].x, inventory[item].y, 16, 16, canvas.ctx)
			}
		}
	}

}
