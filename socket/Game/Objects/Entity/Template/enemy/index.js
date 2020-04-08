const EntityStructure = require('../structure')
const {RandomInt} = require('../../../../Helpers')
const {bossSettings, enemySettings} = require('../../../../../GlobalSettings/entitySettings')
class EnemyStructure {

	randomItems(items, enemy, level, count) {
		let itemList = [{
						category: "Consumeable",
						subcategory: "Potion",
					},
					{
						category: "Resources",
						subcategory: "Wood"
					},
					{
						category: "Resources",
						subcategory: "Seeds"
					},
					{
						category:"Magic",
						subcategory:"Stones"
						
					}]

		let itemCount = RandomInt(1, count);
		for (let x = 0; x < itemCount; x++) {
			let index = RandomInt(0, itemList.length - 1);
			let itemLevel = level
			if (itemList[index].category === "Magic" ) {
				itemLevel = level + 40;
			}
			if (itemList[index].subcategory === "Seeds") {
				itemLevel = level + 30;
			}
			let item = items.random(itemLevel, itemList[index].category, itemList[index].subcategory);
			enemy.inventory.add(item)
		}
	}

	randomEnemy (items, level) {
		let terrainOne = [
			this.randomDrake,
			this.randomBlueImp,
		]

		let terrainTwo = [
			this.randomDrake,
			this.randomGreenImp,
			this.skeleton,
		]

		let terrainThree = [
			this.randomDrake,
			this.randomRedImp,
			this.skeleton,
		]

		let terrainFour = [
			this.randomDrake,
			this.randomGreenImp,
			this.randomBlueImp,
			this.skeleton,
		]


		let terrainFive = [
			this.randomDrake,
			this.randomGreenImp,
			this.randomBlueImp,
			this.randomRedImp,
			this.skeleton,
		]

		let terrainEnemies = [
			terrainOne,
			terrainTwo,
			terrainThree,
			terrainFour,
			terrainFive,
		]

		let bosses = [
			this.grassGolem,
			this.dirtGolem,
			this.sandGolem,
			this.lavaGolem,

		]

		if (level % 10 === 0) {
			let boss = bosses[this.bossIndex(level)](items, level)
			boss.inventory.max = 7
			return(boss)
		}

		let terrainLevel = Math.floor(level / 20);
		if (terrainLevel > 4) {
			terrainLevel = 4;
		}

		let currentTerrainEnemies = terrainEnemies[terrainLevel]
		let enemy = currentTerrainEnemies[RandomInt(0,currentTerrainEnemies.length - 1)](items, level)
		enemy.inventory.max = 7;
		return (enemy)
	}

	bossIndex(level) {
		if (level < 30) {
			return (0)
		}
		if (level >= 30 && level < 60) {
			return (1)
		}
		if (level >= 60 && level < 90) {
			return (2)
		}
		if (level >= 90) {
			return (3)
		}
		return (3)


	}
	
	randomDrake = (items, level) => {
		let drakes = [	
						this.femaleDrake,
						this.blueFemaleDrake,
						this.darkFemaleDrake,
						this.maleDrake,
						this.blueMaleDrake,
						this.darkMaleDrake,
					]		
		return (drakes[RandomInt(0,5)](items, level))
	}

	randomBlueImp = (items, level) => {
		let imps = [	
						this.blueImpPitchFork,
						this.blueImpSword,
						this.blueImp,
					]
		return (imps[RandomInt(0,imps.length - 1)](items, level))

	}

	randomRedImp = (items, level) => {
		let imps = [	
						this.redImpPitchFork,
						this.redImpSword,
						this.redImp,
					]
		return (imps[RandomInt(0,imps.length - 1)](items, level))

	}

	randomGreenImp = (items, level) => {
		let imps = [	
						this.greenImpPitchFork,
						this.greenImpSword,
						this.greenImp,
					]
		return (imps[RandomInt(0,imps.length - 1)](items, level))

	}

	randomImp(items, level) {
		let imps = [	
						this.blueImpPitchFork,
						this.blueImpSword,
						this.blueImp,
						this.redImpPitchFork,
						this.redImpSword,
						this.redImp,
						this.greenImpPitchFork,
						this.greenImpSword,
						this.greenImp,
					]		
		return (imps[RandomInt(0,imps.length - 1)](items, level))
	}

