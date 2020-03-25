const {RigidBody, Timer} = require('../../../../Helpers');

class Menu {
	constructor() {
		this.categoryTimer = new Timer(500);
		this.subcategoryTimer = new Timer(1000);
		this.currentMenu = 0;
		this.background = new RigidBody({
								x : 50,
								y : 10,
								width : 270,
								height : 420,
								velocityX : 0,
								velocityY : 0,
							})



		this.anvil = {
			body: new RigidBody({
								x : 32,
								y : 32 * 8,
								width : 32,
								height : 32,
								velocityX : 0,
								velocityY : 0,
							}),
			info: "Click for Crafting"
		}
		this.stove = {
			body: new RigidBody({
								x : 32,
								y : 32 * 10,
								width : 32,
								height : 32,
								velocityX : 0,
								velocityY : 0,
							}),
			info : "Click For Furnace"
		}

		this.closeButton = {body: new RigidBody({
											x : this.background.pos.x + this.background.size.x - 22, 
											y : this.background.pos.y + 5,
											width : 16,
											height : 16,
											velocityX : 0,
											velocityY : 0,
										})}





	}

	packageItems(items, menu, categoryIndex, subcategoryIndex) {
   		let currentMenu = items[menu][categoryIndex];
   		items = items.getSubcategory(currentMenu.category, currentMenu.subcategories[subcategoryIndex]);
   		let keys = Object.keys(items);

   		let itemInfo = [];
   		let y = 0;
		let i = 0;
   		for (let key of keys) {
   			let recipePackage = [];
   			if (i % 4 === 0 && i !==0) {
				y++;
				i = 0;
			}

   			let button = {body : new RigidBody({
   							x : (i * 55) + 20 +  (this.background.pos.x),
   							y :(y * 55) + 20 + (this.background.pos.y),
   							width : 50,
   							height : 50,
   							velocityX : 0,
   							velocityY : 0,
   						})}

   			if (menu === 'craft' || menu === "cook") {
	   			for (let recipe of items[key].recipe) {
	   				recipePackage.push({
	   					name: recipe.item.name,
	   					img: recipe.item.img,
	   					category: recipe.item.category,
	   					quantity: recipe.quantity,
	   				})
	   			}
   			}

   			itemInfo.push({
   				key: key,
   				name: items[key].name,
   				img: items[key].img,
                category: items[key].category,
                price: items[key].price,
                recipe : recipePackage,
                button: button,
   			})
   			i++;
   		}
   		return(itemInfo);
   	}


	categoryButtons(categories, categoryIndex) {
		let buttons = [];
		let background = this.background
		let width = background.size.x / 3;
		let height = background.size.y / 10
		categories.forEach(function (value, i) {
				let button = {body : new RigidBody({
													x : (i * width) + (background.pos.x),
													y : background.pos.y + background.size.y - (background.size.y / 9),
													width : width,
													height : height,
													velocityX : 0,
													velocityY : 0,
												})}
				button.name = value.category;
				button.fontSize = '12';
				if (button.name.length >= 10) {
					button.fontSize = '10';
				}
				if (i === categoryIndex) {
					button.selected = true;
				} 
				buttons.push(button)
		});
		return buttons
	}

	subcategoryButtons(categories, categoryIndex, subcategoryIndex) {
		let buttons = [];
		let y = 0;
		let x = 0;
		let background = this.background
		let width = background.size.x / 4;
		let height = background.size.y / 10
		categories[categoryIndex].subcategories.forEach(function (value, i) {
   			if (i % 4 === 0 && i !==0) {
				y++;
				x = 0;
			}
			let button = {body : new RigidBody({
												x : (x * width) + (background.pos.x),
												y : background.pos.y + (background.size.y / 1.7) + (y * height) + 30,
												width : width,
												height : height,
												velocityX : 0,
												velocityY : 0,
											})}
				button.name = value;
				button.fontSize = '10';
				if (button.name.length >= 10) {
					button.fontSize = '8';
				}
				if (i === subcategoryIndex) {
					button.selected = true;
				}
				buttons.push(button);
				x++;
		});
		return buttons
	}

	iterate (categories, info) {
		if (this.subcategoryTimer.check()) {
			info.subcategory = info.subcategory + 1
			if(info.subcategory >= categories[info.category].subcategories.length) {
				info.subcategory = 0;
				if (this.categoryTimer.check()) {
					info.category = info.category + 1
					if(info.category >= categories.length) {
						this.currentMenu++;
						if (this.currentMenu >= info.menus.length ) {
							this.currentMenu = 0;
						}
						info.current = info.menus[this.currentMenu];
						info.reset();
					}
				}
			}

		}


		

	}
}


module.exports = Menu