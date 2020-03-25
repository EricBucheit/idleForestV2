import {background, buttons} from '../../../../../../Images'
import itemImages from "../../../../../../Images/itemImages"

import Grid from '../../../Grid'
import Render from '../../../Render'

export default class Bank {
	constructor() {
		this.render = new Render();
		this.grid = this.makeInventorySlots()
	}

	draw(canvas, player) {
		this.bankBackGround(canvas)
		this.grid.drawGrid(canvas.ctx);
		this.bankButtons(canvas, player)
		this.grid.drawItems(player.bank.items, canvas, player.bank.page);
		this.drawSwapItem(canvas, player)
		this.drawDoubleClickMenu(canvas, player)
		
	}

	bankBackGround(canvas) {
		this.render.img(background.bankBackGround, 80, 10, 270, 420, canvas.ctx)
	}

	bankButtons(canvas, player) {
		this.render.img(buttons.upArrow, 9.7 * 32, 32 * 11, 32, 32, canvas.ctx)
		this.render.img(buttons.downArrow, 9.7 * 32, 32 * 12, 32, 32, canvas.ctx)
		this.render.img(buttons.closeButton, 10 * 32, 32 * 1, 16, 16, canvas.ctx)
		this.render.img(buttons.bankScrollBar, 10 * 32, 50 * (player.bank.index + 1) + 5, 16, 128, canvas.ctx)
	}

	drawDoubleClickMenu(canvas, player) {
		if (player.dblClickMenu) {
			let dblClickMenu = player.dblClickMenu
			


			canvas.ctx.globalAlpha = 0.8;
			this.render.img(buttons.aquaButton, dblClickMenu.ten.pos.x, dblClickMenu.ten.pos.y, dblClickMenu.ten.size.x, dblClickMenu.ten.size.y, canvas.ctx)
			this.render.img(buttons.aquaButton, dblClickMenu.fifty.pos.x, dblClickMenu.fifty.pos.y, dblClickMenu.fifty.size.x, dblClickMenu.fifty.size.y, canvas.ctx)
			this.render.img(buttons.aquaButton, dblClickMenu.all.pos.x, dblClickMenu.all.pos.y, dblClickMenu.all.size.x, dblClickMenu.all.size.y, canvas.ctx)
			canvas.ctx.globalAlpha = 1.0;

			this.render.text('10', dblClickMenu.ten.pos.x + 20, dblClickMenu.ten.pos.y + 15, 10, canvas.ctx)
			this.render.text('50', dblClickMenu.fifty.pos.x + 20, dblClickMenu.fifty.pos.y + 15, 10, canvas.ctx)
			this.render.text('All', dblClickMenu.all.pos.x + 20, dblClickMenu.all.pos.y + 15, 10, canvas.ctx)

		}


	}


	drawSwapItem(canvas, player) {
		if (player.mousePos) {
			if (player.sortItem && player.sortItem.menu === "bank") {
				let category = player.bank.items[player.sortItem.index].category;
				let img = player.bank.items[player.sortItem.index].img;
				if (category && img) {
					this.render.img(
						itemImages[category][img], 
						player.mousePos.x - 16, 
						player.mousePos.y - 16,
						32, 
						32, 
						canvas.ctx
					)
				}
			}
		}
	}

	makeInventorySlots() {
			let img = {
				image : background.itemBorder,
				repeat : true,
			}

	  		let inventorySpaces = new Grid({
			                                  x: 90,
			                                  y: 20,
			                                  width : 5,
			                                  height : 10,
			                                  cellWidth : 40,
			                                  cellHeight: 40,
			                                  labelOffsetX : 5,
			                                  labelOffsetY : 5,
			                                  labelSize : 10,
			                                  imgs : img,
			                                })

	  		return inventorySpaces;

	}

}
