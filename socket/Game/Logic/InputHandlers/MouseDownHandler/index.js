
class MouseDownHandler {
	constructor() {
		this.sortItems = {
			menu : false,
			index : false,
			swap : false,

			set : function(menu, index) {
				this.menu = menu;
				this.index = index;
			}, 
			clear : function() {
				this.menu = false;
				this.index = false;
				this.swap = false;
			},
			package : function() {
				if (this.menu) {
					return({menu: this.menu, index : this.index})
				}
				return false;
			}
		}
	}

	log() {
		console.log("MouseDownHandler");
	}

	click(socket, gameState, mouse) {
		this.inventoryClick(socket, gameState, mouse)
		this.bankClick(socket, gameState, mouse)
	}

	inventoryClick(socket, gameState, mouse) {
		if (!gameState.players[socket.id]) return false
		if (gameState.players[socket.id].player.info.inventoryPage !== "inventory") return false
		if (gameState.players[socket.id].player.action.current === "hurt") return false
		if (gameState.players[socket.id].RightClickHandler.dblClickMenu.menu) return false

		let player = gameState.players[socket.id].player
		let inventory = player.inventory;
		let click = inventory.grid.click(mouse);
		
		if (click.click) {
			this.sortItems.set("inventory", click.index);
		}
	}

	bankClick(socket, gameState, mouse) {
		if (!gameState.players[socket.id]) return false
		if (gameState.players[socket.id].player.info.menu.current !== "bank") return false
		if (gameState.players[socket.id].RightClickHandler.dblClickMenu.menu) return false
		let bank = gameState.players[socket.id].player.home.bank;
		let click = bank.inventory.grid.click(mouse)

		if (click.click) {
			this.sortItems.set("bank", click.index + bank.page);
		}
	}
}

module.exports = MouseDownHandler