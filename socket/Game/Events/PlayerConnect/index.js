const Instantiate = require('../../Logic/Instantiate')
const {saveProgress} = require('../../../DataBase/Controllers/users')

function PlayerConnect(socket, gameState) {
	
	socket.on('register', (data) => {
		instantiate = new Instantiate;
		instantiate.checkRegister(socket, gameState, data)
	})

	socket.on('login', (data) => {
		instantiate = new Instantiate;
		instantiate.checkLogin(socket, gameState, data)
	})


	socket.on('disconnect', function() {
		if (gameState.players[socket.id]) {
			saveProgress(gameState.players[socket.id].player, socket, gameState)
		}
		delete gameState.players[socket.id]
	});

	socket.on('logout', function() {
		if (gameState.players[socket.id]) {
			saveProgress(gameState.players[socket.id].player, socket, gameState)
			socket.emit({message: "SAVE & LOGOUT SUCCESS", success: true});
		}
		delete gameState.players[socket.id]
	});
}

module.exports = PlayerConnect
