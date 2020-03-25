import {background} from '../../../../../Images'
import itemImages from '../../../../../Images/itemImages'

import Grid from '../../Grid'
import Render from '../../Render'

export default class Magic {
	constructor() {
		this.render = new Render();
		this.grid = this.makeMagicSlots()
	}

	draw(canvas, player) {
		this.magicBackground(canvas)
		this.grid.drawGrid(canvas.ctx);

		for (let item of player.magicUI) {
			this.render.img(
					itemImages[item.category][item.img], 
					item.body.pos.x + 7, 
					item.body.pos.y + 9,
					32, 32, 
					canvas.ctx
				)
		}
	}

	magicBackground(canvas) {
		this.render.img(background.stats, 360, 0, 120, 480, canvas.ctx)
	}

	makeMagicSlots() {
			let img = {
				image : background.itemBorder,
				repeat : true,
			}

	  		let magicSpaces = new Grid({
			                                  x: 365,
			                                  y: 150,
			                                  width : 3,
			                                  height : 7,
			                                  cellWidth : 40,
			                                  cellHeight: 40,
			                                  labelOffsetX : 5,
			                                  labelOffsetY : 5,
			                                  labelSize : 10,
			                                  imgs : img,
			                                })

	  		return magicSpaces;

	}

}
