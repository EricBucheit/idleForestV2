const fs = require("fs");

class Credit {
	readCredits (socket) {
		fs.readFile('Attribution.txt', 'utf8', function(err, data) {
		    if (err) throw err;
		   	socket.emit("getCredits", data);
		});
	}
}

module.exports = Credit