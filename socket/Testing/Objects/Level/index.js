const Level = require('../../../Game/Objects/Level');
const {Log} = require('../../../Game/Helpers');
const EntityStructure = require('../Entity/Template/structure');
const Entity = require("../../../Game/Objects/Entity");

class LevelTest {
	constructor () {
		this.level = new Level();

		this.testPlayer = new Entity(EntityStructure);

		this.enemies = [
							new Entity(EntityStructure),
							new Entity(EntityStructure),
							new Entity(EntityStructure)
						]
		this.setPos(this.enemies[0], 500,500);
		this.setPos(this.enemies[1], 0,0);
		this.setPos(this.enemies[2], 800, 642);

		this.setPos(this.testPlayer, 200,200);



	}

	run() {
		Log.message({code: 1, message: "STARTING LEVEL TESTING"})
		this.gridIsCorrectLength(50);

		this.testPlayer.body.findPath(this.enemies[1], this.level);
		console.log(this.testPlayer.body.path.getPos());
		this.testPlayer.body.findPath(this.enemies[2], this.level);
		console.log(this.testPlayer.body.path.getPos());
	}




	gridIsCorrectLength(len) {
		if (this.level.grid[0].length === len) {
			Log.message({code: 1, message: `Level Correct Length:${len} = ${this.level.grid.length}`})
		} else {
			Log.message({code: -1, message: `Level Not Correct Length:${len} = ${this.level.grid.length}`})
		}

		if (this.level.grid[len]) {
			Log.message({code: 1, message: `Level Correct Length: ${len}`})
		} else {
			Log.message({code: -1, message: `Level Not Correct Length: ${len}`})
		}
	}

	setPos(entity, x,y) {
		entity.body.setPos(x,y);
	}

}

module.exports = new LevelTest()