const EntityStructure = require('../structure')
const {RandomInt} = require('../../../../Helpers')
const {animalSettings} = require('../../../../../GlobalSettings/entitySettings')
class AnimalStructure {
	animal(items, level) {
		let animals = [
						this.chicken,
						this.cow,
						this.llama,
						this.pig,
						this.turkey,
					]

		let animalIndex =  Math.floor(level / 20) + 1;
		if (animalIndex >= animals.length) {
			animalIndex = animals.length - 1;
		}

		animalIndex = RandomInt(0, animalIndex)
		return (animals[animalIndex](items, level))

	}

	calculateHealth = (level, boost) => {
	    let exponent = animalSettings.health.exponent + boost
	    let baseXP = animalSettings.health.base
	    return RandomInt(Math.floor(baseXP * (level ^ animalSettings.health.exponent)), Math.floor(baseXP * (level ^ exponent)))
	}

	animalSpriteSheetEnd() {
		return ({
			hurt: 0,
			idle: 0,
			magic: 0,
			shoot: 0,
			swing: 0,
			thrust: 0,
			walk: 3,
			eat : 3
		})
	}


	chicken = (items, level) => {
		let structure = EntityStructure(items);
		structure.animation.img = "chicken";
		structure.itemName = "chicken";
		structure.info.description = "Hunt for Chicken";
		structure.info.type = "animal";
		structure.body.velocityX = 1;
		structure.body.velocityY = 1;
		structure.skills.health.value = this.calculateHealth(level, animalSettings.chicken.hpOffset)
		structure.body.width = 16;
		structure.body.height = 16;
		structure.animation.spriteSheetEnd = this.animalSpriteSheetEnd()
		return (structure);
	}
	cow = (items, level) => {
		let structure = EntityStructure(items);
		structure.animation.img = "cow";
		structure.itemName = "cow";
		structure.info.description = "Hunt for Cow";
		structure.info.type = "animal";
		structure.body.velocityX = 1;
		structure.body.velocityY = 1;
		structure.skills.health.value = this.calculateHealth(level, animalSettings.cow.hpOffset)
		structure.body.width = 64;
		structure.body.height = 64;
		structure.animation.spriteSheetEnd = this.animalSpriteSheetEnd()
		return (structure);
	}

	llama = (items, level) => {
		let structure = EntityStructure(items);
		structure.animation.img = "llama";
		structure.itemName = "llama";
		structure.info.description = "Hunt for Llama";
		structure.info.type = "animal";
		structure.body.velocityX = 1;
		structure.body.velocityY = 1;
		structure.skills.health.value = this.calculateHealth(level, animalSettings.llama.hpOffset)
		structure.body.width = 64;
		structure.body.height = 64;
		structure.animation.spriteSheetEnd = this.animalSpriteSheetEnd()
		return (structure);
	}

	pig = (items, level) => {
		let structure = EntityStructure(items);
		structure.animation.img = "pig";
		structure.itemName = "pig";
		structure.info.description = "Hunt for Pork";
		structure.info.type = "animal";
		structure.body.velocityX = 1;
		structure.body.velocityY = 1;
		structure.skills.health.value = this.calculateHealth(level, animalSettings.pig.hpOffset)
		structure.body.width = 64;
		structure.body.height = 64;
		structure.animation.spriteSheetEnd = this.animalSpriteSheetEnd()
		return (structure);
	}

	turkey = (items, level) => {
		let structure = EntityStructure(items);
		structure.animation.img = "turkey";
		structure.itemName = "turkey";
		structure.info.description = "Hunt for Turkey";
		structure.info.type = "animal";
		structure.body.velocityX = 1;
		structure.body.velocityY = 1;
		structure.skills.health.value = this.calculateHealth(level, animalSettings.turkey.hpOffset)
		structure.body.width = 64;
		structure.body.height = 64;
		structure.animation.spriteSheetEnd = this.animalSpriteSheetEnd()
		return (structure);
	}

}

module.exports = AnimalStructure