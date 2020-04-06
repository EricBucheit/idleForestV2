GlobalSettings = {
	buttonSettings: {
		bottomPanel: {
			x: 330,
			y: 445,
			xOffset: 30,
			yOffset: 0, 
			width: 32,
			height: 32,
		}
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

	},
}

module.exports = {
	bottomPanelSettings : GlobalSettings.buttonSettings.bottomPanel,
	craftingSettings : GlobalSettings.crafting,
}