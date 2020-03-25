const Projectile = require('../../../../Game/Objects/Entity/Projectile');
const Entity = require("../../../../Game/Objects/Entity");
const Items = require("../../../../Game/Objects/Items");
const {Log} = require('../../../../Game/Helpers');
const EntityStructure = require('../Template/structure');

class ProjectileTest {
	constructor() {
		this.projectile = new Projectile();
		this.testPlayer = new Entity(EntityStructure);

		this.enemies = [
							new Entity(EntityStructure),
							new Entity(EntityStructure),
							new Entity(EntityStructure)
						]

		this.arrows = new Items().getSubcategory("Weapon", "Arrows");
		this.setPos(this.enemies[0], 500,500);
		this.setPos(this.enemies[1], 0,0);
		this.setPos(this.enemies[2], 800, 642);

		this.setPos(this.testPlayer, 200,200);


	}

	run () {
		Log.message({code: 1, message: "STARTNG PROJECTILE TEST"});
		this.fireProjectiles();
		this.logActiveProjectile();

		for (let x = 0; x < 1000; x++) {
			Log.message(this.projectile.checkCollision(this.enemies));
		}

		this.logActiveProjectile()
	}

	logActiveProjectile() {
		console.log("LOGGING ACTIVE");
		console.log("-----------------");
		this.projectile.logActive();
		console.log("-----------------");

	}

	fireProjectiles() {
		this.fire(this.enemies[0], this.arrows.diamond, this.arrows.diamond.bonus);
		this.fire(this.enemies[1], this.arrows.iron, this.arrows.iron.bonus);
		this.fire(this.enemies[2], this.arrows.bronze, this.arrows.bronze.bonus);

	}

	fire(enemy, arrow, damage) {
		this.projectile.fire(this.testPlayer, enemy, arrow, damage)
	}

	setPos(entity, x,y) {
		entity.body.setPos(x,y);
	}
}

module.exports = new ProjectileTest();