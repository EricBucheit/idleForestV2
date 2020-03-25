// const Info = require("./Info")
const {Action, ActionTest} = require("./Action")
const InfoTest = require("./Info");
const SkillsTest = require("./Skills");

// const Navigation = require("./Action")
// const {RigidBody} = require('../../../../Game/Helpers/bodies');
// const Skills = require("./Skills")
const EntityStructure = require('./Template/structure');

class EntityTest {
	constructor(settings) {

	}
}

module.exports = 	{
						ActionTest: new ActionTest(EntityStructure.action),
						InfoTest : new InfoTest(EntityStructure.info),
						SkillsTest : new SkillsTest(EntityStructure.skills),
					}