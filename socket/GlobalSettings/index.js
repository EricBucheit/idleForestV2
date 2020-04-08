GlobalSettings = {
	buttonSettings: {
		bottomPanel: {
			x: 330,
			y: 445,
			xOffset: 30,
			yOffset: 0, 
			width: 32,
			height: 32,
		},
		actionButtons: {
			x: -60,
			y: 440,
			xOffset: 60,
			yOffset: 0, 
			width: 50,
			height: 30,
		},

		hitBubble: {
			body: { x:0, y: 0, width:15, height:15 },
			timer: 2000,
			moveTimer: 100,
		},
	},

	crafting : {
		grid: {
			x: 70,
			y: 200,
			width : 12,
			height : 4,
			cellWidth : 20,
			cellHeight: 20,
			labelOffsetX : 5,
			labelOffsetY : 5,
			labelSize : 10,
		}
	},

	player : {
		animation : {
			timer: {
				hurt: 200,
				idle: 200,
				magic:200,
				shoot: 25,
				swing: 50,
				thrust: 300,
				walk: 45,
				eat: 200,
				spell : 85,
			},
		},
		armor : {
			positions: {
				helm : {x: 404, y: 200, width: 32, height: 32},
				chest : {x: 404, y: 240, width: 32, height: 32},
				legs : {x: 404, y: 280, width: 32, height: 32},
				feet : {x: 404, y: 320, width: 32, height: 32},
				weapon : {x: 360, y: 240, width: 32, height: 32},
				shield : {x: 448, y: 240, width: 32, height: 32},
				bow : {x: 360, y: 135, width: 32, height: 32},
				arrows : {x: 448, y: 135, width: 32, height: 32},
				pickaxe : {x: 360, y: 175, width: 32, height: 32},
				axe : {x: 448, y: 175, width: 32, height: 32},
			},

			defaultBonus : {
				attack : 0,
				defense: 0,
				speed: 200,
				range: 0,
				mining: 0,
				woodcutting: 0,
			}
		},

		home: {
			bank: {
				positions: {
					chestBody : {
						x : 32,
						y : 32 * 4,
						width : 32,
						height : 32,
						velocityX : 0,
						velocityY : 0,
					},
					pageUpButton : {
						x : 9.7 * 32, 
						y : 32 * 11,
						width : 32,
						height : 32,
						velocityX : 0,
						velocityY : 0,
					},

					pageDownButton : {
						x : 9.7 * 32, 
						y : 32 * 12,
						width : 32,
						height : 32,
						velocityX : 0,
						velocityY : 0,
					},
					closeButton : {
						x : 10 * 32, 
						y : 32 * 1,
						width : 32,
						height : 32,
						velocityX : 0,
						velocityY : 0,
					},
				}
			},
			farm : {
				prices : [1000, 10000, 100000, 1000000, 5000000, 20000000],
				waterTimer: 5000,
				plot : {
					timer: {start: 8000, end: 15000},
					decayTimer : {start: 20000, end: 30000},
					waterDecayTimer : {start: 15000, end: 25000},
				},
				upgradeButtonBody: {
					x: 280,
					y: 40,
					width: 50,
					height: 25
				}

			},
			waterSource: {
				prices: [1000, 10000, 100000, 1000000, 5000000, 20000000],
				timer: 1000,
				body : {
					x: 240 - 13,
					y: 80 - 15,
					width: 90,
					height: 75,
				},

				upgradeButtonBody : {
					x: 247,
					y: 36,
					width: 50,
					height: 25
				},
			}
		},
		skills: {
			defaultSpeed: 200,
			defaultDelay: 1000,
			threshold : {base : 1.1,  exponent: 3.4 },
			boostDecaytimer: 3000,
			decayTimer : 300,
		}
	},

	inventory : {
		sellReturnMultiplier: 0.6,
	},


}

module.exports = {
	bottomPanelSettings : GlobalSettings.buttonSettings.bottomPanel,
	actionButtonPanelSettings : GlobalSettings.buttonSettings.actionButtons,
	hitBubbleSettings: GlobalSettings.buttonSettings.hitBubble,
	craftingSettings : GlobalSettings.crafting,
	animationSettings: GlobalSettings.player.animation,
	armorSettings : GlobalSettings.player.armor,
	bankSettings : GlobalSettings.player.home.bank,
	farmSettings : GlobalSettings.player.home.farm,
	waterSourceSettings: GlobalSettings.player.home.waterSource,
	skillSettings : GlobalSettings.player.skills,
	inventorySettings : GlobalSettings.inventory,
}