import {buttons} from '../../../../Images'
import Render from '../Render'
export default class BottomPanel {
	constructor() {
		this.Render = new Render();
	}	

	buttons(canvas,player) {
		if (player) {
			let keys = Object.keys(player.actionButtons)
			for (let key of keys) {
				let pos = player.actionButtons[key].body.pos;
				let size = player.actionButtons[key].body.size;
				if (player.actionButtons[key].state) {
					this.Render.img(buttons.redButton, pos.x, pos.y, size.x, size.y, canvas.ctx)
				} else {
					this.Render.img(buttons.greenButton, pos.x, pos.y, size.x, size.y, canvas.ctx)
				}
					this.Render.text(player.actionButtons[key].name, pos.x + 10, pos.y + 20, "10", canvas.ctx)
			}
		}
	}
	
}