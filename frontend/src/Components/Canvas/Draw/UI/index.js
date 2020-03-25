import Background from './Backgrounds'
import Inventory from './Inventory'
import Skills from './Skills'
import Armor from './Armor'
import Magic from './Magic'
import {background} from '../../../../Images'
import Render from '../Render'

export default class UserInterface {
	constructor() {
		this.inventory = new Inventory();
		this.background = new Background();
		this.skills = new Skills();
		this.armor = new Armor();
		this.magic = new Magic();
		this.render = new Render();
	}

	draw(canvas, player) {
		this.background.draw(canvas);
		if (player) {
			if (player.info.inventoryPage === "inventory") {
				this.inventory.draw(canvas, player);
			} else if (player.info.inventoryPage === "armor") {
				this.armor.draw(canvas, player)
			} else if (player.info.inventoryPage === "skills") {
				this.skills.draw(canvas, player);
			} else if (player.info.inventoryPage === "magic") {
				this.magic.draw(canvas, player)
			}
			this.infoBox(canvas, player)
		}
	}
	infoBox(canvas, player) {
		if(player.infoBox) {
			let x = player.infoBox.background.pos.x - player.infoBox.background.size.x;
			let y = player.infoBox.background.pos.y - player.infoBox.background.size.y;
			if (x < 0) {
				x = 0
			}
			if (y < 0) {
				y = 0
			}

	    	this.render.img(
	    					background.itemInfoBackGround, 
	    					x, 
	    					y, 
	    					player.infoBox.background.size.x, 
	    					player.infoBox.background.size.y, 
	    					canvas.ctx)
	    	
	    	this.render.textLine(
							player.infoBox.name, 
	    					x + 8, 
	    					y + 10, 
	    					"12", 
	    					canvas.ctx, 
	    					"white"
	    				)
			if (player.infoBox.price) {
	    		this.render.text(
							player.infoBox.price, 
	    					x + 10, 
	    					y + 50, 
	    					"10", 
	    					canvas.ctx, 
	    					"white"
	    				)
			}
			else if (player.infoBox.recipe) {
				let yOffset = 40;

				for (let item in player.infoBox.recipe) {
	    		this.render.textLine(
							`${player.infoBox.recipe[item].item.name} x ${player.infoBox.recipe[item].quantity}`, 
	    					x + 10, 
	    					y + yOffset, 
	    					"10", 
	    					canvas.ctx, 
	    					"white"
	    				)

				y+=20
				}
			} else {
				this.render.textLine(
							player.infoBox.description, 
	    					x + 10, 
	    					y + 50, 
	    					"10", 
	    					canvas.ctx, 
	    					"white"
	    				)
			}
			



        }

	}
}