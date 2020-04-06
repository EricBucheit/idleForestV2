let Fight = require ('./Fight')
let Instantiation = require('../Instantiate')
let {saveLevelItems} = require('../../../DataBase/Controllers/users')
class Interaction {
	constructor() {
		this.fight = new Fight()
		this.instantiation = new Instantiation();
	}

	walk(socket, gameState) {

		let player = gameState.players[socket.id].player;
		let target = gameState.players[socket.id].player.action.currentTarget(socket, gameState);
		let destination = false;

		if (target.destination === 'bank') {
			destination = player.home.bank
		} else if (target.destination === 'waterSource') {
			destination = player.home.waterSource;
		} else if (target.destination === 'craft') {
			destination = player.home.menu.anvil;
		} else if (target.destination === 'cook') {
			destination = player.home.menu.stove;
		} else if (target.destination === 'buy') {
			destination = gameState.players[socket.id].npcs.merchant;
		} else {
			destination = gameState.players[socket.id].level[target.destination]
		}

		let movement = player.body.moveTo(destination)
		player.navigation.direction = movement.direction;
		player.animation.indices.walk.timer();


		if (player.body.collide(destination.body).collide)
		{	
			let currLevel = player.info.currLevel;
			gameState.players[socket.id].player.action.current = "idle";
			
			if (target.destination === "prevLevel") {
				saveLevelItems(player, currLevel, gameState.players[socket.id].level);
				player.info.currLevel--;
				player.body.setPos(gameState.players[socket.id].level.nextLevel.body.pos.x, gameState.players[socket.id].level.nextLevel.body.pos.y)
				if (!gameState.players[socket.id].tutorial.completed.finished) {
					gameState.players[socket.id].npcs.tutorialMaster.body.setPos(gameState.players[socket.id].level.nextLevel.body.pos.x, gameState.players[socket.id].level.nextLevel.body.pos.y)
				}
				this.instantiation.levelLogic(socket, gameState)
			} else if (target.destination === "nextLevel") {
				saveLevelItems(player, currLevel, gameState.players[socket.id].level);
				player.info.currLevel++
				player.body.setPos(gameState.players[socket.id].level.prevLevel.body.pos.x, gameState.players[socket.id].level.prevLevel.body.pos.y)
				if (!gameState.players[socket.id].tutorial.completed.finished) {
					gameState.players[socket.id].npcs.tutorialMaster.body.setPos(gameState.players[socket.id].level.prevLevel.body.pos.x, gameState.players[socket.id].level.prevLevel.body.pos.y)
				}
				this.instantiation.levelLogic(socket, gameState)


			} else if (target.destination === "waterSource") {
				player.home.waterSource.collect(player.inventory);
			}
		}
	}

	gatherResource(socket, gameState) {
		let player = gameState.players[socket.id].player;
		let target = player.action.currentTarget(socket, gameState);
		let resource = gameState.players[socket.id][target.destination][0]
		let movement = player.body.moveTo(resource)

		player.animation.indices.walk.timer();
		player.navigation.direction = movement.direction;
		this.fight.checkResourceHit(player, resource, target);
		player.action.task = target.action;

		if(resource.skills.health.currentIsZero()) {
			let levelInventory = gameState.players[socket.id].level.newInventory
			levelInventory.addInventory(resource.inventory, resource.body.pos);
  			gameState.players[socket.id][target.destination].splice(0,1);
  		}
	}

	followPath(entities) {
		if(entities) {
			for (let index in entities) {
				let entity = entities[index]
				entity.animation.indices.walk.timer()
				let movement = entity.body.moveTo(entity.body.path.coordinates[entity.body.path.index])
				entity.navigation.direction = movement.direction;
				entity.action.current = "walk";
				if (movement.code === 3) {
					entity.action.current = 'eat'
					if (entity.animation.indices.eat.timer()) {
						entity.body.path.next()
					}
				}

			}

		}
	}

	tutorial(socket, gameState) {
		let player = gameState.players[socket.id].player

		let level = gameState.players[socket.id].level
		if (!gameState.players[socket.id].tutorial.completed.finished) {
			gameState.players[socket.id].npcs.tutorialMaster.action.current = "walk"
			let movement = false
			if (player.info.currLevel > 1) {
				movement = gameState.players[socket.id].npcs.tutorialMaster.body.moveTo(level.centerLeftLevel)
			} else {
				if (player.info.menu.current !== "none") {
					movement = gameState.players[socket.id].npcs.tutorialMaster.body.moveTo(level.centerLeftLevel)
				} else {
					movement = gameState.players[socket.id].npcs.tutorialMaster.body.moveTo(player)

				}
			}
			gameState.players[socket.id].npcs.tutorialMaster.navigation.direction = movement.direction;
			gameState.players[socket.id].npcs.tutorialMaster.animation.indices.walk.timer();
			gameState.players[socket.id].npcs.tutorialMaster.action.current = "walk"

		}
	}

	goToDestination(socket, gameState) {
		let player = gameState.players[socket.id].player
		let target = player.action.currentTarget(socket, gameState);
		let level = gameState.players[socket.id].level
		this.tutorial(socket, gameState)

		player.action.task = "none";

		let deathCheck = this.fight.playerDeath(player, level)
		if (deathCheck.dead) {
			player.action.current = "hurt";
			if (deathCheck.animationFinish) {
				this.instantiation.clear(socket, gameState)
			}
			return false;
		}

		this.followPath(gameState.players[socket.id].animals)

		if (player.magic.busy) {
			player.action.current = "magic";
			player.animation.indices.spell.timer()
			if(player.animation.indices.magic.timer()) {
				player.animation.indices.spell.index = 0;
				let currLevel = player.info.currLevel
				saveLevelItems(player, currLevel, level);
				player.magic.cast(player)
				if (player.action.teleported) {
					this.instantiation.levelLogic(socket, gameState)
					player.action.teleported = false
					return false
				}

			}
			return false
		}

		

		if (target.action === "walk") {
			player.action.current = "walk";
			this.walk(socket, gameState);
		} else if (target.action === 'none') {
			player.action.current = "idle";
		} else if (target.action === "enemy") {
			player.action.task = "fight";
   			this.fight.fight(socket, gameState)
		} else if (target.action === "woodcut" || target.action === "mine" || target.action === "hunt") {
			this.gatherResource(socket,gameState);
		}
		   	
	}



}


module.exports = Interaction;