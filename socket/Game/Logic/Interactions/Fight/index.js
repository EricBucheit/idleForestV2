const {RigidBody, Timer, RandomInt} = require('../../../Helpers')
let {saveLevelItems} = require('../../../../DataBase/Controllers/users')

class Fight {

	fight (socket, gameState) {

			let player = gameState.players[socket.id].player;
			let target = player.action.currentTarget(socket, gameState);
			let enemy = gameState.players[socket.id][target.destination][0];

			let movement = player.body.moveTo(enemy)
			player.navigation.direction = movement.direction;
			player.animation.indices.walk.timer();

      		movement = enemy.body.moveTo(player);
			enemy.navigation.direction = movement.direction;
			enemy.animation.indices.walk.timer();
			
			this.checkFightHit(player, enemy)
			
			this.checkFightHit(enemy, player)
			

			if(this.enemyDeath(enemy)) {
				let levelInventory = gameState.players[socket.id].level.newInventory
      			levelInventory.addInventory(enemy.inventory, enemy.body.pos);
      			player.inventory.addGold(enemy.inventory.gold)
      			gameState.players[socket.id][target.destination].splice(0,1);
      		}
	}

	playerDeath(player, level) {
		if(player.skills.health.currentIsZero()) {
			player.navigation.direction = "up";
			if (player.animation.indices.hurt.timer()) {
				let levelInventory = level.newInventory
				levelInventory.addInventory(player.inventory, player.body.pos);
				player.inventory.empty()
				player.info.deaths++;
				if (player.info.currLevel > player.highestLevel) {
					player.info.highestLevel = player.info.currLevel;
				}
				let currLevel = player.info.currLevel
				saveLevelItems(player, currLevel, level);
				player.info.currLevel = 1;
				player.action.current = "hurt";
				player.skills.health.equalize();
				player.skills.thirst.equalize();
				player.skills.hunger.equalize();
				return ({dead: true, animationFinish: true})
			}
			return ({dead: true, animationFinish: false})
		}
		return ({dead: false, animationFinish: false})
	}

	enemyDeath(enemy) {
		if (enemy.skills.health.currentIsZero()) {
			enemy.navigation.direction = "up";
			enemy.action.current = "hurt";
			if (enemy.animation.indices.hurt.timer()) {	
				return (true)
			}
		}
		return false
	}

	checkResourceHit(player, resource, targetInfo) {
		if (player.skills.health.currentIsZero() || resource.skills.health.currentIsZero()) {
			player.action.current = "idle"
			return false
		}

		else if (player.body.collide(resource.body).collide) {
			player.action.current = "swing";
			if(player.skills.attackSpeed.delay()) {
				if (player.skills.attackSpeed.attackTimer()) {
					if (player.animation.indices.swing.timer()) {
						if (targetInfo.action === "woodcut") {
							let attack = player.armor.bonus.woodcutting + player.skills.woodcutting.current + player.skills.woodcutting.boost
							attack = this.calculateHit(attack, resource)
							resource.skills.health.take(attack);
							player.skills.woodcutting.addXp(attack)

						}
						if (targetInfo.action === "mine") {
							let attack = player.armor.bonus.mining + player.skills.mining.current + player.skills.mining.boost
							attack = this.calculateHit(attack, resource)
							resource.skills.health.take(attack);
							player.skills.mining.addXp(attack)

						}
						if (targetInfo.action === "hunt") {
							let attack = player.armor.bonus.attack + player.skills.hunting.current + player.skills.hunting.boost
							attack = this.calculateHit(attack, resource)
							resource.skills.health.take(attack);
							player.skills.hunting.addXp(attack)
						}
						player.skills.attackSpeed.delayTimer.reset();

					}
				}
			}
		} else {
			player.action.current = "walk"
		}
	}

	calculateHit(attack, target) {
		let hitPercent = RandomInt(0,100);
		let defensePercent = RandomInt(0,100);
		let defense = target.armor.bonus.defense + target.skills.defense.current + target.skills.defense.boost

		defense = Math.floor(defense * (defensePercent / 100))
		attack = Math.ceil(attack * (hitPercent / 100))

		attack = attack - defense;
		if (attack <= 0) attack = 0;

		target.action.hitBubble.set(attack, target.body.pos.x, target.body.pos.y)

		return (attack);
	}

	checkFightHit(entity, target) {
		if (entity.skills.health.currentIsZero() || target.skills.health.currentIsZero()) {
			entity.action.current = "idle"
			return false
		} else if (entity.armor.spaces.bow.item.id !== -1 && entity.armor.spaces.arrows.item.id !== -1) {
			entity.action.current = "shoot";
			if(entity.skills.attackSpeed.delay()) {
				if (entity.skills.attackSpeed.attackTimer()) {
					if (entity.animation.indices.shoot.timer()) {
						let attack = this.calculateHit(entity.range.fire(entity, target).damage, target)
						target.skills.health.take(attack);
						entity.skills.range.addXp(attack * 4);
						entity.skills.attackSpeed.delayTimer.reset();
					}
				}
			}

		}
		else if (entity.body.collide(target.body).collide) {
			entity.action.current = "swing";
			if(entity.skills.attackSpeed.delay()) {
				if (entity.skills.attackSpeed.attackTimer()) {
					if (entity.animation.indices.swing.timer()) {

						let attack = entity.armor.bonus.attack + entity.skills.attack.current + entity.skills.attack.boost;
						attack = this.calculateHit(attack, target);
						target.skills.health.take(attack);

						entity.skills.health.addXp(attack * 4);
						entity.skills.attack.addXp(attack * 2);
						if (entity.skills.attackSpeed.addXp(attack * 2)) {
							entity.skills.attackSpeed.delayTimer.setExpiration(entity.skills.attackSpeed.delayTime - entity.skills.attackSpeed.value * 2)
							entity.skills.attackSpeed.timer.setExpiration(entity.skills.attackSpeed.speed - entity.skills.attackSpeed.value)
						}
						entity.skills.defense.addXp(attack * 2);
						entity.skills.attackSpeed.delayTimer.reset();
					}
				}
			}
		} else {
			entity.action.current = "walk"
			return (false)
		}
	}

}

module.exports = Fight