	calculateLevel(level, boost) {
	    let exponent = enemySettings.exponent + boost
	    let baseXP = enemySettings.base
	    return Math.floor(baseXP * (level ^ exponent))
	}
	
	makeSkills(level, settings) {
		return ({
			health : { 
						value: this.calculateLevel(level, settings.healthBonus) + 10,
					},
			attack : { 
						value: this.calculateLevel(level, settings.attackBonus),
					},
			defense : { 
						value: this.calculateLevel(level, settings.defenseBonus),
					},
			attackSpeed : { 
						value: this.calculateLevel(level, settings),
						speed : settings.speed,
						delay : settings.delay,
					},
		})
	}

	enemyGold(level) {
		return (RandomInt(this.calculateLevel(level, 0), this.calculateLevel(level, 3)))

	}

	calculateBossLevel(level, baseBonus, bonus) {
		let exponent = bossSettings.level.exponent + bonus
	    let baseXP = bossSettings.level.base + baseBonus
	    return Math.floor(baseXP * (level ^ exponent))
	}


	makeBossSkills(level) {
		return ({
				health : { 
					value: this.calculateBossLevel(level, bossSettings.health.base, bossSettings.health.exponent),
				},
				attack : { 
					value: this.calculateBossLevel(level,bossSettings.attack.base, bossSettings.attack.exponent),
				},
				defense : { 
					value: this.calculateBossLevel(level,bossSettings.defense.base, bossSettings.defense.exponent),
				},
				attackSpeed : { 
					value: this.calculateBossLevel(level, bossSettings.speed.base, bossSettings.speed.exponent),
					speed : bossSettings.speed.value,
					delay : bossSettings.speed.delay,
				},
		})
	}

	bossSpriteSheetEnd() {
		return ({
			hurt: 6,
			idle: 0,
			magic: 6,
			shoot: 6,
			swing: 6,
			thrust: 6,
			walk: 6,
		})
	}

	bossGold(level) {
		return (RandomInt(this.calculateBossLevel(level,50, 0), this.calculateBossLevel(level,100, 5)))
	}

	golem = (items, level) => {
		let structure = EntityStructure(items);
		structure.animation.img = "golem";
		structure.info.description = "Rock Solid Golem";
		structure.info.type = "enemy";
		let newSkills = this.makeBossSkills(level);
		structure.skills = {...structure.skills, ...newSkills};
		structure.body.width = 75;
		structure.body.height = 75;
		structure.inventory.gold = this.bossGold(level);
		structure.animation.spriteSheetEnd = this.bossSpriteSheetEnd();
		return (structure);
	}

	dirtGolem = (items, level) => {
		let structure = EntityStructure(items);
		structure.animation.img = "dirtGolem";
		structure.info.description = "Rock Solid dirt Golem";
		structure.info.type = "enemy";
		let newSkills = this.makeBossSkills(level);
		structure.skills = {...structure.skills, ...newSkills};
		structure.body.width = 75;
		structure.body.height = 75;
		structure.inventory.gold = this.bossGold(level);
		structure.animation.spriteSheetEnd = this.bossSpriteSheetEnd();

		return (structure);
	}

	lavaGolem = (items, level) => {
		let structure = EntityStructure(items);
		structure.animation.img = "lavaGolem";
		structure.info.description = "Rock Solid Lava Golem";
		structure.info.type = "enemy";
		let newSkills = this.makeBossSkills(level);
		structure.skills = {...structure.skills, ...newSkills};
		structure.body.width = 75;
		structure.body.height = 75;
		structure.inventory.gold = this.bossGold(level);
		structure.animation.spriteSheetEnd = this.bossSpriteSheetEnd();

		return (structure);
	}


	grassGolem = (items, level) => {
		let structure = EntityStructure(items);
		structure.animation.img = "grassGolem";
		structure.info.description = "Rock Solid Grass Golem";
		structure.info.type = "enemy";
		let newSkills = this.makeBossSkills(level);
		structure.skills = {...structure.skills, ...newSkills};
		structure.body.width = 75;
		structure.body.height = 75;
		structure.inventory.gold = this.bossGold(level);
		structure.animation.spriteSheetEnd = this.bossSpriteSheetEnd();

		return (structure);
	}

