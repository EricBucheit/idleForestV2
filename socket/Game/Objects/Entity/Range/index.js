const Projectile = require('../Projectile')

class Range {
	constructor() {
		this.projectile = new Projectile()
	}

	fire(player, enemy) {
		if (player.armor.spaces.bow.item.id === -1) {
			return ({code: -1, message: "No Bow Equipped"})
		}
		if (player.armor.spaces.arrows.item.id === -1) {
			return ({code : -1, message : "No Arrows Equipped"})
		}

		if (player.armor.spaces.arrows.item.quantity > 0) {
			player.armor.spaces.arrows.item.quantity = player.armor.spaces.arrows.item.quantity - 1;;
			if (player.armor.spaces.arrows.item.quantity === 0) {
				player.armor.remove("arrows", player.inventory)
			}
		}

		let damage = player.armor.spaces.bow.item.bonus + player.armor.spaces.arrows.item.bonus;
		damage = damage + player.skills.range.current;
		// this.projectile.fire(player, enemy, player.armor.spaces.arrows.item, damage);

		return ({code: 1, message: "Success Arrow Fired", damage : damage});
	}

	checkCollision(enemies) {
		if (!this.projectile.active.length) {
			return ({code: 0, message: "No Arrows currently fired"})
		}

		let collision = this.projectile.checkCollision(enemies);
		if (collision.hit) {
			return (collision)
		}

		return (collision)	
	}
}

module.exports = Range;