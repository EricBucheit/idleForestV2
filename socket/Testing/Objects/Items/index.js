const Items = require('../../../Game/Objects/Items');


class ItemTest {
	
	constructor() {
		this.items = new Items();
	}

	run() {
		this.items.packageMenu('buyable', 0,1);

	}

	firstTests() {
		this.logAllCategories()
		this.logAllSubCategories();
		this.logAllItems();
		this.returnItemsTest();
		this.returnSubcategoryTest();
		this.returnCategoryTest();
		this.randomItemIsnotNone();
	}

	logAllCategories() {
		console.log(this.items.categories);
	}

	logAllSubCategories() {
		let subcategoryKeys = Object.keys(this.items.categories);
		for (let key of subcategoryKeys) {
				console.log(this.items.categories[key]);
		}
	}

	logAllItems() {
		let subcategoryKeys = Object.keys(this.items.categories);
		for (let key of subcategoryKeys) {
			let itemKeys = Object.keys(this.items.categories[key].subCategories)
			for (let itemKey of itemKeys) {
				console.log("NEXT:" ,this.items.categories[key].subCategories[itemKey])
			}
		}
	}

	returnItemsTest() {
		console.log(this.items.getItem("Consumeable", "Potion", "smallPotion"));
		console.log(this.items.getItem("Consumeable", "Potion", "largePotion"));
		console.log(this.items.getItem("Consumeable", "Potion", "nothing"));
	}

	returnSubcategoryTest() {
		console.log(this.items.getSubcategory("Consumeable", "Potion"))
		console.log(this.items.getSubcategory("Armor", "Bronze"));
		console.log(this.items.getSubcategory("Armor", "Wrong"));
	}

	returnCategoryTest() {
		console.log(this.items.getCategory("Consumeable"))
		console.log(this.items.getCategory("Armor"));
		console.log(this.items.getCategory("Wrong"));
	}

	randomItemIsnotNone() {
		let fail = false;
		let categoryKeys = Object.keys(this.items.categories);
		for (let key of categoryKeys) {
			let subCategoryKeys = Object.keys(this.items.categories[key].subCategories)
			for (let subcategoryKey of subCategoryKeys) {
				for (var i = 0; i <= 200; i++) {
					let item = this.items.random(i, key, subcategoryKey)
					console.log(item.name)
					if (item.id === -1) {
						console.log("FAIL")
						console.log(key, subcategoryKey);
						fail = true;
						break;
					}
				}
			}
		}
		if (fail === false) {
			console.log("PASS ITEM IS NOT NONE")
		}
	}
}

Test = new ItemTest();
Test.run()


module.exports = new ItemTest();