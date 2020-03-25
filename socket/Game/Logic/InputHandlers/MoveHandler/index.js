const MouseCollision = require('../MouseCollision')

const {RigidBody, Timer} = require("../../../Helpers")
let {saveLevelItems} = require('../../../../DataBase/Controllers/users')

class MoveHandler {
	
	constructor() {
		this.mouseCollision = new MouseCollision();

		this.infoBox = {
			name : false,
			description : false,
			price : false,
			recipe : false,
			type: false,
			background : false,
			timer : new Timer(800),

			set : function(name, description, type, x, y) {
				this.timer.reset()
				let length = name.length;
				let height = 1;

				if (description.length > length) length = description.length
				if (type.length > length) length = type.length
				if (name.length) height++;
				if (description.length) height++;
				if (type.length) height++;
				if (this.recipe) height += 2;
				if (this.price) height ++;

				this.name = name;
				this.description = description;
				this.type = type;
				this.background = new RigidBody({x: x, y: y + 20, width: length * 9, height: height * 20})
			},

			clear : function () {
				this.timer.reset()
				this.background = false;
				this.name = false;
				this.description = false;
				this.type = false;
				this.price = false;
				this.recipe = false;
			},

			package : function() {
				if (this.name && this.timer.isDone()) {
					return ({
						name: this.name,
						description : this.description,
						type : this.type,
						background : this.background,
						price : this.price,
						recipe : this.recipe,
					})
				}
				return false
			}
		}

	}

	move(socket, gameState, mousePos) {
		this.craftCollect(socket, gameState, mousePos);
		this.farmCollect(socket, gameState, mousePos);
		this.levelCollect(socket, gameState, mousePos);
		this.infoCheck(socket, gameState, mousePos)
	}

	infoCheck(socket, gameState, mouse) {
		if (!gameState.players[socket.id]) return false
		
		this.infoBox.clear();

		let player = gameState.players[socket.id].player
		let inventory = player.inventory
		let bank = player.home.bank
		let menu = gameState.players[socket.id].player.info.menu;
		let inventoryPage = player.info.inventoryPage;
		
		if (inventoryPage === 'inventory') {
			let click = inventory.grid.click(mouse);
			if (click.click) {
				if (inventory.item(click.index).id === -1) {
					return false
				}
				let item = inventory.item(click.index);
				this.infoBox.set(item.name, "", item.category, mouse.x, mouse.y);
				return true
			}
		}

		if (menu.current === 'bank') {
			let click = bank.inventory.grid.click(mouse);
			if (click.click) {
				if (bank.inventory.item(click.index + bank.page).id === -1) {
					return false
				}
				let item = bank.inventory.item(click.index + bank.page);
				this.infoBox.set(item.name, "", item.category, mouse.x, mouse.y);
				return true
			}
		}

		if(player.info.currLevel === 0) {
			if (this.mouseCollision.click(mouse, player.home.farm.upgradeButton)) {
				this.infoBox.set("Upgrade", player.home.farm.upgradePrice(), "", mouse.x, mouse.y);
			}
		}

		if ((menu.current === "none" || menu.current === "waterSource") && player.info.currLevel === 1) {
			
			
			if (this.mouseCollision.click(mouse, player)) {
				this.infoBox.set(player.info.name, player.info.description, player.info.type, mouse.x, mouse.y);
				return true
			}
			
			if (this.mouseCollision.click(mouse, player.home.bank)) {
				this.infoBox.set("Bank", player.home.bank.info, "", mouse.x + 75, mouse.y);
				return true
			}
			if (this.mouseCollision.click(mouse, player.home.menu.anvil)) {
				this.infoBox.set("Anvil", player.home.menu.anvil.info, "", mouse.x + 75, mouse.y);
				return true
			}
			if (this.mouseCollision.click(mouse, player.home.menu.stove)) {
				this.infoBox.set("Stove", player.home.menu.stove.info, "", mouse.x + 75, mouse.y);
				return true
			}

			if (this.mouseCollision.click(mouse, player.home.waterSource.upgradeButton)) {
				this.infoBox.set("Upgrade", player.home.waterSource.upgradePrice(), "", mouse.x, mouse.y);
				return true
			}

			if (this.mouseCollision.click(mouse, player.home.waterSource)) {
				this.infoBox.set("Water", "Click to Gather", "", mouse.x, mouse.y);
				return true
			}

			if (this.mouseCollision.click(mouse, gameState.players[socket.id].npcs.merchant)) {
				this.infoBox.set("Merchant", "Click to Buy", "", mouse.x, mouse.y);
				return true
			}

		}



		if (menu.current === "cook" || menu.current === "craft") {
			let items = player.home.menu.packageItems(gameState.items, menu.current, menu.category, menu.subcategory)
			for (let info in items) {
				if (this.mouseCollision.click(mouse, items[info].button)) {
					let itemMenu = gameState.items[menu.current][menu.category];
	   				let item = gameState.items.getItem(itemMenu.category, itemMenu.subcategories[menu.subcategory], items[info].key);
					this.infoBox.recipe = item.recipe
					this.infoBox.set(item.name, "", item.category, mouse.x, mouse.y);
				}
			}
		}

		if (menu.current === "buy") {
			let items = player.home.menu.packageItems(gameState.items, menu.current, menu.category, menu.subcategory)
			for (let info in items) {
				if (this.mouseCollision.click(mouse, items[info].button)) {
					let itemMenu = gameState.items[menu.current][menu.category];
	   				let item = gameState.items.getItem(itemMenu.category, itemMenu.subcategories[menu.subcategory], items[info].key);
					this.infoBox.price = '$' + item.price
					this.infoBox.set(item.name, "", item.category, mouse.x, mouse.y);
				}
			}
		}


	}

	craftCollect(socket, gameState, mouse) {
		if (!gameState.players[socket.id]) return false
		let menu = gameState.players[socket.id].player.info.menu.current
		
		if (menu === "craft" || menu === 'cook') {
			let click = gameState.players[socket.id].crafting.grid.click(mouse);
			if (click.click) {
				gameState.players[socket.id].crafting.collect(gameState.players[socket.id].player.inventory, click.index)
			}
		}
	}
	
	farmCollect(socket, gameState, mouse) {
		if (!gameState.players[socket.id]) return false
		if (gameState.players[socket.id].player.info.currLevel !== 0) return (false);

		let farm = gameState.players[socket.id].player.home.farm;
		for(let plot in farm.plots) {
			if (this.mouseCollision.click(mouse, farm.plots[plot])) {
				farm.harvest(plot, gameState.players[socket.id].player.inventory)
			}
		}
	}

	levelCollect(socket, gameState, mouse) {
		if (!gameState.players[socket.id]) return false
		let level = gameState.players[socket.id].level;
		let player = gameState.players[socket.id].player;
		if (!level.newInventory) return false


		for (let item in level.newInventory.spaces) {
			if (this.mouseCollision.click(mouse, level.newInventory.spaces[item])) {
				level.newInventory.transferItem(player.inventory, item, level.newInventory.spaces[item].quantity)
			}
		}
	}

	log() {
		// console.log("MoveHandler")
	}
}

module.exports = MoveHandler