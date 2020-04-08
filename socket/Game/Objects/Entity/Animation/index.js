const {Timer} = require('../../../Helpers/functions')
const {animationSettings} = require('../../../../GlobalSettings')

class Animation {
	constructor(info) {
		this.img = info.img || false;
		this.hair = info.hair || false;
		this.shirt = info.shirt || false;
		this.pants = info.pants || false;
		this.boots = info.boots || false;
		this.cape = info.cape || false;
		this.tail = info.tail || false;
		this.wings = info.wings || false;
		
		let spriteSheetEnd = {
			hurt: 5,
			idle: 0,
			magic: 6,
			shoot: 12,
			swing: 5,
			thrust: 7,
			walk: 7,
			eat : 3,
			spell : 12,
		}

		if (info.spriteSheetEnd) {
			spriteSheetEnd = info.spriteSheetEnd;
		}

		this.indices = {
			hurt: this.timer(spriteSheetEnd.hurt,animationSettings.timer.hurt),
			idle: this.timer(spriteSheetEnd.idle,animationSettings.timer.idle),
			magic:this.timer(spriteSheetEnd.magic,animationSettings.timer.magic),
			shoot: this.timer(spriteSheetEnd.shoot,animationSettings.timer.shoot),
			swing: this.timer(spriteSheetEnd.swing,animationSettings.timer.swing),
			thrust: this.timer(spriteSheetEnd.thrust,animationSettings.timer.thrust),
			walk: this.timer(spriteSheetEnd.walk ,animationSettings.timer.walk),
			eat: this.timer(spriteSheetEnd.eat , animationSettings.timer.eat),
			spell : this.timer(spriteSheetEnd.spell, animationSettings.timer.spell),
		}
	}


	timer(end, expiration) {
		return ({
				index: 0,
				end : end,
				time : new Timer(expiration),
				timer : function() {
					if (this.time.check()){
						this.index++;
						if (this.index > this.end) {
							this.index = 0;
							return true;
						}
						return false;
					}
					return false
				},


			})
	}



}
module.exports = Animation