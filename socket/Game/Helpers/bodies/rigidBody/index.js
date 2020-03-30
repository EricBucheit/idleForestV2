const Vector2d = require('../vector2d');
const Collision = require('../collision');
const {RandomInt} = require('../../functions')

class RigidBody {
	constructor(settings) {
		this.pos = new Vector2d(settings.x,settings.y);
		this.center = new Vector2d(settings.width / 2, settings.height / 2);
		this.size = new Vector2d(settings.width, settings.height);
		this.velocity = new Vector2d(settings.velocityX, settings.velocityY);
		this.collision = new Collision();
		this.path = false
	}

	setPos(x,y) {
		this.pos.x = x;
		this.pos.y = y;
	}

	boundingBox() {
		let pos = new Vector2d(this.pos.x + this.size.x / 4, this.pos.y + this.size.y / 4)
		let size = new Vector2d(this.size.x / 2, this.size.y / 2)
		let center = new Vector2d(size.x / 2, size.y / 2)

		return({
			pos : pos,
			center : center,
			size : size,
		})
	}

	collide(targetBody) {
		return(this.collision.box(this, targetBody));
	}

	entityCollision(targetBody) {
		return(this.collision.box(this.boundingBox(), targetBody.boundingBox()));
	}

	left() {
		this.pos.x -= this.velocity.x;
	}

	right() {
		this.pos.x += this.velocity.x;
	}

	up() {
		this.pos.y -= this.velocity.y;
	}

	down() {
		this.pos.y += this.velocity.y;
	}

	getCurrentDirection(direction) {
		if (direction.down) {
			return ("down");
		}
		else if (direction.up) {
			return ("up");
		}
		else if (direction.right) {
			return ("right");
		}
		else if (direction.left) {
			return ("left");
		}
		return ('down');
	}

	moveTo(target) {
		let direction = {
			left : false,
			right :false,
			up: false,
			down : false,
		}
		let collision = this.entityCollision(target.body);
		if (collision.collide){
			return ({code: 3, direction: this.getCurrentDirection(collision)}); 
		}

		let dest = {
						pos: {
							x: (target.body.pos.x + this.pos.x) / 2,
							y: (target.body.pos.y + this.pos.y) / 2,
						}
					}

		if (this.pos.x < dest.pos.x && this.pos.x < 350) {
			this.right();
			direction.right = true;
		}
		if (this.pos.x >= dest.pos.x && this.pos.x > 10) {
			this.left();
			direction.left = true;
		}
		if (this.pos.y < dest.pos.y && this.pos.y < 500) {
			this.down();
			direction.down = true;
		}
		if (this.pos.y >= dest.pos.y && this.pos.y > -50) {
			this.up();
			direction.up = true;
		}

		let message = '';

		message += direction.up ? " Moving Up " : "";
		message += direction.down ? " Moving Down " : "";
		message += direction.left ? " Moving Left " : "";
		message += direction.right ? " Moving Right " : "";

		if (message !== '') {
			return ({code: 1, message: message, direction: this.getCurrentDirection(direction)})
		} else {
			return ({code : 0, message: "Not Moving", direction: this.getCurrentDirection(direction)})
		}
	}

	createPath () {
		let coordinates = []
		for (let x = 0; x < RandomInt(3,4); x++) {
			let randomX = RandomInt(100, 300);
			let randomY = RandomInt(100, 300);
			coordinates.push({body:
									new RigidBody({
										x : randomX, 
										y: randomY, 
										width: 32, 
										height: 32
									})
								})
		}
		this.path = {
			coordinates : coordinates,
			index : 0,
			next: function() {
				this.index++;
				if (this.index >= this.coordinates.length) {
					this.index = 0
				}
			},
		}
	}
}

module.exports = RigidBody