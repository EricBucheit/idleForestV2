const Entity = require("../../../../Game/Objects/Entity");
const Items = require("../../../../Game/Objects/Items");
const {Log} = require('../../../../Game/Helpers');
const EntityStructure = require('../Template/structure');


class MagicTest {
	constructor() {
		this.testPlayer = new Entity(EntityStructure);
		this.stones = new Items().getSubcategory("Magic", "Stones");
	}

	teleHome() {
		this.testPlayer.magic.teleport.home(this.testPlayer);
		Log.message(this.isCorrectTeleLevel(0));
	}

	isCorrectTeleLevel(expectedLevel) {
		if (this.testPlayer.info.currLevel === expectedLevel) {
			return ({code: 1, message: `Pass Level ${this.testPlayer.info.currLevel} is equal to ${expectedLevel}`})
		} else {
			return ({code: -1, message: `FAIL level ${this.testPlayer.info.currLevel} does not equal ${expectedLevel}` })
		}
	}

	isCorrectSkillLevel(skill, expectedLevel) {
		if (skill.boost === expectedLevel) {
			return ({code: 1, message: `Pass ${skill.name} - Level ${skill.boost} is equal to ${expectedLevel}`})
		} else {
			return ({code: -1, message: `FAIL ${skill.name} - level ${skill.boost} does not equal ${expectedLevel}` })
		}
	}


	teleportTest() {
		console.log("<------------STARTING TELEPORT TESTING----------->")
		Log.message(this.isCorrectTeleLevel(1));

		this.teleHome();

		this.testPlayer.magic.teleport.ten(this.testPlayer);
		
		Log.message(this.isCorrectTeleLevel(10));

		this.teleHome();

		this.testPlayer.magic.teleport.fifty(this.testPlayer);
		Log.message(this.isCorrectTeleLevel(50));

		this.teleHome();

		this.testPlayer.magic.teleport.oneHundred(this.testPlayer);
		Log.message(this.isCorrectTeleLevel(100));

		this.testPlayer.magic.teleport.fifty(this.testPlayer);
		Log.message(this.isCorrectTeleLevel(150));

		this.testPlayer.magic.teleport.oneHundred(this.testPlayer);
		Log.message(this.isCorrectTeleLevel(250));


		this.teleHome();
		this.logInventory();
		console.log("<------------End TELEPORT TESTING----------->")
	}

	castSpells(spell, skill) {

		console.log(`--------TESTING ${skill.name}--------`)
		spell.five(this.testPlayer)
		Log.message(this.isCorrectSkillLevel(skill, 5))

		spell.ten(this.testPlayer)
		Log.message(this.isCorrectSkillLevel(skill, 10))

		spell.thirty(this.testPlayer)
		Log.message(this.isCorrectSkillLevel(skill, 30))
		
		spell.fifty(this.testPlayer)
		Log.message(this.isCorrectSkillLevel(skill, 50))

	}

	skillTests() {
		console.log("<------------STARTING Skill TESTING----------->")
	
		this.castSpells(this.testPlayer.magic.defense, this.testPlayer.skills.defense)
		this.castSpells(this.testPlayer.magic.attack, this.testPlayer.skills.attack)
		this.castSpells(this.testPlayer.magic.archery, this.testPlayer.skills.range)
		this.castSpells(this.testPlayer.magic.mining, this.testPlayer.skills.mining)
		this.castSpells(this.testPlayer.magic.hunting, this.testPlayer.skills.hunting)
		this.castSpells(this.testPlayer.magic.woodcutting, this.testPlayer.skills.woodcutting)

		this.logInventory();

		console.log("<------------END Skill TESTING----------->")


	}
	

	addStonesToInventory() {
		this.testPlayer.inventory.add(this.stones.teleport, 500);
		this.testPlayer.inventory.add(this.stones.shield, 500);
		this.testPlayer.inventory.add(this.stones.attack, 500);
		this.testPlayer.inventory.add(this.stones.archer, 500);
		this.testPlayer.inventory.add(this.stones.mining, 500);
		this.testPlayer.inventory.add(this.stones.hunting, 500);
		this.testPlayer.inventory.add(this.stones.woodcutting, 500);
		this.logInventory();

	}

	logInventory() {
		Log.colors.warn();
		this.testPlayer.inventory.logTakenSlots();
		Log.colors.reset();
	}

	run() {
		this.addStonesToInventory();
		this.teleportTest();
		this.skillTests();
	}
}

module.exports = new MagicTest()