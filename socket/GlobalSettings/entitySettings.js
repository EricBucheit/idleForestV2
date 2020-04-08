let entity = {
	animals : {
		health: {
			base: 1.1,
			exponent: 1.1,
		},
		chicken: {
			hpOffset: -0.6,
		},
		cow: {
			hpOffset: 0.1,
		},
		llama: {
			hpOffset: 0.3,
		},
		pig: {
			hpOffset: 0.4,
		},
		turkey: {
			hpOffset: 0.5,
		},
	},
	enemies: {
		base: 0.7,
		exponent : 1.05,
		skeleton : {
			skillSettings : {
					speed: 200, 
					delay: 800,
					attackBonus : 0,
					healthBonus : 0,
					defenseBonus : 0,
				}
		},
		femaleDrake : {
			skillSettings : {
					speed: 200, 
					delay: 800,
					attackBonus : 0.1,
					healthBonus : 0.1,
					defenseBonus : 0.1,
				}
		},
		blueFemaleDrake : {
			skillSettings : {
					speed: 200, 
					delay: 800,
					attackBonus : 0,
					healthBonus : 0,
					defenseBonus : 0,
				}
		},
		darkFemaleDrake : {
			skillSettings : {
					speed: 200, 
					delay: 800,
					attackBonus : 0,
					healthBonus : 0,
					defenseBonus : 0,
				}
		},
		maleDrake : {
			skillSettings : {
					speed: 200, 
					delay: 800,
					attackBonus : 0.1,
					healthBonus : 0.1,
					defenseBonus : 0.1,
				}
		},
		blueMaleDrake : {
			skillSettings : {
					speed: 200, 
					delay: 800,
					attackBonus : 0,
					healthBonus : 0,
					defenseBonus : 0,
				}
		},
		darkMaleDrake : {
			skillSettings : {
					speed: 200, 
					delay: 800,
					attackBonus : 0,
					healthBonus : 0,
					defenseBonus : 0,
				}
		},
		blueImpPitchFork : {
			skillSettings : {
					speed: 200, 
					delay: 800,
					attackBonus : 0.1,
					healthBonus : 0,
					defenseBonus : 0,
				}
		},
		blueImpSword : {
			skillSettings : {
					speed: 200, 
					delay: 800,
					attackBonus : 0.1,
					healthBonus : -0.1,
					defenseBonus : 0.1,
				}
		},
		blueImp : {
			skillSettings : {
					speed: 200, 
					delay: 800,
					attackBonus : 0,
					healthBonus : 0,
					defenseBonus : 0,
				}
		},
		redImpPitchFork : {
			skillSettings : {
					speed: 200, 
					delay: 800,
					attackBonus : 0.3,
					healthBonus : 0,
					defenseBonus : 0,
				}
		},
		redImpSword : {
			skillSettings : {
					speed: 200, 
					delay: 800,
					attackBonus : 0.1,
					healthBonus : -0.1,
					defenseBonus : 0.2,
				}
		},
		redImp : {
			skillSettings : {
					speed: 200, 
					delay: 800,
					attackBonus : 0,
					healthBonus : 0.4,
					defenseBonus : 0,
				}
		},
		greenImpPitchFork : {
			skillSettings : {
					speed: 200, 
					delay: 800,
					attackBonus : 0.3,
					healthBonus : 0.2,
					defenseBonus : 0,
				}
		},
		greenImpSword : {
			skillSettings : {
					speed: 200, 
					delay: 800,
					attackBonus : 0.3,
					healthBonus : -0.3,
					defenseBonus : 0.3,
				}
		},
		greenImp : {
			skillSettings : {
					speed: 200, 
					delay: 800,
					attackBonus : 0.1,
					healthBonus : 0.5,
					defenseBonus : 0,
				}
		},
	},
	bosses: {
		level: {
			base: 1.1,
			exponent: 1.02,
		},
		health: {
			exponent: 1.9, 
			base: 9,
		},
		attack : {
			exponent: 0.1, 
			base: 0.4,
		},
		defense: {
			exponent: 0, 
			base: 0,
		},
		speed: {
			exponent: 0, 
			base: 0,
			delay: 450,
			value: 400,
		}
	},

	ores : {
		exponent : 1.9,
		base : 4,
		copper: {
			hpOffset: 0,
		},
		tin: {
			hpOffset: 0,
		},
		iron: {
			hpOffset: 0.4,
		},
		gold: {
			hpOffset: 0.8,
		},
		platinum: {
			hpOffset: 1.2,
		},
		diamond: {
			hpOffset: 2,
		},
		
	},
	trees : {
		exponent : 1.9,
		base : 4,
		oak: {
			hpOffset: 0,
		},
		maple: {
			hpOffset: 0.3,
		},
		mahogony: {
			hpOffset: 0.6,
		},
		magic: {
			hpOffset: 0.9,
		},
		super: {
			hpOffset: 1.4,
		},
	},
}

module.exports = {
	animalSettings : entity.animals,
	enemySettings : entity.enemies,
	bossSettings : entity.bosses,
	oreSettings : entity.ores,
	treeSettings : entity.trees
}