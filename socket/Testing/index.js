// const {HelperTest} = require('./Helpers');

const {
	ClickHandlerTest,
	KeyPressHandlerTest,
	RightClickHandlerTest,
	LoadHandlerTest,
	SaveHandlerTest,
} = require('./Logic/InputHandlers');

const {
	ActionTest,
	InfoTest,
	SkillsTest,
} = require('./Objects/Entity');


const ItemTest = require('./Objects/Items');
const InventoryTest = require('./Objects/Inventory');
const BankTest = require('./Objects/Entity/Home/Bank');
const FarmTest = require('./Objects/Entity/Home/Farm');
const WaterSourceTest = require('./Objects/Entity/Home/WaterSource');
const ProjectileTest = require('./Objects/Entity/Projectile');
const RangeTest = require('./Objects/Entity/Range');
const MagicTest = require('./Objects/Entity/Magic');
const LevelTest = require('./Objects/Level');
const CraftTest = require('./Objects/Crafting');

class Test {
	constructor() {

		// let helperBodyTestsFunc = this.HelperFunctionBodyTests;
		let singleBodyTestFunc = this.singleEntityTests;
		let itemTesting = this.itemTests;
		let inventoryTesting = this.InventoryTests;
		let bankTesting = this.bankTests;
		let farmTesting = this.farmTests;
		let waterSourceTesting = this.waterSourceTests;
		let projectileTesting = this.projectileTests;
		let rangeTesting = this.rangeTests;
		let magicTesting = this.magicTests;
		let levelTesting = this.levelTests;
		let craftTesting = this.craftTests;

		this.tests = {
			helperBodyTests : {
				run : false,
				funct : helperBodyTestsFunc,
			},
			EntityTests : {
				run : false,
				funct : singleBodyTestFunc,
			},
			ItemTests : {
				run : false,
				funct : itemTesting,
			},
			InventoryTests : {
				run : false,
				funct : inventoryTesting,
			},
			BankTests : {
				run : false,
				funct : bankTesting,
			},
			FarmTest : {
				run : false,
				funct : farmTesting,
			},
			WaterSourceTests : {
				run : false,
				funct: waterSourceTesting
			},

			projectileTests : {
				run : false,
				funct: projectileTesting
			},

			rangeTests : {
				run : false,
				funct: rangeTesting
			},

			magicTests : {
				run : false,
				funct: magicTesting
			},
			levelTests : {
				run : false,
				funct: levelTesting
			},
			craftTests : {
				run : true,
				funct: craftTesting
			}
		}
	}

	run(run) {
		if (!run) {
			return false
		}
		// this.runTest(this.tests.helperBodyTests);
		// this.runTest(this.tests.EntityTests);
		// this.runTest(this.tests.ItemTests);
		// this.runTest(this.tests.InventoryTests);
		// this.runTest(this.tests.BankTests);
		// this.runTest(this.tests.FarmTest);
		// this.runTest(this.tests.WaterSourceTests);
		// this.runTest(this.tests.projectileTests);
		// this.runTest(this.tests.rangeTests);
		// this.runTest(this.tests.magicTests);
		// this.runTest(this.tests.levelTests);
		this.runTest(this.tests.craftTests);

	}

	runTest(test) {
		if (test.run === true) {
			test.funct();
		}
	}

	itemTests() {
		ItemTest.run();
	}

	craftTests() {
		CraftTest.run();
	}


	bankTests() {
		BankTest.run()
	}

	farmTests() {
		FarmTest.run()
	}

	waterSourceTests() {
		WaterSourceTest.run();
	}

	projectileTests() {
		ProjectileTest.run();
	}

	rangeTests() {
		RangeTest.run();
	}

	magicTests() {
		MagicTest.run();
	}

	InventoryTests() {
		InventoryTest.run();
	}

	singleEntityTests() {
		ActionTest.run();
		InfoTest.run();
		SkillsTest.run();
	}

	levelTests() {
		LevelTest.run();
	}

	HelperFunctionBodyTests() {

		// console.log("Testing Vector2d");
		// console.log("<--------------->")
		// HelperTest.Vector2dTest.run();
		// console.log("<--------------->")

		// console.log("testing Rigid Body")
		// console.log("<--------------->")
		// HelperTest.RigidBodyTest.run();
		// console.log("<--------------->")
		
		// console.log("Testing collision");
		// console.log("<--------------->")
		// HelperTest.CollisionTest.run();
		// console.log("<--------------->")

	}

}
let test = new Test();
test.run(runTest = true);
