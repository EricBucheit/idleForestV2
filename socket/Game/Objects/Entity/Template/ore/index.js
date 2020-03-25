const EntityStructure = require('../structure')
const {RandomInt} = require('../../../../Helpers')

class OreStructure {

	ore(items, level) {
		let ores = [
						this.copper,
						this.tin,
						this.iron,
						this.gold,
						this.platinum,
						this.diamond,
					]

		let oreIndex =  Math.floor(level / 20) + 1;
		if (oreIndex >= ores.length) {
			oreIndex = ores.length - 1;
		}

		oreIndex = RandomInt(0, oreIndex)
		return (ores[oreIndex](items, level))

	}

	calculateHealth = (level, boost) => {
	    let exponent = 1.9 + boost
	    let baseXP = 4
	    return RandomInt(Math.floor(baseXP * (level ^ 1.9)), Math.floor(baseXP * (level ^ exponent)))
	}

	copper = (items, level) => {
		let structure = EntityStructure(items);
		structure.animation.img = "copper";
		structure.itemName = "copper";
		structure.info.description = "Copper mine, drops copper ore";
		structure.info.type = "ore";
		structure.skills.health.value = this.calculateHealth(level, 0);
		structure.body.width = 32;
		structure.body.height = 32;
		return (structure);
	}

	tin = (items, level) => {
		let structure = EntityStructure(items);
		structure.animation.img = "tin";
		structure.itemName = "tin";
		structure.info.description = "Tin Mine, drops tin ore";
		structure.info.type = "ore";
		structure.skills.health.value = this.calculateHealth(level, 0);
		structure.body.width = 32;
		structure.body.height = 32;

		return (structure);
	}

	iron = (items, level) => {
		let structure = EntityStructure(items);
		structure.animation.img = "iron";
		structure.itemName = "iron";
		structure.info.description = "Iron Mine, drops iron ore";
		structure.info.type = "ore";
		structure.skills.health.value = this.calculateHealth(level, 0.4);
		structure.body.width = 32;
		structure.body.height = 32;

		return (structure);
	}

	gold = (items, level) => {
		let structure = EntityStructure(items);
		structure.animation.img = "gold";
		structure.itemName = "gold";
		structure.info.description = "Gold Mine, drops gold ore";
		structure.info.type = "ore";
		structure.skills.health.value = this.calculateHealth(level, 0.8);
		structure.body.width = 32;
		structure.body.height = 32;

		return (structure);
	}

	platinum = (items, level) => {
		let structure = EntityStructure(items);
		structure.animation.img = "platinum";
		structure.itemName = "platinum";
		structure.info.description = "Platinum Mine, drops platinum ore";
		structure.info.type = "ore";
		structure.skills.health.value = this.calculateHealth(level, 1.2);
		structure.body.width = 32;
		structure.body.height = 32;

		return (structure);
	}

	diamond = (items, level) => {
		let structure = EntityStructure(items);
		structure.animation.img = "diamond";
		structure.itemName = "diamond";
		structure.info.description = "Diamond Mine, drops diamond ore";
		structure.info.type = "ore";
		structure.skills.health.value = this.calculateHealth(level, 2);
		structure.body.width = 32;
		structure.body.height = 32;

		return (structure);
	}
}

module.exports = OreStructure