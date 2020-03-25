const {Timer} = require('../../../Helpers/functions')


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
			hurt: this.timer(spriteSheetEnd.hurt,200),
			idle: this.timer(spriteSheetEnd.idle,200),
			magic:this.timer(spriteSheetEnd.magic,200),
			shoot: this.timer(spriteSheetEnd.shoot,100),
			swing: this.timer(spriteSheetEnd.swing,50),
			thrust: this.timer(spriteSheetEnd.thrust,300),
			walk: this.timer(spriteSheetEnd.walk ,45),
			eat: this.timer(spriteSheetEnd.eat , 200),
			spell : this.timer(spriteSheetEnd.spell, 85),
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