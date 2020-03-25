const {RigidBody} = require("../../../Helpers")

class MouseCollision {

	click(mouse, obj) {
		let point = new RigidBody({x: mouse.x, y: mouse.y, width: 1, height: 1})
		if (point.collide(obj.body).collide) {
			return true
		}
		return false
	}

	clickArr(mouse, arr) {
		let point = new RigidBody({x: mouse.x, y: mouse.y, width: 1, height: 1})
		for (var x = arr.length - 1; x >= 0; x--) {
			if (point.collide(arr[x].body)) {
				return ({click: true, index : x})
			}
		}
		return ({click: false, index : -1})
	}

	transformedCoordinate(mouse, canvas) {
		var transformedClickX = mouse.pageX - canvas.offsetLeft;
   		var transformedClickY = mouse.pageY - canvas.offsetTop;
		return ({x : transformedClickX, y : transformedClickY})
	}

}

module.exports = MouseCollision