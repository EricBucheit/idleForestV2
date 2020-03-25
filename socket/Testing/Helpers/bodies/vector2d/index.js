const Vector2d = require('../../../../Game/Helpers/bodies/vector2d');

class Vector2dTest {
	constructor() {
		this.vectorList = [];

		this.vectorList.push(new Vector2d(0,0))
		this.vectorList.push(new Vector2d(100,0))
		this.vectorList.push(100);

	}

	run() {
		for (var index in this.vectorList) {
			console.log(this.vectorList[index], index)
			this.vectorExists(this.vectorList[index]);
		}
	}

	vectorExists(vector) {
		if (vector.x === undefined) {
			console.log("FAIL :");
			console.error("NO x coordinate")
		}
		else if (vector.y === undefined) {
			console.log("FAIL :");
			console.error("NO y coordinate")
		}
		else {
			console.log("PASS : VECTOR EXISTS");
			console.log("x :" + vector.x);
			console.log("y :" + vector.y);
			console.log("--------------------");

		}
	}

}

module.exports = Vector2dTest;