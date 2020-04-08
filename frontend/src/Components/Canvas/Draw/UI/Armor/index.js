import Render from '../../Render'
import {background} from '../../../../../Images'
import itemImages from '../../../../../Images/itemImages'
export default class Armor {
	constructor() {
		this.render = new Render()
		this.slots = {
			helm : this.armorPiece(404, 200, this.render),
			chest : this.armorPiece(404, 240, this.render),
			legs : this.armorPiece(404, 280, this.render),
			feet : this.armorPiece(404, 320, this.render),
			weapon : this.armorPiece(360, 240, this.render),
			shield : this.armorPiece(448, 240, this.render),
			bow : this.armorPiece(360, 135, this.render),
			arrows : this.armorPiece(448, 135, this.render),
			pickaxe : this.armorPiece(360, 175, this.render),
			axe : this.armorPiece(448, 175, this.render),
		}
	}

	draw(canvas, player) {
		this.inventoryBackground(canvas)
		this.borders(canvas)
		this.items(canvas, player)
		this.armorStats(canvas, player)
	}

	armorStats(canvas, player) {
		this.render.textLine(`Attack: ${player.armorBonus.attack}`, 		380, 380, 10, canvas.ctx)
		this.render.textLine(`Defense: ${player.armorBonus.defense}`, 		380, 395, 10, canvas.ctx)
		this.render.textLine(`Range: ${player.armorBonus.range}`, 			380, 410, 10, canvas.ctx)
		this.render.textLine(`Mining: ${player.armorBonus.mining}`, 		380, 425, 10, canvas.ctx)
		this.render.textLine(`WoodCut: ${player.armorBonus.woodcutting}`, 	380, 440, 10, canvas.ctx)
	}

	armorPiece(x,y, render) {
		return({
			render: render,
			x: x,
			y: y,

			draw: function(armor, canvas) {
				if (itemImages[armor.category] && itemImages[armor.category][armor.img]) {
					this.render.img(itemImages[armor.category][armor.img], this.x, this.y, 32,32, canvas.ctx);
				} else if (armor.category !== false && armor.img !== false){
					this.render.text(armor.name, this.x, this.y+14, 8,canvas.ctx);
				}
			},

			drawArrows: function(armor, canvas) {
				if (itemImages[armor.category] && itemImages[armor.category][armor.img]) {
					this.render.text(armor.quantity, this.x + 4, this.y + 8, 10,canvas.ctx);
					this.render.img(itemImages[armor.category][armor.img], this.x, this.y + 8, 32,32, canvas.ctx);
				} else if (armor.category !== false && armor.img !== false){
					this.render.text(armor.name, this.x, this.y, 10,canvas.ctx);
				}
			}
		})
	}

	

	items(canvas, player) {
		if(!player) return false
				this.slots.helm.draw(player.animation.helm, canvas)
				this.slots.chest.draw(player.animation.chest, canvas)
				this.slots.legs.draw(player.animation.legs, canvas)
				this.slots.feet.draw(player.animation.feet, canvas)
				this.slots.weapon.draw(player.animation.weapon, canvas)
				this.slots.shield.draw(player.animation.shield, canvas)
				this.slots.bow.draw(player.animation.bow, canvas)
				this.slots.arrows.drawArrows(player.animation.arrows, canvas)

				this.slots.pickaxe.draw(player.animation.pickaxe, canvas)
				this.slots.axe.draw(player.animation.axe, canvas)
	}

	borders (canvas) {
		let armorKeys = Object.keys(this.slots);
		for (let key of armorKeys) {
			this.render.img(background.itemBorder, this.slots[key].x, this.slots[key].y, 32,32,canvas.ctx)
		}

	}

	inventoryBackground(canvas) {
		this.render.img(background.stats, 360, 0, 120, 480, canvas.ctx)
	}

}