	sandGolem = (items, level) => {
		let structure = EntityStructure(items);
		structure.animation.img = "sandGolem";
		structure.info.description = "Rock Solid Sand Golem";
		structure.info.type = "enemy";
		let newSkills = this.makeBossSkills(level);
		structure.skills = {...structure.skills, ...newSkills};
		structure.body.width = 75;
		structure.body.height = 75;
		structure.inventory.gold = this.bossGold(level);
		structure.animation.spriteSheetEnd = this.bossSpriteSheetEnd();
		return (structure);
	}


	skeleton = (items, level) => {
		let structure = EntityStructure(items);
		structure.animation.img = "skeleton";
		structure.info.description = "Bones and Brawn";
		structure.info.type = "enemy";
		let newSkills = this.makeSkills(level, enemySettings.skeleton.skillSettings);
		structure.skills = {...structure.skills, ...newSkills}
		structure.inventory.gold = this.enemyGold(level);
		return(structure)
	}

	femaleDrake = (items, level) => {
		let structure = EntityStructure(items);
		structure.animation.img = "femaleDrake";
		structure.info.description = "Of the drake species, this is female";
		structure.info.type = "enemy";
		let newSkills = this.makeSkills(level, enemySettings.femaleDrake.skillSettings);
		structure.skills = {...structure.skills, ...newSkills}
		structure.inventory.gold = this.enemyGold(level);

		return(structure)
	}

	blueFemaleDrake = (items, level) => {
		let structure = EntityStructure(items);
		structure.animation.img = "blueFemaleDrake";
		structure.info.description = "Of the drake species, this is female";
		structure.info.type = "enemy";
		let newSkills = this.makeSkills(level, enemySettings.blueFemaleDrake.skillSettings);
		structure.skills = {...structure.skills, ...newSkills}
		structure.inventory.gold = this.enemyGold(level);

		return(structure)
	}

	darkFemaleDrake = (items, level) => {
		let structure = EntityStructure(items);
		structure.animation.img = "darkFemaleDrake";
		structure.info.description = "Of the drake species, this is female";
		structure.info.type = "enemy";
		let newSkills = this.makeSkills(level, enemySettings.darkFemaleDrake.skillSettings);
		structure.skills = {...structure.skills, ...newSkills}
		structure.inventory.gold = this.enemyGold(level);

		return(structure)
	}
	maleDrake = (items, level) => {
		let structure = EntityStructure(items);
		structure.animation.img = "maleDrake";
		structure.info.description = "Of the drake species, this is male";
		structure.info.type = "enemy";
		let newSkills = this.makeSkills(level, enemySettings.maleDrake.skillSettings);
		structure.skills = {...structure.skills, ...newSkills}
		structure.inventory.gold = this.enemyGold(level);

		return(structure)
	}
	
	blueMaleDrake = (items, level) => {
		let structure = EntityStructure(items);
		structure.animation.img = "blueMaleDrake";
		structure.info.description = "Of the drake species, this is male";
		structure.info.type = "enemy";
		let newSkills = this.makeSkills(level, enemySettings.blueMaleDrake.skillSettings);
		structure.skills = {...structure.skills, ...newSkills}
		structure.inventory.gold = this.enemyGold(level);

		return(structure)
	}
	darkMaleDrake = (items, level) => {
		let structure = EntityStructure(items);
		structure.animation.img = "darkMaleDrake";
		structure.info.description = "Of the drake species, this is female";
		structure.info.type = "enemy";
		let newSkills = this.makeSkills(level, enemySettings.darkMaleDrake.skillSettings);
		structure.skills = {...structure.skills, ...newSkills}
		structure.inventory.gold = this.enemyGold(level);

		return(structure)
	}

	impSpriteSheetEnd() {
		return({
				hurt: 5,
				idle: 0,
				magic:3,
				shoot: 3,
				swing: 3,
				thrust: 3,
				walk: 3,
			})
	}

	blueImpPitchFork = (items, level) => {
		let structure = EntityStructure(items);
		structure.animation.img = "blueImpPitchFork";
		structure.info.description = "Cool Blue With A Fork";
		structure.info.type = "enemy";
		let newSkills = this.makeSkills(level, enemySettings.blueImpPitchFork.skillSettings);
		structure.skills = {...structure.skills, ...newSkills}
		structure.inventory.gold = this.enemyGold(level);
		structure.animation.spriteSheetEnd = this.impSpriteSheetEnd()
		return (structure)

	}

