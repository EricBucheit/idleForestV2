import {icons} from '../../../../Images'
import Render from '../Render'
import {RigidBody} from '../../Helpers'

export default class BottomInventoryIcons {
	constructor() {
		this.Render = new Render()
		this.buttons = this.bottomButtons();
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


	draw(canvas) {
			let buttons = this.buttons;
			this.Render.img(icons[buttons.stats.img], buttons.stats.body.pos.x, buttons.stats.body.pos.y, 32,32, canvas.ctx)
			this.Render.img(icons[buttons.inventory.img], buttons.inventory.body.pos.x, buttons.inventory.body.pos.y, 32,32, canvas.ctx)
			this.Render.img(icons[buttons.armor.img], buttons.armor.body.pos.x, buttons.armor.body.pos.y, 32,32, canvas.ctx)
			this.Render.img(icons[buttons.magic.img], buttons.magic.body.pos.x, buttons.magic.body.pos.y, 32,32, canvas.ctx)
	}

}