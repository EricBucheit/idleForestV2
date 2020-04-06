//packages
require('dotenv').config();
var express = require('express');  
var app = express();  
var fs = require('fs');
if (process.env.ENVIRONMENT === "DEVELOPMENT") {
	var server = require('http').createServer(app); 
} else {
	var server = require('https').createServer({
        key:  fs.readFileSync('/etc/letsencrypt/live/bucheiteric.com/privkey.pem'),
        cert: fs.readFileSync('/etc/letsencrypt/live/bucheiteric.com/cert.pem'),
	}, app);
}

var io = require('socket.io')(server);
var db = require('./DataBase')
var cors = require('cors');
app.use(cors());


//Local Package imports

var Credit = require("./credit");
const ClickEvents = require('./Game/Events/Inputs');
const PlayerConnect = require('./Game/Events/PlayerConnect');
const Update = require('./Game/Logic/Update');
const Instantiate = require('./Game/Logic/Instantiate');

let credits = new Credit()
//class initialization
Instantiater = new Instantiate();
let Updater = new Update();

// game data

const gameState = Instantiater.initialize();
const payload = {};
gameState.memoryTaken = 0;
gameState.memoryCount = 0;
gameState.credits = credits;

io.on('connection', (socket) => {
  PlayerConnect(socket, gameState);
  ClickEvents(socket, gameState);
  Updater.run(socket, gameState, payload, io);
});


server.listen(4200);


