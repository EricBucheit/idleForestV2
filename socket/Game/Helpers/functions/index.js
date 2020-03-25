
function RandomInt(min, max) {
   	 	return Math.floor(Math.random() * (max - min + 1) + min);
}

function Scale(value, x1, y1, x2, y2) {
  	 return ((value - x1) * (y2 - x2) / (y1 - x1) + x2)
}

function Timer (time) {
	let date = new Date();
	let expiration = date.getTime() + time;
	return ({
			date : date,
			time : time,
			expiration: expiration,
			
			reset: function() {
				let date = new Date();
				let newTime = date.getTime()
				this.expiration = newTime + this.time;
			},

			isDone() {
				let date = new Date();
				let newTime = date.getTime()
				if (newTime > this.expiration) {
					return (true)
				}
				return false;
			},

			check : function() {
				if (this.isDone()) {
					this.reset();
					return (true)
				}
				return false
			},

			getTimeLeft() {
				let date = new Date();
				let newTime = date.getTime()
				return (expiration - newTime);
			},

			setExpiration : function(newExpiration) {
				this.time = newExpiration;
				this.reset()
			}
		})
}

Log = {

	colors : {
		none: "\x1b[0m",
		red: "\x1b[31m",
		blue: "\x1b[34m",
		yellow : "\x1b[33m",

		success : function() {
			console.log(this.blue);
		},

		warn : function() {
			console.log(this.yellow);
		},

		error : function() {
			console.log(this.red);
		},

		reset : function() {
			console.log(this.none);
		}

	},

	message(obj, logObj=false) {
		if (obj.code === 1) {
			console.log(this.colors.blue, obj.message)
			this.colors.reset();
		} else if (obj.code === -1) {
			console.log(this.colors.red, obj.message)
			this.colors.reset();
		} else if(obj.code === 2) {
			console.log(this.colors.yellow, obj.message)
			this.colors.reset();
		}

		if (logObj === true) {
			console.log(obj);
		}

	},

}

module.exports = {
	RandomInt,
	Scale,
	Timer,
	Log,
}