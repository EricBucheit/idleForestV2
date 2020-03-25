import {singleImage} from '../Components/LoadBar';

function mapTile(x,y,width,height) {
	return ({
		x:x,
		y:y,
		width : width,
		height: height,
	})
}

// function singleImage(img) {
// 	let image = new Image();
// 	image.src = img;

// 	return image;
// }


function partSheetImage(srcs, x = 64, y = 64) {
	function getPositions(img, x, y) {
		return ({
			up : {
				img: singleImage(img),
				pos: 0,
			},
			left : {
				img: singleImage(img),
				pos: y,
			},
			down : {
				img: singleImage(img),
				pos: y * 2,
			},
			right : {
				img: singleImage(img),
				pos: y * 3,
			},
			getImg : function(direction, index) {
				return ({
					img: this[direction].img,
					pos: mapTile(index * x, this[direction].pos, x, y)
				})
			}
		})
	}

	let imgObject = {
		hurt :  getPositions(srcs.hurt, x, y),
		idle : getPositions(srcs.idle, x, y),
		magic : getPositions(srcs.magic, x, y),
		shoot : getPositions(srcs.shoot, x, y),
		swing : getPositions(srcs.swing, x, y),
		thrust : getPositions(srcs.thrust, x, y),
		walk : getPositions(srcs.walk, x, y),
		// arrows : getPositions(0, 1, 2, 3, 8)
	}

	return (imgObject)
}


function partSheetCustom(srcs, size) {
	function getPositions(img) {
		return ({
			up : {
				img: singleImage(img),
				pos: 0,
			},
			left : {
				img: singleImage(img),
				pos: 64,
			},
			down : {
				img: singleImage(img),
				pos: 64 * 2,
			},
			right : {
				img: singleImage(img),
				pos: 64 * 3,
			},
			getImg : function(direction, index) {
				return ({
					img: this[direction].img,
					pos: mapTile(index * 64, this[direction].pos, 64,64)
				})
			}
		})
	}

	function customPositions(img) {
		return ({
			up : {
				img: singleImage(img.img),
				pos: img.up,
			},
			left : {
				img: singleImage(img.img),
				pos: img.left,
			},
			down : {
				img: singleImage(img.img),
				pos: img.down,
			},
			right : {
				img: singleImage(img.img),
				pos: img.right,
			},
			getImg : function(direction, index) {
				return ({
					img: this[direction].img,
					pos: mapTile(index * 64, this[direction].pos, 64, img.height)
				})
			}
		})
	}

	let imgObject = {
		hurt :  getPositions(srcs.hurt.img),
		idle : getPositions(srcs.idle.img),
		magic : customPositions(srcs.magic),
		shoot : customPositions(srcs.shoot),
		swing : customPositions(srcs.swing),
		thrust : customPositions(srcs.thrust),
		walk : getPositions(srcs.walk.img),
	}

	return (imgObject)
}



function fullSheetImage(src) {
	function getPositions(up, left,down,right, end, src) {
		return ({
			end : end,
			up : {
				img : singleImage(src),
				pos : up * 64
			},
			left : {
				img : singleImage(src),
				pos : left * 64
			},
			down : {
				img : singleImage(src),
				pos : down * 64
			},
			right: {
				img : singleImage(src),
				pos : right * 64
			},
			getImg : function(direction, index) {
				return ({
					img: this[direction].img,
					pos: mapTile(index * 64, this[direction].pos, 64,64)
				})
			}
		})
	}

	let imgObject = {
		hurt: getPositions(20,20, 20, 20, 5, src),
		idle: getPositions(8, 9, 10, 11, 0, src),
		magic: getPositions(0, 1, 2, 3, 6, src),
		shoot: getPositions(16, 17, 18, 19, 12, src),
		swing: getPositions(12, 13, 14, 15, 5, src),
		thrust: getPositions(4, 5, 6, 7, 7, src),
		walk : getPositions(8, 9, 10, 11, 7, src),
	}

	return (imgObject)
}

function animalImage(srcs, size) {
	function getPositions(end, size, img) {
		return ({
			size : size,
			up : {
				img: singleImage(img),
				pos: 0,
				end : end,
			},
			left : {
				img: singleImage(img),
				pos: size,
				end : end,
			},
			down : {
				img: singleImage(img),
				pos: size * 2,
				end : end,
			},
			right : {
				img: singleImage(img),
				pos: size * 3,
				end : end,
			},
			getImg : function(direction, index) {
				return ({
					img: this[direction].img,
					pos: mapTile(index * this.size, this[direction].pos, this.size,this.size)
				})
			}
		})
	}
	let imgObject = {
		eat: getPositions(3, size, srcs.eat),
		walk: getPositions(3, size, srcs.walk),
		idle : getPositions(3, size, srcs.walk)
	}

	return (imgObject)
}

function farmPlantImage(src, pos) {
	return ({
			img : singleImage(src),
			width : 32,
			height: 64,
			end : 4,
			pos : {
				x: pos.x,
				y: pos.y,
			},
			getImg : function(index) {
				return ({
					img: this.img,
					pos : mapTile(this.pos.x, index * this.height, this.width, this.height),
				})
			},
		})
}

function magicAnimation(src) {
	return ({
		img : singleImage(src),
		width: 128,
		height: 128,

		getImg : function(index) {
			return ({
				img: this.img,
				pos : mapTile((index % 4) * this.width, (Math.floor(index / 4)) * this.height, this.width, this.height),
			})
		}
	})
}

export {
	mapTile,
	singleImage,
	partSheetImage,
	partSheetCustom,
	fullSheetImage,
	animalImage,
	farmPlantImage,
	magicAnimation,
}