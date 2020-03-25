import {background, buttons} from '../../../../../Images'
import Grid from '../../Grid'
import Render from '../../Render'
import itemImages from "../../../../../Images/itemImages"


export default class Inventory {
	constructor() {
		this.render = new Render();
		this.grid = this.makeInventorySlots()
	}

	draw(canvas, player) {
		this.inventoryBackground(canvas)
		this.grid.drawGrid(canvas.ctx);
		this.grid.drawItems(player.inventory, canvas);
		this.drawSwapItem(canvas, player)
		this.drawDoubleClickMenu(canvas, player)
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
			if (player.sortItem && player.sortItem.menu === "inventory") {
				let category = player.inventory[player.sortItem.index].category;
				let img = player.inventory[player.sortItem.index].img;
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


	inventoryBackground(canvas) {
		this.render.img(background.stats, 360, 0, 120, 480, canvas.ctx)
	}

	makeInventorySlots() {
			let img = {
				image : background.itemBorder,
				repeat : true,
			}

	  		let inventorySpaces = new Grid({
			                                  x: 365,
			                                  y: 120,
			                                  width : 3,
			                                  height : 8,
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
