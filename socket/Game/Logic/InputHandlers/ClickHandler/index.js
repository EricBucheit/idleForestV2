const MouseCollision = require('../MouseCollision')
const {saveProgress} = require('../../../../DataBase/Controllers/users')
class ClickHandler {
	constructor() {
		this.mouseCollision = new MouseCollision();
	}

	log() {
		console.log("ClickHandler")
	}

	click(socket, gameState, mouse) {
		this.inventorySwitch(socket, gameState, mouse);
	    this.actionButtonSwitch(socket, gameState, mouse)
	    this.homeClicks(socket, gameState, mouse);
	    this.inventoryClick(socket, gameState, mouse);
	    this.bankClick(socket, gameState, mouse);
	    this.menuClick(socket, gameState, mouse);
	    this.farmClick(socket, gameState, mouse);
	    this.armorClick(socket,gameState, mouse);
	    this.magicClick(socket, gameState, mouse);
	}

	armorClick(socket, gameState, mouse) {
		if (!gameState.players[socket.id]) return false
		if (gameState.players[socket.id].player.info.inventoryPage !== "armor") return false
		if (gameState.players[socket.id].player.action.current === "hurt") return false
		let armor = gameState.players[socket.id].player.armor
		let mouseCollision = this.mouseCollision
		Object.keys(armor.spaces).forEach(function (item) {
			if (mouseCollision.click(mouse, armor.spaces[item])) {
				armor.remove(item, gameState.players[socket.id].player.inventory);
			}
		})
	}

	farmClick(socket, gameState, mouse) {
		if (!gameState.players[socket.id]) return false
		if (gameState.players[socket.id].player.info.currLevel !== 0) return (false);

		let farm = gameState.players[socket.id].player.home.farm;
		if (this.mouseCollision.click(mouse, farm.upgradeButton)) {
			farm.levelUp(gameState.players[socket.id].player.inventory)
		}
	}

	magicClick(socket, gameState, mouse) {
		if (!gameState.players[socket.id]) return false
		if (gameState.players[socket.id].player.info.inventoryPage !== "magic") return false
		
		let player = gameState.players[socket.id].player;

		for (let spell in player.magic.inventoryUI) {
			if(this.mouseCollision.click(mouse, player.magic.inventoryUI[spell])) {
				player.magic.setupCast(spell, player);
			}
		}

	}


	inventoryClick(socket, gameState, mouse) {
		if (!gameState.players[socket.id]) return false
		if (gameState.players[socket.id].player.info.inventoryPage !== "inventory") return false
		if (gameState.players[socket.id].player.action.current === "hurt") return false
		let sortItems = gameState.players[socket.id].MouseDownHandler.sortItems;
		let dblClickMenu = gameState.players[socket.id].RightClickHandler.dblClickMenu
		let player = gameState.players[socket.id].player
		let bank = player.home.bank;

		let menu = player.info.menu.current;
		let inventory = player.inventory;
		let currLevel = player.info.currLevel;
		let click = inventory.grid.click(mouse);

		if (dblClickMenu.menu === "inventory") {
			sortItems.clear()

			if (dblClickMenu.initialSet) {
				dblClickMenu.initialSet = false;
				return true
			}

			if(this.mouseCollision.click(mouse, dblClickMenu.buttons.ten)) {
				let quantity = 10;
				inventory.transferItem(bank.inventory, dblClickMenu.index, quantity);
				if (inventory.item(dblClickMenu.index).id === -1) {
					dblClickMenu.clear()
				}
				return true
			}
			if(this.mouseCollision.click(mouse, dblClickMenu.buttons.fifty)) {
				let quantity = 50;
				inventory.transferItem(bank.inventory, dblClickMenu.index, quantity);
				if (inventory.item(dblClickMenu.index).id === -1) {
					dblClickMenu.clear()
				}
				return true
			}
			if(this.mouseCollision.click(mouse, dblClickMenu.buttons.all)) {
				let bank = gameState.players[socket.id].player.home.bank;
				let quantity = inventory.checkQuantity(dblClickMenu.index)
				inventory.transferItem(bank.inventory, dblClickMenu.index, quantity);
				dblClickMenu.clear()
				return true
			}
			dblClickMenu.clear();	

		}
		if(dblClickMenu.menu === "bank") return true
		if(dblClickMenu.justClosed === true) {
			dblClickMenu.justClosed = false;
			return true
		}

		if (sortItems.menu === "inventory") {
			if (click.click) {
				if (click.index !== sortItems.index)
				{
					inventory.swap(click.index, sortItems.index)
					sortItems.clear()
					return (true)
				}
			}
			sortItems.clear()
		}

		if (click.click) {
			if (currLevel === 0) {
				if (inventory.farm(player, click.index)) {
					return true
				}
			}

			if (menu === "bank" && currLevel === 1) {
				inventory.transferItem(bank.inventory, click.index, 1);
			}
			if (menu === "buy" && currLevel === 1) {
				inventory.sell(click.index, 1);
			}
			if (menu === "none" || menu === "waterSource" || currLevel != 1) {
				inventory.use(player, click.index);
			}
		}
	}

	

