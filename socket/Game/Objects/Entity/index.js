const Info = require("./Info")
const Action = require("./Action")
const Navigation = require("./Navigation")
const {RigidBody} = require("../../Helpers/bodies")
const Skills = require("./Skills")
const Armor  = require ("./Armor");
const Inventory = require ("../Inventory");
const Bank = require('./Home/Bank');
const Range = require('./Range');
const Magic = require('./Magic');
const Animation = require('./Animation')
const Home = require('./Home');

class Entity {
	constructor(settings) {

		this.info = new Info(settings.info);
		this.action = new Action(settings.action);
		this.navigation = new Navigation(settings.navigation)
		this.body = new RigidBody(settings.body)
		this.skills = new Skills(settings.skills);
		this.armor = new Armor(settings.items);
		this.inventory = new Inventory(settings.items, settings.inventory);
		this.animation = new Animation(settings.animation)
		
		if (settings.info.type === 'player') {
			this.range = new Range();
			this.magic = new Magic(settings.items);
			this.home = new Home(settings.items, settings.home);
		}
	}
}

module.exports = Entity