const EntityStructure = require('../structure')
const {RandomInt} = require('../../../../Helpers')

class TreeStructure {
	tree(items, level) {
		let trees = [
						this.oak,
						this.maple,
						this.mahogony,
						this.magic,
						this.super,
					]

		let treeIndex = Math.floor(level / 30) + 1;
		if (treeIndex >= trees.length) {
			treeIndex = trees.length - 1;
		}
		treeIndex = RandomInt(0, treeIndex);
		return (trees[treeIndex](items, level))

	}
	 
	calculateHealth = (level, boost) => {
	    let exponent = 1.9 + boost
	    let baseXP = 4
	    return RandomInt(Math.floor(baseXP * (level ^ 1.9)), Math.floor(baseXP * (level ^ exponent)))
	}

	oak = (items, level) => {
		let structure = EntityStructure(items);
		structure.animation.img = "oak";
		structure.itemName = "oak";
		structure.info.description = "Oak Tree, drops Oak Logs";
		structure.info.type = "tree";
		structure.skills.health.value = this.calculateHealth(level, 0);
		return (structure);
	}

	maple = (items, level) => {
		let structure = EntityStructure(items);
		structure.animation.img = "maple";
		structure.itemName = "maple";
		structure.info.description = "Maple Tree, drops Maple Logs";
		structure.info.type = "tree";
		structure.skills.health.value = this.calculateHealth(level, 0.3);
		return (structure);
	}

	mahogony = (items, level) => {
		let structure = EntityStructure(items);
		structure.animation.img = "mahogony";
		structure.itemName = "mahogony";
		structure.info.description = "Mahogony Tree, drops Mahogony Logs";
		structure.info.type = "tree";
		structure.skills.health.value = this.calculateHealth(level, 0.6);
		return (structure);
	}

	magic = (items, level) => {
		let structure = EntityStructure(items);
		structure.animation.img = "magic";
		structure.itemName = "magic"
		structure.info.description = "Magic Tree, drops Magic Logs";
		structure.info.type = "tree";
		structure.skills.health.value = this.calculateHealth(level, 0.9);
		return (structure);
	}

	super = (items, level) => {
		let structure = EntityStructure(items);
		structure.animation.img = "super";
		structure.itemName = "super"
		structure.info.description = "Super Tree, drops Super Logs";
		structure.info.type = "tree";
		structure.skills.health.value = this.calculateHealth(level, 1.4);
		return (structure);
	}
}

module.exports = TreeStructure