EntityStructure = {
	info : {
		name : "TEST",
		description : "THIS IS A TEST DESC",
		type : "PLAYER",
		currLevel : 1,
		highestLevel : 1,
		deaths : 4,
	},

	action : {
		current: "walk",
		walk: true,
		home: true,
		farm: false,
		mine: false,
		woodCut: false,
		hunt: false,
	},

	navigation : {
		location : "",
		destination : "",
		direction : "",
	},

	body : {
			x : 100,
			y : 100,
			width : 32,
			height : 32,
			velocityX : 5,
			velocityY : 5
	},

	skills : {
		health : 100,
		attack : 1,
		defense : 1,
		attackSpeed : 1,
		range : 1,
		magic : 1,
		thirst : 10,
		hunger : 10,
		mining : 1,
		woodcutting : 1,
		hunting : 1,
	}
}

module.exports = EntityStructure