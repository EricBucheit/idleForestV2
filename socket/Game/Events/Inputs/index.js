function ClickEvents (socket, gameState) {
  socket.on('mouseClick', function(x, y){
    if (!gameState.players[socket.id]) return false
    let mousePos = {x:x, y:y}
  	// console.log("x:" + x, "y:" + y);
	});

  socket.on('rightClick', function(x, y){
    if (!gameState.players[socket.id]) return false
    let mousePos = {x:x, y:y}

    gameState.players[socket.id].RightClickHandler.click(socket, gameState, mousePos)
  });

  socket.on('mouseDown', function(x, y){
    if (!gameState.players[socket.id]) return false
    let mousePos = {x:x, y:y}
    gameState.players[socket.id].MouseDownHandler.click(socket, gameState, mousePos)

  	// console.log("x:" + x, "y:" + y);
  });

  socket.on('mouseUp', function(x, y){
    if (!gameState.players[socket.id]) return false
    let mousePos = {x:x, y:y}
    gameState.players[socket.id].ClickHandler.click(socket, gameState, mousePos)

  });

  socket.on('mouseMove', function(x, y){
    if (!gameState.players[socket.id]) return false
    let mousePos = {x:x, y:y}
    gameState.players[socket.id].MoveHandler.move(socket, gameState, mousePos)
  	// console.log("x:" + x, "y:" + y);
  });

  socket.on('keyPress', function(key){
    if (!gameState.players[socket.id]) return false
  	gameState.players[socket.id].KeyPressHandler.log();
  	console.log("Key: " + key);
  });
}

module.exports = ClickEvents