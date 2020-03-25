//packages

var express = require('express');  
var app = express();  
var server = require('http').createServer(app);  
var io = require('socket.io')(server);
var db = require('./DataBase')
var cors = require('cors');

app.use(cors());
//io.origins(['http://167.172.222.17:5000']);


//Local Package imports
const ClickEvents = require('./Game/Events/Inputs');
const PlayerConnect = require('./Game/Events/PlayerConnect');
const Update = require('./Game/Logic/Update');
const Instantiate = require('./Game/Logic/Instantiate');


//class initialization
Instantiater = new Instantiate();
let Updater = new Update();

// game data

const gameState = Instantiater.initialize();
const payload = {};
gameState.memoryTaken = 0;
gameState.memoryCount = 0;

io.on('connection', (socket) => {
  PlayerConnect(socket, gameState);
  ClickEvents(socket, gameState);
  Updater.run(socket, gameState, payload, io);
});


server.listen(4200);


