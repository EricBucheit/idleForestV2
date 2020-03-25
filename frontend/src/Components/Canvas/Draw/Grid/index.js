import Render from "../Render"
import itemImages from "../../../../Images/itemImages"
// import ClickHandler from "../clickhandler"

export default class Grid {

	constructor(settings) {
		
		let x = settings.x || 0
		let y = settings.y || 0
		let width = settings.width || 3
		let height = settings.height || 4
		let cellWidth = settings.cellWidth || 32
		let cellHeight = settings.cellHeight || 32
		let cellHalfWidth = cellWidth / 2;
		let cellHalfHeight = cellHeight / 2;
		let cellCount = settings.cellCount || false
		let labelOffsetX = settings.labelOffsetX || 0
		let labelOffsetY = settings.labelOffsetY || 10
		let labelSize = settings.labelSize || 10
		let labels = settings.labels || []
		let xSpace = settings.xSpace || 0;
		let ySpace = settings.ySpace || 0;
		let imgs = settings.imgs || false
		let controls = settings.controls || false
		let background = settings.background || false

		this.open = false;
		this.start = new RigidBody(x, y, width,height);
		this.cell = new RigidBody(0, 0, cellWidth, cellHeight)
		this.labelOffset = new RigidBody(labelOffsetX, labelOffsetY, labelSize, labelSize);
		this.cellSpace = new RigidBody(0,0, xSpace, ySpace);
		this.cellHalfSpace = new RigidBody(0,0, cellHalfWidth, cellHalfHeight);
		this.cellCount = cellCount;
		this.labels = labels
		this.imgs = imgs;
		this.spaces = [];
		this.controls = controls;
		this.backGround = background
		this.page = 0;
		this.draw = new Render();
		// this.clickHandler = new ClickHandler();

		this.makeCells();

	}

	setLabelOffset(x, y) {
		this.labelOffset.pos.x = x;
		this.labelOffset.pos.y = y;
	}

	setLabelSize(size) {
		this.labelOffset.size.x = size;
		this.labelOffset.size.y = size;
	}

	setLabels(labels) {
		for (var i = 0; i < this.spaces.length; i++) {
			this.spaces[i].label.change(labels[i]);
		}
	}

	changeImg(index, img) {
		this.imgs[index] = img;
	}

	changeLabel(index, label) {
		this.spaces[index].label.change(label);
	}

	makeCells() {
		let x = this.start.pos.x;
		let y = this.start.pos.y;
		let width = this.start.size.x;
		let height = this.start.size.y;
		let cellWidth = this.cell.size.x;
		let cellHeight = this.cell.size.y;
		let labelSize = this.labelOffset.size.x;
		let labelOffsetX = this.labelOffset.pos.x;
		let labelOffsety = this.labelOffset.pos.y;
		let count = 0;
		for (var i = 0; i < height; i ++) {
			for (var j = 0; j < width; j ++) {
				if (this.cellCount && count > this.cellCount - 1) {
					return;
				}
				let label = this.labels[i * width + j];
				if (!label) {
					label = "";
				}
				this.spaces.push({
					button: this.button((x + (j * cellWidth)), y + (i * cellHeight), cellWidth,cellHeight),
					label : this.label(label, x + (j * cellWidth) + labelOffsetX, (y + (i * cellHeight)) + labelOffsety, labelSize)
				})
				count++;
			}
		}
	}

	drawGrid(ctx) {
		if (this.backGround) {
			this.draw.img(this.backGround.img, this.backGround.x, this.backGround.y, this.backGround.width, this.backGround.height, ctx)
		}

		for (var i = 0; i < this.spaces.length; i++) {
			
			let img = false;

			if (this.imgs.repeat) {
				img = this.imgs.image
			} else if (this.imgs[i]) {
				img = this.imgs[i]
			}

			if (img) {


				this.draw.img(
								img,
								this.spaces[i].button.body.pos.x - 5, 
								this.spaces[i].button.body.pos.y,
								this.spaces[i].button.body.size.x, 
								this.spaces[i].button.body.size.y, 
								ctx
							)

				// this.draw.label(this.spaces[i], ctx)
			} else {
				// this.draw.button(this.spaces[i], ctx)
			}

		}
	}

	drawControls(ctx) {
		if (this.controls) {
			for (var i = 0; i < this.controls.length; i++) {
				this.draw.img(
								this.controls[i].img,
								this.controls[i].button.body.pos.x, 
								this.controls[i].button.body.pos.y,
								this.controls[i].button.body.size.x, 
								this.controls[i].button.body.size.y, 
								ctx
							)
			}
		}
	}

