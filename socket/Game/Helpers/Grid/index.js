const {RigidBody} = require('../')
const MouseCollision = require('../../Logic/InputHandlers/MouseCollision')

module.exports = class Grid {

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
		let controls = settings.controls || false
		let background = settings.background || false

		this.open = false;
		this.start = new RigidBody({x: x, y: y, width: width, height: height});
		this.cell = new RigidBody({x: 0, y: 0, width: cellWidth, height: cellHeight})
		this.labelOffset = new RigidBody({x: labelOffsetX, Y: labelOffsetY, width: labelSize, height: labelSize});
		this.cellSpace = new RigidBody({x: 0, y: 0, width: xSpace, height: ySpace});
		this.cellHalfSpace = new RigidBody({x: 0, y: 0, width: cellHalfWidth, height: cellHalfHeight});
		this.cellCount = cellCount;
		this.labels = labels
		this.spaces = [];
		this.controls = controls;
		this.backGround = background
		this.page = 0;
		this.clickHandler = new MouseCollision();

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


	click(mouse) {
		let len = this.spaces.length
         for (let x = 0; x < len; x++) {
            if (this.clickHandler.click(mouse, this.spaces[x].button))
            {
             	return ({click: true, index: x, label: this.spaces[x].label.label})
            }
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
			body : new RigidBody({x: x, y: y, width: width,height: height})
		})
	}

	label(label, x, y, fontSize) {
		return ({
			body : new RigidBody({x: x, y: y, width: 32, height: 32}),
			fontSize: fontSize,
			label: label,

			change : function(label) {
				this.label = label;
			}

		})
	}
}