	bankClick(socket, gameState, mouse) {
		if (!gameState.players[socket.id]) return false
		if (gameState.players[socket.id].player.info.menu.current !== "bank") return false
		let sortItems = gameState.players[socket.id].MouseDownHandler.sortItems;
		
		let dblClickMenu = gameState.players[socket.id].RightClickHandler.dblClickMenu
		let bank = gameState.players[socket.id].player.home.bank;
		let inventory = gameState.players[socket.id].player.inventory;
		let click = bank.inventory.grid.click(mouse)
		
		if (dblClickMenu.menu === "bank") {
			sortItems.clear()
			if (dblClickMenu.initialSet) {
				dblClickMenu.initialSet = false;
				return true
			}
			if(this.mouseCollision.click(mouse, dblClickMenu.buttons.ten)) {
				let quantity = 10;
				bank.inventory.transferItem(inventory, dblClickMenu.index, quantity);
				if (bank.inventory.item(dblClickMenu.index).id === -1) {
					dblClickMenu.clear()
				}
				return true
			}
			if(this.mouseCollision.click(mouse, dblClickMenu.buttons.fifty)) {
				let quantity = 50;
				bank.inventory.transferItem(inventory, dblClickMenu.index, quantity);
				if (bank.inventory.item(dblClickMenu.index).id === -1) {
					dblClickMenu.clear()
				}
				return true
			}
			if(this.mouseCollision.click(mouse, dblClickMenu.buttons.all)) {
				let bank = gameState.players[socket.id].player.home.bank;
				let quantity = bank.inventory.checkQuantity(dblClickMenu.index)
				bank.inventory.transferItem(inventory, dblClickMenu.index, quantity);
				dblClickMenu.clear();
				return true
			}
			dblClickMenu.clear();
		}
		if(dblClickMenu.menu === "inventory") return true
		if(dblClickMenu.justClosed === true) {
			dblClickMenu.justClosed = false;
			return true
		}

		if (sortItems.menu === 'bank') {
			if (click.click) {
				if (click.index + bank.page !== sortItems.index)
				{
					bank.inventory.swap(click.index + bank.page, sortItems.index)
					sortItems.clear()
					return true
				}
			}
			sortItems.clear()
		}

		if (click.click) {
			bank.inventory.transferItem(inventory, click.index + bank.page, 1);
		}

		if (this.mouseCollision.click(mouse, bank.pageUpButton)) {
			bank.prevPage();
		}
		if (this.mouseCollision.click(mouse, bank.pageDownButton)) {
			bank.nextPage();
		}
		if (this.mouseCollision.click(mouse, bank.closeButton)) {
			gameState.players[socket.id].player.info.menu.current = "none"
		}
		

	}

