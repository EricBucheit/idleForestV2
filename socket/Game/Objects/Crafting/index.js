const {Timer} = require ("../../Helpers")
const Inventory = require('../Inventory')
const Grid = require('../../Helpers/Grid')

class Crafting {
	constructor(items) {
		this.finished = new Inventory(items, {max: 48, stack: false});
		this.queue = [];
		this.grid = new Grid({
	                      x: 70,
	                      y: 200,
	                      width : 12,
	                      height : 4,
	                      cellWidth : 20,
	                      cellHeight: 20,
	                      labelOffsetX : 5,
	                      labelOffsetY : 5,
	                      labelSize : 10,
	                    })
	}

	logFinished() {
		for (let item in this.finished.spaces) {
			if(this.finished.spaces[item].id !== -1 ) {
				console.log(Math.ceil(this.finished.spaces[item].timer.getTimeLeft() / 1000));

			}
		}
	}

	packageQueue() {

		let pack = [];
        for (let item in this.finished.spaces) {
              if (this.finished.spaces[item].id !== -1) {
              	let timeLeft = Math.ceil(this.finished.spaces[item].timer.getTimeLeft() / 1000);
              	if (timeLeft <= 0) timeLeft = "";
                pack.push({
                    id : this.finished.spaces[item].id,
                    img: this.finished.spaces[item].img,
                    category: this.finished.spaces[item].category,
                    quantity: timeLeft,
                    x: this.finished.spaces[item].body.pos.x,
                    y: this.finished.spaces[item].body.pos.y,
                    name: this.finished.spaces[item].name,
                    
                })
              } else {
                pack.push({
                    id : this.finished.spaces[item].id,
                })
              }
        }
        return pack;
	}

	findItem(inventory, item, quantity) {
		let search = inventory.find(item);

		if (!search.found) {
			return false;
		}
		return (inventory.checkQuantity(search.index) >= quantity)
	}

	checkCraftPrices(inventory, itemToCraft) {
		for(let index in itemToCraft.recipe) {
			let item = itemToCraft.recipe[index].item;
			let quantity = itemToCraft.recipe[index].quantity;
			if (!this.findItem(inventory, item, quantity)) {
				return false;
			}
		}
		return (true)
	}

	deductFromInventory(inventory, itemToCraft) {
		for(let index in itemToCraft.recipe) {
			let item = itemToCraft.recipe[index].item;
			let quantity = itemToCraft.recipe[index].quantity;
			let search = inventory.find(item);
			inventory.delete(search.index, quantity);
		}
		return (true)
	}

	begin(inventory, itemToCraft) {
		if (!this.checkCraftPrices(inventory, itemToCraft)) return false
		if (!this.finished.hasSpace().found) return false
		this.deductFromInventory(inventory,itemToCraft)
		let item = itemToCraft.copy();
		item.timer = new Timer(item.craftTime);
		this.finished.add(item, 1)
	}

	checkTime() {
		for (let index in this.finished.spaces) {
			if(this.finished.spaces[index].id !== -1 && this.finished.spaces[index].timer.isDone()) {

			} else {
				if (this.finished.spaces[index].id !== -1) {
					// this.logFinished()

				}
			}
		}

	}

	collect(inventory, index) {
		if (this.finished.spaces[index].id !== -1 && this.finished.spaces[index].timer.isDone()) {
			// if (inventory.hasSpace().found) {
			// 	inventory.add(this.finished.transfer(index, 1))
			// }
			this.finished.transferItem(inventory, index, 1);

		}

	}
}

module.exports = Crafting