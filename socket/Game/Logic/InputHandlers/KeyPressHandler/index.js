class KeyPressHandler {
	constructor() {
	}

	move(socket, gameState) {
		gameState.players[socket.id].body.pos.x++;
	}

	log() {
		console.log("KeyPressHandler");
	}
}

module.exports = KeyPressHandler