	homeClicks(socket, gameState, mouse) {
		if (!gameState.players[socket.id]) return false
		if (gameState.players[socket.id].player.info.currLevel !== 1) return false

		let player = gameState.players[socket.id].player
		let menu = player.info.menu

		if (menu.current === "none" || menu.current === "waterSource") {
			
			if (this.mouseCollision.click(mouse, player.home.bed)) {
				saveProgress(gameState.players[socket.id].player, socket, gameState);
			}
			
			if (this.mouseCollision.click(mouse, player.home.bank)) {
				menu.reset();
				menu.current = "bank";
				player.info.inventoryPage = "inventory"
			}
			if (this.mouseCollision.click(mouse, player.home.menu.anvil)) {
				menu.reset();
				menu.current = "craft";
				player.info.inventoryPage = "inventory"

			}
			if (this.mouseCollision.click(mouse, player.home.menu.stove)) {
				menu.reset();
				menu.current = "cook";
				player.info.inventoryPage = "inventory"

			}
			if (this.mouseCollision.click(mouse, gameState.players[socket.id].npcs.merchant)) {
				menu.reset();
				menu.current = "buy";
				player.info.inventoryPage = "inventory"

			}
			if (this.mouseCollision.click(mouse, player.home.waterSource.upgradeButton)) {
				mouse, player.home.waterSource.levelUp(player.inventory)
			}

		}
		if (this.mouseCollision.click(mouse, player.home.waterSource)) {
			if (menu.current === "waterSource") {
				menu.current = "none"
			} else {
				if (menu.current === "none") {
					menu.current = "waterSource"
				}
			}
		}
	}

	menuClick(socket, gameState, mouse) {
		if (!gameState.players[socket.id]) return false
		if (gameState.players[socket.id].player.info.currLevel !== 1) return false
		let menu = gameState.players[socket.id].player.info.menu
		if (menu.current !== "buy" && menu.current !== "cook" && menu.current !== "craft") return false

		

		let home = gameState.players[socket.id].player.home
		
		if (this.mouseCollision.click(mouse, gameState.players[socket.id].player.home.menu.closeButton)) {
			menu.reset();
			gameState.players[socket.id].player.info.menu.current = "none"
			return ;
		}
		
		let categoryButtons = home.menu.categoryButtons(gameState.items[menu.current], menu.category)
		for (let button in categoryButtons) {
			if (this.mouseCollision.click(mouse, categoryButtons[button])) {
				menu.subcategory = 0;
				menu.category = parseInt(button)
				return true;
			}
		}

		let subcategoryButtons = home.menu.subcategoryButtons(gameState.items[menu.current], menu.category, menu.subcategory)
		for (let button in subcategoryButtons) {
			if (this.mouseCollision.click(mouse, subcategoryButtons[button])) {
				menu.subcategory = parseInt(button)
				return true;
			}
		}

		let items = home.menu.packageItems(gameState.items, menu.current, menu.category, menu.subcategory)
		
		if (menu.current === "cook" || menu.current === "craft") {
			for (let info in items) {
				if (this.mouseCollision.click(mouse, items[info].button)) {
					let itemMenu = gameState.items[menu.current][menu.category];
	   				let item = gameState.items.getItem(itemMenu.category, itemMenu.subcategories[menu.subcategory], items[info].key);
	   				gameState.players[socket.id].crafting.begin(gameState.players[socket.id].player.inventory, item)
				}
			}
		}

		if (menu.current === "buy") {
			for (let info in items) {
				if (this.mouseCollision.click(mouse, items[info].button)) {
					let itemMenu = gameState.items[menu.current][menu.category];
	   				let item = gameState.items.getItem(itemMenu.category, itemMenu.subcategories[menu.subcategory], items[info].key);
	   				gameState.players[socket.id].player.inventory.buy(item, 1);
				}
			}
		}

		let click = gameState.players[socket.id].crafting.grid.click(mouse);
		if (click.click) {
			gameState.players[socket.id].crafting.collect(gameState.players[socket.id].player.inventory, click.index)
		}

	}

	inventorySwitch(socket, gameState, mouse) {
		if (!gameState.players[socket.id]) return false
		for (let button in gameState.UIbuttons.inventoryButtons) {
			if(this.mouseCollision.click(mouse, gameState.UIbuttons.inventoryButtons[button])) {
				gameState.players[socket.id].player.info.inventoryPage = gameState.UIbuttons.inventoryButtons[button].name
			}
		}
	}

	actionButtonSwitch(socket, gameState, mouse) {
		if (!gameState.players[socket.id]) return false
		let buttons = gameState.players[socket.id].player.action.buttons;
		for (let button in buttons) {
			if(this.mouseCollision.click(mouse, buttons[button])) {
				if (button === "walk") {
					socket.emit("pause");
				} else {
					buttons[button].toggle();

				}

			}
		}
	}
	
	
}

module.exports = ClickHandler
