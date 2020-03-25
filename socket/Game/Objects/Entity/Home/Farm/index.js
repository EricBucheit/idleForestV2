const {Timer, RigidBody, RandomInt} = require('../../../../Helpers')

class Farm {
	constructor(items, settings) {
		this.seeds = items.getSubcategory("Resources", "Seeds");
		this.waterItems = items.getSubcategory("Consumeable", "Water");
		this.level = settings.level || 0;
		this.prices = [1000, 10000, 100000, 1000000, 5000000, 20000000];
		this.waterTimer = new Timer(5000);
		this.rows = 3 + this.level;
		this.columns = 10;
		this.max = this.rows * this.columns;
		
		this.items = items;
		this.plots = [];
		this.water = settings.waterCount || 0;
		this.makePlots(items);


		this.upgradeButton = {body: new RigidBody({
				x: 280,
				y: 40,
				width: 50,
				height: 25
			})
		}


		// this.test()

	}

	upgradePrice() {
		return (`$${this.prices[this.level]}`)
	}

	test() {
		this.addWater(this.waterItems.god)
		this.addWater(this.waterItems.god)
		this.addWater(this.waterItems.god)
		this.addWater(this.waterItems.god)
		this.addWater(this.waterItems.god)
		this.addWater(this.waterItems.god)
		this.addWater(this.waterItems.god)
		this.addWater(this.waterItems.god)

		let arr = [
					"corn", 
					"carrot",
					"potatoe",
					"corn",
					"cucumber",
					"tomatoe",
					"artichoke",
				]

		for (let x = 0; x < 30; x++) {
			this.plant(this.seeds[arr[RandomInt(0,arr.length - 1)]])

		}
	}

	packageItems() {
		let seedPackage = [];
		for (let plot of this.plots) {
			seedPackage.push(plot.itemPackage())
		}
		return (seedPackage);
	}

	packageDB(user_id) {
		let seedPackage = [];
		for (let plot in this.plots) {
			let info = this.plots[plot].packageDB()
			info.slot_id = plot
			info.user_id = user_id;
			seedPackage.push(info)
		}
		return (seedPackage);
	}

	addWater(water) {
		let waterMatch = false;
		for (let item in this.waterItems) {
			if (water.id === this.waterItems[item].id) {
				waterMatch = true
				break
			}
		}

		if (waterMatch) {
			this.water += water.bonus;
			return ({message : "Water Added", code: 1})
		} else {
			return ({message : "Wrong Item For Water", code: -1})
		}
	}

	makePlots(items) {
		let x_start = 16;
		let y_start = 32 * 2.5;
		for(let row = 0; row < this.rows; row++) {
			for(let column = 0; column < this.columns; column++) {
				let pos = new RigidBody({
					x : column * 32 + x_start,
					y : row * 32 + y_start,
					width : 32,
					height : 32,
					velocityX : 0,
					velocityY : 0,
				})
				this.plots.push(this.plot(items, pos));
			}
		}
	}

	setPlotTimers(time, decayTime) {
		for (let x = 0; x < this.max; x++) {
			this.plots[x].timer.setExpiration(time);
			this.plots[x].decayTimer.setExpiration(decayTime);
		}
	}

	grow() {
		if (this.waterTimer.check()) {
			for (let x = 0; x < this.max; x++) {
				this.water = this.plots[x].grow(this.water);
			}
		}
	}

	harvest(index, inventory) {
		this.plots[index].harvest(inventory);
	}

	plant(seed) {
		for (let plot in this.plots) {
			if (this.plots[plot].seed === false) {
				return (this.plots[plot].plant(seed))
			}
		}
		return false;
	}

	loadSeed(seed, level) {
		for (let plot in this.plots) {
			if (this.plots[plot].seed === false) {
				let planted = this.plots[plot].plant(seed)
				this.plots[plot].level = level;
				return planted
			}
		}
		return false;
	}

	levelUp(inventory) {

		if (this.level < this.prices.length - 1 && inventory.gold > this.prices[this.level]) {
			let x_start = 16;
			let y_start = 32 * 2.5;
			inventory.gold = inventory.gold - this.prices[this.level];
			let oldRowCount = this.rows;
			this.rows++;
			for(let row = oldRowCount; row < this.rows; row++) {
				for(let column = 0; column < this.columns; column++) {
					let pos = new RigidBody({
						x : column * 32 + x_start,
						y : row * 32 + y_start,
						width : 32,
						height : 32,
						velocityX : 0,
						velocityY : 0,
					})
					this.plots.push(this.plot(this.items, pos));
				}
			}

			this.level++;
			this.max = this.rows * this.columns;
		}
	}

	plot(items, body) {
		let seeds = items.getSubcategory("Resources", "Seeds");
		return ({
			timer: new Timer(RandomInt(8000,15000)),
			decayTimer : new Timer(RandomInt(20000,30000)),
			decaying : false,
			waterDecayTimer : Timer(RandomInt(15000,25000)),
			level : 0,
			seed : false,
			seeds : seeds,
			body : body,

			itemPackage : function () {
				if (this.seed) {
					return ({
						name: this.seed.name,
						img: this.seed.img,
						category: this.seed.category,
						body : this.body,
						level: this.level,
					})
				}
				return false;
			},

			packageDB() {
				if (this.seed) {
					return ({
						item_id: this.seed.id,
						level : this.level,
						item_name: this.seed.item_name,
		                category_name: this.seed.category_name,
		                subCategory_name: this.seed.subCategory_name,
					})
				}
				else {
					return ({item_id : -1})
				}
			},


			reset : function() {
				this.timer.reset();
				this.decayTimer.reset();
				this.level = 0;
			},

			plant : function(seed) {
				if (this.seed !== false) {
					return false;
				}

				let seedMatch = false;
				for (let item in this.seeds) {
					if (seed.id === this.seeds[item].id) {
						seedMatch = true
						break
					}
				}
				this.reset();
				if (seedMatch) {
					this.seed = seed;
					
					return true
				} else {
					this.seed = false;

					return false
				}

			},

			harvest : function(inventory) {				
				if (this.seed === false) {
					return ;
				}

				if (this.level === 3) {
					let item = this.seed.use();
					inventory.add(item.item, item.item.quantity)
					this.seed = false;
				} else if (this.level === -1) {
					this.seed = false;
					this.level = 0;
					this.decaying = false;
				} else {
					return ;
				}
				
			},

			next : function() {
				if (this.timer.check()) {
					if (this.level < 3) {
						this.level++;
					}
				}
			},

			previous : function () {
				if (this.decaying === true && this.decayTimer.check()) {
					if (this.level > -1) {
						this.level--
					}
				}
			},

			isDecaying : function(water) {
				if (water > 0) {
					this.decaying = false;
				} else {
					if (this.decaying === false) {
						this.decayTimer.reset();
					}
					this.decaying = true;
				}
			},

			grow : function(water) {
				if (this.seed === false) {
					return water;
				}

				this.isDecaying(water);
				if (water > 0) {
					if (this.level < 3) {
						this.next();
						return (water - 1);
					}
					else if (this.waterDecayTimer.check()) {
						return (water - 1);
					}
					return (water)

				} else {
					this.previous();
					return (water);
				}
			}

		})
	}
}

module.exports = Farm