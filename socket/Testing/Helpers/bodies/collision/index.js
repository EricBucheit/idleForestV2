const RigidBody = require('../../../../Game/Helpers/bodies/rigidBody');


class CollisionTest {
	constructor() {
		const settings = {
			x : 100,
			y: 100,
			width : 32,
			height: 32,
			velocityX : 5,
			velocityY : 5
		}

		this.rigidBody = new RigidBody(settings);
	}

	run() {
		this.collisionOnRight()
		this.collisionOnLeft()
		this.collisionOnBottom()
		this.collisionOnTop()

	}

	collisionOnLeft() {
		console.log("RUNNING Left COLLISION");
		const settings = {
			x : 120,
			y: 100,
			width : 32,
			height: 32,
			velocityX : 5,
			velocityY : 5
		}


		var collision = this.rigidBody.collide( new RigidBody(settings) );
		console.log("COLLISION" ,collision)
		console.log("-------------------------");

	}

	collisionOnRight() {
		console.log("RUNNING Right COLLISION");
		const settings = {
			x : 80,
			y: 100,
			width : 32,
			height: 32,
			velocityX : 5,
			velocityY : 5
		}


		var collision = this.rigidBody.collide( new RigidBody(settings) );
		console.log("COLLISION" ,collision)
		console.log("-------------------------");

	}

	collisionOnBottom() {
		console.log("RUNNING Bottom COLLISION");
		const settings = {
			x : 80,
			y: 120,
			width : 32,
			height: 32,
			velocityX : 5,
			velocityY : 5
		}


		var collision = this.rigidBody.collide( new RigidBody(settings) );
		console.log("COLLISION" ,collision)
		console.log("-------------------------");

	}

	collisionOnTop() {
		console.log("RUNNING Top COLLISION");
		const settings = {
			x : 80,
			y: 80,
			width : 32,
			height: 32,
			velocityX : 5,
			velocityY : 5
		}


		var collision = this.rigidBody.collide( new RigidBody(settings) );
		console.log("COLLISION" ,collision)
		console.log("-------------------------");

	}

}

module.exports = CollisionTest