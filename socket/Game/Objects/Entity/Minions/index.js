const Info = require("../Info")
const Action = require("../Action")
const Navigation = require("../Action")
const {RigidBody} = require("../../../Helpers/bodies")
const Skills = require("../Skills")
const Armor  = require ("../Armor");
const Items = require ("../../Items");
const Inventory = require ("../../Inventory");
const Range = require('../Range');
const Magic = require('../Magic');


class Minion {
	constructor(settings) {
		this.info = new Info(settings.info);
		this.action = new Action(settings.action);
		this.navigation = new Navigation(settings.navigation)
		this.body = new RigidBody(settings.body)
		this.skills = new Skills(settings.skills);
		// need to pass master items list through params to not take up memory / load time
		this.items = new Items();
		this.armor = new Armor(this.items);
		this.inventory = new Inventory(this.items);
		this.range = new Range();
		this.magic = new Magic(this.items);
	}
}