const Info = require('../../../../Game/Objects/Entity/Info');

class InfoTest {
	
	constructor(info) {
		this.info = new Info(info)
	}

	run() {
		this.nameExists();
		this.descriptionExists();
		this.typeExists();
		this.currLevelExists();
		this.highestLevelExists();
		this.deathsExists();
	}

	nameExists() {
		if (this.info.name) {
			console.log(this.info.name)
		} else {
			console.log("FAIL NO NAME EXISTS")
		}
	}

	descriptionExists() {
		if (this.info.description) {
			console.log(this.info.description)
		} else {
			console.log("FAIL NO description EXISTS")
		}
	}

	typeExists() {
		if (this.info.type) {
			console.log(this.info.type)
		} else {
			console.log("FAIL NO Type EXISTS")
		}
	}


	currLevelExists() {
		if (this.info.currLevel) {
			console.log(this.info.currLevel)
		} else {
			console.log("FAIL NO currLevel EXISTS")
		}
	}

	highestLevelExists() {
		if (this.info.highestLevel) {
			console.log(this.info.highestLevel)
		} else {
			console.log("FAIL NO highestLevel EXISTS")
		}
	}
	deathsExists() {
		if (this.info.deaths) {
			console.log(this.info.deaths)
		} else {
			console.log("FAIL NO deaths EXISTS")
		}
	}
}

module.exports = InfoTest;