import {icons} from '../../../../Images'
import Render from '../Render'

export default class BottomInventoryIcons {
	constructor() {
		this.Render = new Render()
	}

	buttons(canvas, buttons) {
		if (buttons) {
			buttons = buttons.inventoryButtons;
			this.Render.img(icons[buttons.stats.img], buttons.stats.body.pos.x, buttons.stats.body.pos.y, 32,32, canvas.ctx)
			this.Render.img(icons[buttons.inventory.img], buttons.inventory.body.pos.x, buttons.inventory.body.pos.y, 32,32, canvas.ctx)
			this.Render.img(icons[buttons.armor.img], buttons.armor.body.pos.x, buttons.armor.body.pos.y, 32,32, canvas.ctx)
			this.Render.img(icons[buttons.magic.img], buttons.magic.body.pos.x, buttons.magic.body.pos.y, 32,32, canvas.ctx)

		}
	}

}