	blueImpSword = (items, level) => {
		let structure = EntityStructure(items);
		structure.animation.img = "blueImpSword";
		structure.info.description = "Cool Blue With A Sword";
		structure.info.type = "enemy";
		let newSkills = this.makeSkills(level, enemySettings.blueImpSword.skillSettings);
		structure.skills = {...structure.skills, ...newSkills}
		structure.inventory.gold = this.enemyGold(level);
		structure.animation.spriteSheetEnd = this.impSpriteSheetEnd()
		return (structure)

	}

	blueImp = (items, level) => {
		let structure = EntityStructure(items);
		structure.animation.img = "blueImp";
		structure.info.description = "Cool Blue";
		structure.info.type = "enemy";
		let newSkills = this.makeSkills(level, enemySettings.blueImp.skillSettings);
		structure.skills = {...structure.skills, ...newSkills}
		structure.inventory.gold = this.enemyGold(level);
		structure.animation.spriteSheetEnd = this.impSpriteSheetEnd()
		return (structure)

	}

	redImpPitchFork = (items, level) => {
		let structure = EntityStructure(items);
		structure.animation.img = "redImpPitchFork";
		structure.info.description = "Hot Red With A Fork";
		structure.info.type = "enemy";
		let newSkills = this.makeSkills(level, enemySettings.redImpPitchFork.skillSettings);
		structure.skills = {...structure.skills, ...newSkills}
		structure.inventory.gold = this.enemyGold(level);
		structure.animation.spriteSheetEnd = this.impSpriteSheetEnd()
	return (structure)

	}

	redImpSword = (items, level) => {
		let structure = EntityStructure(items);
		structure.animation.img = "redImpSword";
		structure.info.description = "Hot Red With A Sword";
		structure.info.type = "enemy";
		let newSkills = this.makeSkills(level, enemySettings.redImpSword.skillSettings);
		structure.skills = {...structure.skills, ...newSkills}
		structure.inventory.gold = this.enemyGold(level);
		structure.animation.spriteSheetEnd = this.impSpriteSheetEnd()
	return (structure)
	}

	redImp = (items, level) => {
		let structure = EntityStructure(items);
		structure.animation.img = "redImp";
		structure.info.description = "Hot Red Imp";
		structure.info.type = "enemy";
		let newSkills = this.makeSkills(level, enemySettings.redImp.skillSettings);
		structure.skills = {...structure.skills, ...newSkills}
		structure.inventory.gold = this.enemyGold(level);
		structure.animation.spriteSheetEnd = this.impSpriteSheetEnd()
	return (structure)

	}

	greenImpPitchFork = (items, level) => {
		let structure = EntityStructure(items);
		structure.animation.img = "greenImpPitchFork";
		structure.info.description = "Earth Green With A Fork";
		structure.info.type = "enemy";
		let newSkills = this.makeSkills(level, enemySettings.greenImpPitchFork.skillSettings);
		structure.skills = {...structure.skills, ...newSkills}
		structure.inventory.gold = this.enemyGold(level);
		structure.animation.spriteSheetEnd = this.impSpriteSheetEnd()
	return (structure)
	}

	greenImpSword = (items, level) => {
		let structure = EntityStructure(items);
		structure.animation.img = "greenImpSword";
		structure.info.description = "Earth Green With A Sword";
		structure.info.type = "enemy";
		let newSkills = this.makeSkills(level, enemySettings.greenImpSword.skillSettings);
		structure.skills = {...structure.skills, ...newSkills}
		structure.inventory.gold = this.enemyGold(level);
		structure.animation.spriteSheetEnd = this.impSpriteSheetEnd()
	return (structure)

	}

	greenImp = (items, level) => {
		let structure = EntityStructure(items);
		structure.animation.img = "greenImp";
		structure.info.description = "Earth Green Imp";
		structure.info.type = "enemy";
		let newSkills = this.makeSkills(level, enemySettings.greenImp.skillSettings);
		structure.skills = {...structure.skills, ...newSkills}
		structure.inventory.gold = this.enemyGold(level);
		structure.animation.spriteSheetEnd = this.impSpriteSheetEnd()
		return (structure)
	}



}

module.exports = EnemyStructure