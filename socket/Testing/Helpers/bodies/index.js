const CollisionTest = require('./collision');
const RigidBodyTest = require('./rigidBody');
const Vector2dTest = require('./vector2d');

class HelperTest {
	constructor() {
		this.CollisionTest = new CollisionTest();
		this.RigidBodyTest = new RigidBodyTest();
		this.Vector2dTest = new Vector2dTest();
	}
}

module.exports = HelperTest;
