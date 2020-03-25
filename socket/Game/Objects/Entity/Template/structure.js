
const {RandomInt} = require('../../../Helpers')

function EntityStructure(items) {
	return ({
		info : {
			name : "",
			description : "",
			type : "",
			currLevel : 1,
			highestLevel : 0,
			deaths : 0,
			difficulty : "Easy"
		},

		action : {
			current: "idle",
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
			direction : "down",
		},

		body : {
				x : RandomInt(100,300),
				y : RandomInt(100,400),
				width : 45,
				height : 45,
				velocityX : 3,
				velocityY : 3
		},

		skills : {
			health : {
				value: 10,
			},
			attack : {
				value: 1,
			},
			defense : {
				value: 1,
			},
			attackSpeed : {
				value: 1,
			},
			range : {
				value: 1,
			},
			magic : {
				value: 1,
			},
			thirst : {
				value: 10,
			},
			hunger : {
				value: 10,
			},
			mining : {
				value: 1,
			},
			woodcutting : {
				value: 1,
			},
			hunting : {
				value: 1,
			},
		},

		animation: {
			img: false,
			hair : false,
			shirt : false,
			pants : false,
			spriteSheetEnd : false,
			index: 0,
		},

		inventory: {
			grid: false,
			stack: true,
			max: 24,
			gold: 0,
		},

		home : {
				bank: {
				grid : false,
				stack: true,
				max : 200,
			},

			farm: {
				level: 0,
				waterCount: 0,
			},

			waterWell: {
				level: 0,
			}
		},

		items: items,
	})
}

module.exports = EntityStructure