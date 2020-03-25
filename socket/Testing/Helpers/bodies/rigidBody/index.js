const {RigidBody, Log} = require('../../../../Game/Helpers');
const Level = require('../../../../Game/Objects/Level');

class RigidBodyTest {
	constructor() {
		const settings = {
			x : 100,
			y: 100,
			width : 32,
			height: 32,
			velocityX : 5,
			velocityY : 5
		}

		const destSettings = {
			x : 400,
			y: 400,
			width : 32,
			height: 32,
			velocityX : 5,
			velocityY : 5
		}

		this.rigidBody = new RigidBody(settings);
		this.destRigidBody = {
								 body: new RigidBody(destSettings)
							};
		this.level = new Level();



		this.rigidBody.findPath(this.destRigidBody, this.level);


	}

	run() {
		this.move();
		this.logPath();
		this.testPath();
	}

	move() {
		console.log("MOVING LEFT")
		this.rigidBody.left()
		console.log(this.rigidBody.pos.x);
		
		console.log("MOVING RIGHT")
		this.rigidBody.right()
		console.log(this.rigidBody.pos.x);

		console.log("MOVING UP")
		this.rigidBody.up()
		console.log(this.rigidBody.pos.y);

		console.log("MOVING DOWN")
		this.rigidBody.down()
		console.log(this.rigidBody.pos.y);
	}


	logPath() {
		console.log(this.rigidBody.path);
	}

	testPath() {
		for (let x = 0; x < 50; x++)
		{
			let follow = this.rigidBody.followPath(this.destRigidBody, this.level)
			Log.message(follow, true);
		}
	}



}

module.exports = RigidBodyTest