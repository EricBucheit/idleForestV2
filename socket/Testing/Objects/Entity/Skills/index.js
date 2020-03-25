const Skills = require('../../../../Game/Objects/Entity/Skills');

class SkillsTest {
	
	constructor(settings) {
		this.skills = new Skills(settings);
	}

	run() {
		this.doesAddLevel();
		this.doesLevelWithXp();
		this.addBoost();


	//visual Tests -- > Long Loops for test, Checks periodically in game
	//------------------------------------------------------------------
		// this.testDecayTimer();
		// this.testBoostDecayTimer();

	}

	doesAddLevel() {
		let level = this.skills.attack.value;

		this.skills.attack.levelUpBy(1);
		if(this.skills.attack.value > level) {
			console.log("PASS ADDED LEVEL");
		} else {
			console.log("FAIL LEVEL NOT ADDED");
		}
	}

	doesLevelWithXp(){
		let level = this.skills.attack.value;
		this.skills.attack.addXp(20000);
		if(this.skills.attack.value > level) {
			console.log("LEVEL :" + this.skills.attack.value)
			console.log("PASS ADDED LEVEL");
		} else {
			console.log("FAIL LEVEL NOT ADDED");
		}
	}

	addBoost() {
		this.skills.attack.boost = 10;
		console.log("BOOST:" + this.skills.attack.boost)
	}

	testTimer() {
		
	}

	testDecayTimer() {
		for (var x = 0; x < 100000; x++) {
			this.skills.attack.decay();
			console.log(this.skills.attack.current);
		}

	}

	testBoostDecayTimer() {
		for (var x = 0; x < 500000; x++) {
			this.skills.attack.boostDecay();
			console.log(this.skills.attack.boost);
		}

	}
}

module.exports = SkillsTest