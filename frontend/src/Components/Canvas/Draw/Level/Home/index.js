import {homeImages, buttons} from '../../../../../Images'
import Render from '../../Render'
import Bank from "./Bank"
import Menu from './Menu'
import {randomInt, Timer} from '../../../Helpers'

export default class Home {
	constructor() {
		this.render = new Render();
		this.floor = false;
		this.bank = new Bank();
		this.menu = new Menu();
		this.pos = {
			chest : {
				x: 32,
				y: 32 * 4,
			},
			anvil : {
				x: 32,
				y: 32 * 8,
			},
			stove : {
				x: 32,
				y: 32 * 10,
			},
			bed : {
				x: 32 * 8,
				y: 32 * 10,
			},
			table : {
				x: 32 * 8,
				y: 32 * 5,
			},
			waterWell : {
				x: 240,
				y: 80,
				index : 0,
				timer: Timer(2000),
				reverse: false,
				next : function() {
					if (this.timer.check()) this.reverse ? this.index-- : this.index++
					if (this.index >= 2) {
						this.reverse = true
					}
					if (this.index < 1) {
						this.reverse = false
					}
				}
			},
		}
	}

	draw(canvas, map) {
		this.level(canvas, map);
		this.drawWalls(canvas)
		this.drawChest(canvas)
		this.drawAnvil(canvas)
		this.drawStove(canvas)
		this.drawBed(canvas);
		this.drawTable(canvas)
		this.drawWaterWell(canvas)
	}

	createFloor(map) {
		if (map) {
			this.floor = []
			let level = map.body;
	 		for (let x = level.pos.x; x <= level.size.x; x++) {
	 			this.floor[x] = [];
	            for (let y = level.pos.y; y <= level.size.y; y++) {
	            	this.floor[x][y] = homeImages.floor.panels[randomInt(0,4)]
	            }
	        }
		}
	}

	drawWalls(canvas) {
        for (var x = 0; x <= 11; x++) {
        	this.render.img(homeImages.walls.vertical, 0, x * 33, 32, 32, canvas.ctx)
        	this.render.img(homeImages.walls.vertical, 328, x * 33, 32, 32, canvas.ctx)
        }

        for (x = 0; x <= 10; x++) {
        	if (x === 5 || x === 4 || x === 6) {
        		continue
        	}

        	this.render.img(homeImages.walls.horizontal, x * 33, 0, 32, 32, canvas.ctx)
       		this.render.img(homeImages.walls.horizontal, x * 33, 400, 32, 32, canvas.ctx)
        }
	}


	drawChest(canvas) {
		this.render.img(homeImages.chest.open, this.pos.chest.x, this.pos.chest.y, 32, 32, canvas.ctx)
	}


	drawAnvil(canvas) {
		this.render.img(homeImages.craft.anvil, this.pos.anvil.x, this.pos.anvil.y, 32, 32, canvas.ctx)
	}


	drawStove(canvas) {
		this.render.img(homeImages.craft.stove, this.pos.stove.x, this.pos.stove.y, 32, 32, canvas.ctx)
	}


	drawBed(canvas) {
		this.render.img(homeImages.bed.vertical, this.pos.bed.x, this.pos.bed.y, 32, 64, canvas.ctx)
	}

	drawTable(canvas) {
		this.render.img(homeImages.table, this.pos.table.x, this.pos.table.y, 32, 64, canvas.ctx)
	}

	drawWaterWell(canvas) {
		let x_start = this.pos.waterWell.x;
		let y_start = this.pos.waterWell.y

		let main = homeImages.well.base.main;
		let arms = homeImages.well.arms;
		let emptyBucket = homeImages.well.bucket.empty;
		let frontLayer = homeImages.well.base.frontLayer;
		let handles = [
						homeImages.well.handles.one,
						homeImages.well.handles.two,
						homeImages.well.handles.three
						];
		this.render.img(main, x_start, y_start, main.pos.width , main.pos.height ,canvas.ctx)
		this.render.img(arms, x_start - 13, y_start - 35, arms.pos.width, arms.pos.height,canvas.ctx)
		this.render.img(emptyBucket, x_start + 20, (y_start - 30) + (this.pos.waterWell.index * 9.5), emptyBucket.pos.width , emptyBucket.pos.height -(this.pos.waterWell.index * 5)  , canvas.ctx)
		this.render.img(frontLayer, x_start, y_start + 15, frontLayer.pos.width, frontLayer.pos.height, canvas.ctx)
		this.render.img(handles[this.pos.waterWell.index], x_start + 64, y_start - 42, handles[this.pos.waterWell.index].pos.width,handles[this.pos.waterWell.index].pos.height, canvas.ctx)
		
		let button_x = 247;
		let button_y = 36;

		this.render.img(buttons.aquaButton, button_x, button_y, 50, 25,canvas.ctx)
		this.render.text("Upgrade", button_x + 7, button_y + 14, "9" , canvas.ctx)
		this.pos.waterWell.next();
	}


	level(canvas, map) {
        if (map) {
        	if (!this.floor) {
        		this.createFloor(map);
        	}
            let level = map.body;
            for (let x = level.pos.x; x <= level.size.x; x++) {
                for (let y = level.pos.y; y <= level.size.y; y++) {
                    this.render.img(this.floor[x][y], x * 32, y * 32, 32, 32, canvas.ctx)
                }
            }
        }
    }
}