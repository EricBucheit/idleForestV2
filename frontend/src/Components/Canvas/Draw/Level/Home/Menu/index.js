import {background, buttons} from '../../../../../../Images'
import itemImages from '../../../../../../Images/itemImages'

import Render from '../../../Render'
import Grid from '../../../Grid'

class Menu {

	constructor() {
		this.render = new Render();
		let img = {
				image : background.itemBorder,
				repeat : true,
			}
		this.craftGrid = new Grid({
	                      x: 70,
	                      y: 200,
	                      width : 12,
	                      height : 4,
	                      cellWidth : 20,
	                      cellHeight: 20,
	                      labelOffsetX : 5,
	                      labelOffsetY : 5,
	                      labelSize : 10,
	                      imgs : img,
	                    })
	}

	draw(canvas, player) {
		this.background(canvas, player)
		this.drawButton(canvas, player.menu.categoryButtons, buttons.aquaButton)
		this.drawButton(canvas, player.menu.subcategoryButtons, buttons.blueButton)
		this.drawItems(canvas, player)
		this.craftGrid.drawGrid(canvas.ctx);
		// this.drawQueue(canvas, player)
		this.craftGrid.drawItems(player.menu.craftQueue, canvas)

	}

	background(canvas, player) {
		this.render.img(background.bankBackGround, player.menu.background.pos.x, player.menu.background.pos.y, player.menu.background.size.x, player.menu.background.size.y, canvas.ctx)
	}

	drawQueue(canvas, player) {
		for (let item in player.menu.craftQueue) {
			let info = player.menu.craftQueue[item];
			console.log(info)
			this.render.img(itemImages[info.category][info.img], this.craftGrid.spaces[item].button.body.pos.x, this.craftGrid.spaces[item].button.body.pos.y, 15,15,canvas.ctx)
		}
	}

	drawItems(canvas, player) {
		this.render.text(
					player.info.menu,
					100,
					100,
					40, 
					canvas.ctx
				)

		for (let item in player.menu.items) {
			let category = player.menu.items[item].category;
			let img = player.menu.items[item].img;

			this.render.img(
								background.itemBorder, 
								player.menu.items[item].button.body.pos.x, 
								player.menu.items[item].button.body.pos.y, 
								player.menu.items[item].button.body.size.x, 
								player.menu.items[item].button.body.size.y, 
								canvas.ctx
							)
			this.render.img(
								buttons.closeButton, 
								player.menu.closeButton.body.pos.x, 
								player.menu.closeButton.body.pos.y, 
								player.menu.closeButton.body.size.x, 
								player.menu.closeButton.body.size.y, 
								canvas.ctx
							)

			if (!itemImages[category] || !itemImages[category][img]) {
				this.render.text(
									player.menu.items[item].name, 
									player.menu.items[item].button.body.pos.x + (player.menu.items[item].button.body.size.x / 3), 
									player.menu.items[item].button.body.pos.y + (player.menu.items[item].button.body.size.y / 2),
									8, 
									canvas.ctx
								)
			} else {
				this.render.img(
								itemImages[category][img], 
								player.menu.items[item].button.body.pos.x, 
								player.menu.items[item].button.body.pos.y, 
								player.menu.items[item].button.body.size.x, 
								player.menu.items[item].button.body.size.y, 
								canvas.ctx
							)
			}
		}
	}

	drawButton(canvas, buttonList, buttonImg) {
		
		for (let button in buttonList) {
			let img = buttonImg
			if (buttonList[button].selected) {

				img = buttons.greenButton;
			}

			this.render.img(
							img, 
							buttonList[button].body.pos.x, 
							buttonList[button].body.pos.y, 
							buttonList[button].body.size.x, 
							buttonList[button].body.size.y, 
							canvas.ctx
							)
			this.render.text(
							buttonList[button].name, 
							buttonList[button].body.pos.x + 12, 
							buttonList[button].body.pos.y + 26, 
							buttonList[button].fontSize,
							canvas.ctx,
						)
		}
	}

}

export default Menu