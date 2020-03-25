const Action = require('../../../../Game/Objects/Entity/Action');

class ActionTest {
	constructor(info) {
		this.action = new Action(info);
	}

	run() {
		this.actionToggle();
		this.actionIsOff();
		this.actionIsOn();
	}

	actionToggle() {
		let prevState = this.action.walk.state
		this.action.walk.stop();
		if (prevState === this.action.walk.state) {
			console.log("FAIL NO TOGGLE");
		} else {
			console.log("PASS TOGGLED");
		}
	}

	actionIsOff() {
		this.action.walk.stop();
		if (this.action.walk.state === false) {
			console.log("TOGGLE OFF PASS");
		} else {
			console.log("FAIL TOGGLE OFF");
		}
	}

	actionIsOn() {
		this.action.walk.start();
		if (this.action.walk.state === true) {
			console.log("TOGGLE On PASS");
		} else {
			console.log("FAIL TOGGLE ON");
		}
	}


}

module.exports = {ActionTest};