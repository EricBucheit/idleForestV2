const {RigidBody} = require("../../../Helpers")

class RightClickHandler {
	constructor() {
		this.dblClickMenu = {
			menu : false,
			index : false, 
			initialSet : false,
			justClosed : false,
			clear : function() {
				this.menu = false
				this.index = false
				this.initialSet = false;
				this.justClosed = true
				this.buttons.clear();
			},

			set : function(menu, index, x, y) {
				this.menu = menu;
				this.index = index;
				this.initialSet = true;
				this.justClosed = false;
				this.buttons.set(x, y);
			},

			buttons : {
				background : false,
				ten : false,
				fifty: false,
				all : false,

				clear : function() {
					this.background = false;
					this.ten = false;
					this.fifty = false;
					this.all = false;
				},

				set : function(x, y) {
					this.background = {
						body : new RigidBody({x : x, y: y, width: 50, height: 66})
					}
					this.ten = {
						body : new RigidBody({x : x - 25, y: y - 15, width: 50, height: 25})
					}
					this.fifty = {
						body : new RigidBody({x : x - 25, y: y + 10, width: 50, height: 25})
					}
					this.all = {
						body : new RigidBody({x : x - 25, y: y + 35, width: 50, height: 25})
					}
				}
			},

			package : function() {
				
				if (this.menu) {
					return ({
						background: this.buttons.background.body,
						ten: this.buttons.ten.body,
						fifty : this.buttons.fifty.body,
						all: this.buttons.all.body,
						menu: this.menu,
					})
				}
				return false
			}
		}
	}

	click(socket, gameState, mouse) {
		this.inventoryClick(socket, gameState, mouse);
		this.bankClick(socket, gameState, mouse);
	}

	inventoryClick(socket, gameState, mouse) {
		if (!gameState.players[socket.id]) return false
		if (gameState.players[socket.id].player.info.inventoryPage !== "inventory") return false
		if (gameState.players[socket.id].player.info.menu.current !== "bank") return false
		let player = gameState.players[socket.id].player
		let inventory = player.inventory;
		let click = inventory.grid.click(mouse);

		if (click.click) {
			if (inventory.item(click.index).id === -1) {
				return false
			}
			this.dblClickMenu.set("inventory", click.index, mouse.x, mouse.y);
			return true
		}
		
	}

	bankClick(socket, gameState, mouse) {
		if (!gameState.players[socket.id]) return false
		if (gameState.players[socket.id].player.info.menu.current !== "bank") return false
		
		let player = gameState.players[socket.id].player
		let bank = player.home.bank
		let click = bank.inventory.grid.click(mouse)

		if (click.click) {
			if (bank.inventory.item(click.index).id === -1) {
				return false
			}
			this.dblClickMenu.set("bank", click.index + bank.page, mouse.x, mouse.y);
		}
	}

	log() {
		console.log("RightClickHandler")
	}



}

module.exports = RightClickHandler