const {Timer} = require('../../../Helpers/functions')
const {skillSettings} = require("../../../../GlobalSettings");
class Skills {
	constructor(settings) {
		let skill_id = 0;
		this.health = this.createSkill(settings.health, "Health", skill_id++);
		this.attack = this.createSkill(settings.attack, "Attack", skill_id++);
		this.defense = this.createSkill(settings.defense,"Defense", skill_id++)
		this.attackSpeed = this.createSkill(settings.attackSpeed, "Attack Speed", skill_id++);
		this.range = this.createSkill(settings.range, "Range", skill_id++);
		this.magic = this.createSkill(settings.magic, "Magic", skill_id++);
		this.thirst = this.createSkill(settings.thirst, "Thirst", skill_id++);
		this.hunger = this.createSkill(settings.hunger, "Hunger", skill_id++);
		this.mining = this.createSkill(settings.mining, "Mining", skill_id++);
		this.woodcutting = this.createSkill(settings.woodcutting, "Woodcutting", skill_id++);
		this.hunting = this.createSkill(settings.hunting, "Hunting", skill_id++);
	}

	createSkill(settings, name, id) {
		let delay = settings.delay || skillSettings.defaultDelay;
		let speed = settings.speed || skillSettings.defaultSpeed;
		let skill = {
	 		skill_id : id,
			name: name,
			value: settings.value,
			current : settings.value,
			boost : 0,
			xp : 0,
			delayTime : delay,
			speed : speed,
			threshold : Math.round(skillSettings.threshold.base * (Math.pow(settings.value, skillSettings.threshold.exponent))),
			boostDecaytimer: Timer(skillSettings.boostDecaytimer),
			decayTimer : Timer(skillSettings.decayTimer),
			timer : Timer(speed),
			delayTimer: Timer(delay),
			
			packageDB() {
				return ({
					skill_id: this.skill_id,
					name: this.name,
					value: this.value,
					current: Math.ceil(this.current),
					boost: this.boost,
					xp: this.xp,
					delayTime: this.delayTime,
					speed: this.speed,
					threshold : this.threshold,
				})
			},

			loadDB(skill) {
				this.value = skill.value;
				this.current = skill.current;
				this.boost = skill.boost;
				this.xp = skill.xp;
				this.delayTime = skill.delayTime;
				this.speed = skill.speed;
				this.threshold = skill.threshold;
			},

			attackTimer() {
				if (this.timer.check()) {
					return (true);
				}
			},

			delay() {
				if (this.delayTimer.isDone()) {
					return (true);
				}
			},

			decay() {
				if (this.decayTimer.check()) {
					if(this.isZero(this.current)) {
						return;
					} else {
						this.current--;
					}
				}
			},

			boostDecay() {
				if (this.boostDecaytimer.check()) {
					if(this.isZero(this.boost)) {
						return;
					} else {
						this.boost--;
					}
				}
			},

			addXp(xp) {
				this.xp += xp;
				let leveledUp = false
				let threshold = Math.round(skillSettings.threshold.base * (Math.pow(this.value, skillSettings.threshold.exponent)))
				while (this.xp > threshold) {
					leveledUp = true
					this.levelUpBy(1);
					this.equalize();
					threshold = Math.round(skillSettings.threshold.base * (Math.pow(this.value, skillSettings.threshold.exponent)))

				}
				this.threshold = threshold
				return leveledUp
			},

			setupLvl(mapLvl, exponent, base) {
				let lvl = Math.round(base * (Math.pow(mapLvl, exponent)))
				this.value = lvl + this.value
				this.equalize();
			},

			take: function(damage) {
				this.current = this.current - damage;
				
				if (this.isZero(this.current)) {
					this.current = 0;
				}
			},

			giveLimit(boost) {
				this.current = this.current + boost;
				if (this.current > this.value) {
					this.equalize();
				}
			},

			levelUpBy: function (level) {
				this.value += level
			},

			equalize() {
				this.current = this.value;
			},

			currentIsZero() {
				if (this.current <= 0) {
					return (true);
				}
				return (false);
			},

			isZero: function (value) {
				if (value <= 0) {
					return (true);
				}
				return (false);
			},

		}
		return (skill)
	}

	test() {
		this.log();
	}


	log() {
		console.log('|----------|');
		console.log(	this 	  );
		console.log('|----------|');
	}

}

module.exports = Skills