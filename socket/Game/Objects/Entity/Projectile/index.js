class Projectile {
	constructor() {
		this.active = [];
	}

	getVelocity(player, target) {
		var dx = (target.body.pos.x - player.body.pos.x);
		var dy = (target.body.pos.y - player.body.pos.y);
		var mag = Math.sqrt(dx * dx + dy * dy);              
		let velocityX = (dx / mag);
		let velocityY = (dy / mag);
		return ({x : velocityX, y: velocityY})
	}

	fire(player, target, item, damage) {
			let projectile = item.copy()
			let velocity = this.getVelocity(player, target);
			projectile.setVelocity(velocity.x, velocity.y);
			projectile.setPos(player.body.pos.x, player.body.pos.y);
			projectile.setSize(32, 32);
			projectile.bonus = damage;
			this.active.push({projectile: projectile}); 
	}

	projectileOutOfBounds(projectile) {
		if (projectile.body.pos.x < 0 || projectile.body.pos.x > 1000 || projectile.body.pos.y < 0 || projectile.body.pos.y > 1000) {
			return true
		}
		return false;
	}

	checkCollision(enemies) {
		if (!enemies.length) {
			return ({code: 0, hit: false, message: "no Enemies"});
		}

		for (var i = 0; i < enemies.length; i++) {
			this.moveActive();
			let collision = this.collision(enemies[i])
			if (collision.hit) {
				collision.index = i;
				return (collision)
			}
		}
		return ({code: 0, hit: false, message: "no Collision"});

	}

	collision(enemy) {
		for (var i = 0; i < this.active.length; i++) {
			if (this.active[i]) {
				let projectile = this.active[i].projectile;

				if (this.projectileOutOfBounds(projectile)) {
					this.active.splice(i, 1);
					return ({hit: false, damage: 0, code: 2, message: "Projectile Out Of Bounds"});
				}

				let collision = projectile.body.collide(enemy.body)
				if (collision.collide) {
					let damage = projectile.bonus
					this.active.splice(i, 1);
					return ({hit: true, damage: damage, collision: collision, code: 1, message: `Projectile: ${projectile.name} - Collision with arrow ${i} for ${damage} Damage at (${enemy.body.pos.x}, ${enemy.body.pos.y})`});
				}
			}
		}
		return ({hit: false, damage: 0, code: 0, message: "No Collision"});
	}

	moveActive() {
		for (var i = 0; i < this.active.length; i++) {
			if (this.active[i]) {
				let projectile = this.active[i].projectile;
				projectile.body.pos.x += projectile.body.velocity.x;
				projectile.body.pos.y += projectile.body.velocity.y;
			}
		}
	}

	logActive() {
		for (var i = 0; i < this.active.length; i++) {
			if (this.active[i]) {
				let projectile = this.active[i].projectile;
				console.log(projectile.name);
				console.log(projectile.id);
				console.log(projectile.body);
			}
		}
	}

	clearActive() {
		this.active = [];
	}

}

module.exports = Projectile