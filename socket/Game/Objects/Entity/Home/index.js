const Bank = require('./Bank');
const Farm = require('./Farm');
const WaterSource = require('./WaterSource');
const Menu = require('./Menu')
const {RigidBody} = require('../../../Helpers')

class Home { 
	constructor(items, settings) {
		this.bank = new Bank(items, settings.bank);
		this.farm = new Farm(items, settings.farm);
		this.waterSource = new WaterSource(items, settings.waterWell);
		this.menu = new Menu()
		this.bed = { 
			body :
				new RigidBody({
					x: 32 * 8,
					y: 32 * 10,
					width: 90,
					height: 75,
				})
			}
	}
}

module.exports = Home;