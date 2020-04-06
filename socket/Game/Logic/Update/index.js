const Interaction = require('../Interactions')
const UIPackage = require('./UIPackage')

class Update {
	constructor() {
		this.interaction = new Interaction();
		this.UIPackage = new UIPackage()
	}

	run(socket, gameState, payload, io) {
		socket.on('update', () => {
		    if (gameState.players[socket.id]) {
		      	this.interaction.goToDestination(socket,gameState);
		      	let player = gameState.players[socket.id].player

				if (!gameState.players[socket.id].tutorial.completed.finished) {
					gameState.players[socket.id].tutorial.run(player);
				}

				player.skills.thirst.take(0.001)
				player.skills.hunger.take(0.0005)
		      	if (player.info.currLevel > 1) {
					if (player.skills.hunger.currentIsZero()) {
						player.skills.health.take(0.003);
					}
					if (player.skills.thirst.currentIsZero()) {
						player.skills.health.take(0.006);
					}
		      	}

				player.home.farm.grow();
				gameState.players[socket.id].crafting.checkTime();

				let skills = Object.keys(player.skills)
				for (let skill of skills) {
					player.skills[skill].boostDecay();
				}
				
		      	//should be last to run
				this.UIPackage.packagePayload(socket, gameState, payload);
				io.to(`${socket.id}`).emit('game', payload);
			}
		})
	}
}

module.exports = Update;