const Entity = require("../../../../Game/Objects/Entity");
const Items = require("../../../../Game/Objects/Items");
const {Log} = require('../../../../Game/Helpers');
const EntityStructure = require('../Template/structure');

class RangeTest {
	constructor() {
		this.testPlayer = new Entity(EntityStructure);
		this.enemies = [
							new Entity(EntityStructure),
							new Entity(EntityStructure),
							new Entity(EntityStructure),
							new Entity(EntityStructure),
						]

		this.arrows = new Items().getSubcategory("Weapon", "Arrows");
		this.bows = new Items().getSubcategory("Weapon", "Bow");


		this.setPos(this.enemies[0], 200,500);
		this.setPos(this.enemies[1], 0,0);
		this.setPos(this.enemies[2], 800, 800);
		this.setPos(this.enemies[3], 200, 500);

		this.setPos(this.testPlayer, 0,165);
	}

	run() {
		this.addBowAndArrows();
		this.logArmor(this.testPlayer.armor.arrows.item);
		this.logArmor(this.testPlayer.armor.bow.item);

		Log.message(this.testPlayer.range.fire(this.testPlayer, this.enemies[0]));
		Log.message(this.testPlayer.range.fire(this.testPlayer, this.enemies[1]));
		Log.message(this.testPlayer.range.fire(this.testPlayer, this.enemies[1]));
		Log.message(this.testPlayer.range.fire(this.testPlayer, this.enemies[2]));
		Log.message(this.testPlayer.range.fire(this.testPlayer, this.enemies[3]));

		this.logArmor(this.testPlayer.armor.arrows.item);
		this.logArmor(this.testPlayer.armor.bow.item);


		for (let i = 0; i < 2000; i++) {
			Log.message(this.testPlayer.range.checkCollision(this.enemies));
		}

	}

	addBowAndArrows() {
		let bronzeArrows = this.arrows.bronze.copy();
		bronzeArrows.quantity = 20;

		let bronzeArrows2 = this.arrows.bronze.copy();
		bronzeArrows2.quantity = 20;

		let ironArrows = this.arrows.iron.copy();
		ironArrows.quantity = 20;

		this.testPlayer.armor.add("bow", this.bows.maple, this.testPlayer.inventory);
		Log.message(this.testPlayer.armor.addArrows(bronzeArrows, this.testPlayer.inventory));
		Log.message(this.testPlayer.armor.addArrows(bronzeArrows2, this.testPlayer.inventory));
		Log.message(this.testPlayer.armor.addArrows(ironArrows, this.testPlayer.inventory));

		Log.colors.success();
		this.testPlayer.inventory.logTakenSlots();
		Log.colors.reset();
	}

	logArmor(armor) {
		Log.colors.success();
		console.log("<----Range ARMOR---->")
		console.log("ID: ",armor.id);
		console.log("NAME: ", armor.name);
		console.log("QUANTITY: ", armor.quantity);
		console.log("Bonus: ", armor.bonus);

		console.log(Log.colors.blue + "---------------")
		Log.colors.reset();
	}


	setPos(entity, x,y) {
		entity.body.setPos(x,y);
	}
}

module.exports = new RangeTest()