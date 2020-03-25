class Navigation {
	constructor(settings) {
		this.location = settings.location || "home";
		this.destination = settings.destination || "home";
		this.direction = settings.direction || "down";
	}
}

module.exports = Navigation