	drawInventory(inventory, ctx, page = 0) {
		let len = this.spaces.length

		for (var i = 0; i < len; i++) {
			if (inventory.spaces[i + page] && inventory.spaces[i + page].id !== -1) {
				if (inventory.spaces[i + page].img) {
					this.draw.inventoryItemImg(
									inventory.spaces[i + page].img,
									this.spaces[i].button.body.pos.x, 
									this.spaces[i].button.body.pos.y,
									ctx
								)
				} else {
            		this.draw.text(inventory.spaces[i + page].name, this.spaces[i].button.body.pos.x, this.spaces[i].button.body.pos.y + (this.spaces[i].button.body.size.y / 2), "9", ctx);
				}
           		this.draw.text(inventory.spaces[i + page].quantity, this.spaces[i].button.body.pos.x, this.spaces[i].button.body.pos.y + (this.spaces[i].button.body.size.y / 3), "9", ctx);
			} 
		}
	}

	drawItems(inventory, canvas, page = 0) {
		if (!inventory) {
			return false
		}

		let len = this.spaces.length

		for (var i = 0; i < len; i++) {
			if (!inventory[i + page] || inventory[i + page].id === -1) {
				continue ;
			}
			let category = inventory[i + page].category;
			let img = inventory[i + page].img;
			if (!itemImages[category] || !itemImages[category][img]) {
				//if img doesn't exist then it shows name
					this.draw.text(
									inventory[i + page].name, 
									this.spaces[i].button.body.pos.x + 3, 
									this.spaces[i].button.body.pos.y + 22,
									7, 
									canvas.ctx)

					this.draw.text(
								inventory[i + page].quantity, 
								this.spaces[i].button.body.pos.x + 7, 
								this.spaces[i].button.body.pos.y + 9,
								7, 
								canvas.ctx
								)
			} else {
				this.draw.text(
								inventory[i + page].quantity, 
								this.spaces[i].button.body.pos.x + 7, 
								this.spaces[i].button.body.pos.y + 9,
								7, 
								canvas.ctx
								)

				this.draw.img(
								itemImages[category][img], 
								this.spaces[i].button.body.pos.x, 
								this.spaces[i].button.body.pos.y + 9,
								this.spaces[i].button.body.size.x - 10, 
								this.spaces[i].button.body.size.y - 10, 
								canvas.ctx
							)
			}
		}
	}
	
	
	click(mouse, canvas) {
		let len = this.spaces.length
         for (let x = 0; x < len; x++) {
            // if (this.clickHandler.click(mouse, this.spaces[x].button, canvas))
            // {
            //  	return ({click: true, index: x, label: this.spaces[x].label.label})
            // }
        }
        return ({click: false, index: -1})
	}

	controlClick(mouse, canvas) {
		let len = this.controls.length
         for (let x = 0; x < len; x++) {
            // if (this.clickHandler.click(mouse, this.controls[x].button, canvas))
            // {
            //  	return ({click: true, index: x})
            // }
        }
        return ({click: false, index: -1})
	}

	button (x, y, width, height) {
		return ({
			body : new RigidBody(x,y,width,height)
		})
	}

	label(label, x, y, fontSize) {
		return ({
			body : new RigidBody(x,y,32,32),
			fontSize: fontSize,
			label: label,

			change : function(label) {
				this.label = label;
			}

		})
	}
}

class Vector2d {
	constructor(x, y) {
		this.x = x;
		this.y = y
	}
}

class RigidBody {
	
	constructor(x, y, width, height) {
		this.pos = new Vector2d(x,y);
		this.size = new Vector2d(width, height);		
	}

	setPos(x,y) {
		this.pos.x = x;
		this.pos.y = y;
	}

	at_destination(x,y) {
		let point = new RigidBody(x,y,32,32);


		if (this.pos.x < x) {
			this.currentDirection = "east"
		}

		if (this.pos.x > x) {
			this.currentDirection = "west"
		}


		if (this.pos.y < y) {
			this.currentDirection = "south"
		}

		if (this.pos.y > y) {
			this.currentDirection = "north"
		}


		if (this.collide(point)) 
		{
			return true;
		}
		return (false);
	}
	
	boxCollision(obj1, obj2) {
		if (obj1.pos.x < obj2.pos.x + obj2.size.x &&
		   obj1.pos.x + obj1.size.x > obj2.pos.x &&
		   obj1.pos.y < obj2.pos.y + obj2.size.y &&
		   obj1.pos.y + obj1.size.y > obj2.pos.y) {
		    return (true);
		}
		return (false);
	}

	collide(obj) {
		return(this.boxCollision(this, obj));
	}



}