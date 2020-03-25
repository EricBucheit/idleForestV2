const EntityStructure = require('../structure')
const {RandomInt} = require('../../../../Helpers')

class PlayerStructure {
	player(items, data) {

    let structure = EntityStructure(items);
    structure.info.user_id = data.id
		structure.info.type = "player";
		structure.info.name = data.name || "No Name";
		structure.info.description = data.info.description || "THE BEST";
    structure.info.difficulty = data.info.difficulty || "Easy";
    structure.info.sound = data.info.sound || false;
    structure.info.highestLevel = data.info.highestLevel || 1;
    structure.info.deaths = data.info.deaths || 0;
		structure.animation.img = data.animation.img || "coffee";
		structure.animation.shirt = data.animation.shirt || "black";
		structure.animation.pants = data.animation.pants || "black";
		structure.animation.hair = data.animation.hair || "black";
    structure.skills.attackSpeed.delay = 800;
    structure.skills.attackSpeed.speed = 165;
    structure.inventory.gold = data.gold === undefined ? 100 : data.gold;
    structure.home.farm.level = data.info.farmLevel;
    structure.home.farm.waterCount = data.info.farmWaterCount;
    structure.home.waterWell.level = data.info.waterWellLevel
		structure.inventory.grid = {
			options: {
                      x: 365,
                      y: 120,
                      width : 3,
                      height : 8,
                      cellWidth : 40,
                      cellHeight: 40,
                      labelOffsetX : 5,
                      labelOffsetY : 5,
                      labelSize : 10,
                    }
		};
		structure.inventory.stack = true;
		structure.home.bank.grid = {
			options: {
                      x: 90,
                      y: 20,
                      width : 5,
                      height : 10,
                      cellWidth : 40,
                      cellHeight: 40,
                      labelOffsetX : 5,
                      labelOffsetY : 5,
                      labelSize : 10,
                  }
			                                
		};
		return (structure);
	}
}

module.exports = PlayerStructure