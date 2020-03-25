class Collision {
	box(obj1, obj2) {
		let collision = {
			collide : false,
			left : false,
			right: false,
			up : false,
			down : false
		}
		if (obj1.pos.x < obj2.pos.x + obj2.size.x &&
		   obj1.pos.x + obj1.size.x > obj2.pos.x &&
		   obj1.pos.y < obj2.pos.y + obj2.size.y &&
		   obj1.pos.y + obj1.size.y > obj2.pos.y) {	
				collision.collide = true;	
				if (obj1.pos.x + obj1.size.x < obj2.pos.x + obj2.center.x) {
					collision.right = true;
				}
				if (obj1.pos.x >= obj2.pos.x + obj2.center.x) {
					collision.left = true;
				}
				if (obj1.pos.y + obj1.size.y < obj2.pos.y + obj2.center.y) {
					collision.down = true;
				}
				if (obj1.pos.y > obj2.pos.y + obj2.center.y) {
					collision.up = true;
				}
		    	return (collision);
		}
		return (collision);
	}

	
}

module.exports = Collision;