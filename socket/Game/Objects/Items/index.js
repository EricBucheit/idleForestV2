const ItemTemplate = require('./Template');
const water = require('./Types/ConsumeableItems/drinks.js');
const { food, cookedFood, plants} = require("./Types/ConsumeableItems/food.js");
const potions = require("./Types/ConsumeableItems/potions");
const { Ore, Bar, Wood, Seeds } = require("./Types/ResourceItems");
const { BronzeArmor, IronArmor, GoldArmor, PlatinumArmor, DiamondArmor} = require("./Types/PlayerItems/armorItems");
const { magicItems} = require("./Types/PlayerItems/magicItems");
const { BronzeWeapons, IronWeapons, GoldWeapons, PlatinumWeapons, DiamondWeapons, rangeWeapons, arrows} = require("./Types/PlayerItems/weaponItems");
const {RandomInt} = require("../../Helpers/")
const fs = require("fs");

class Items {
	constructor() {
		this.categories = {
			Consumeable: {
				subCategories: {
					Potion: {
						items: potions,
					},
					Food: {
						items: food,
					},
					Water: {
						items: water,
					},
					Cooked: {
						items: cookedFood,
					},
					Plants: {
						items: plants,
					},
				}
			},

			Resources: {
				subCategories: {
					Ores: {
						items: Ore,
					},

					Wood: {
						items: Wood,
					},
					Seeds: {
						items: Seeds,
					},
					Bars: {
						items: Bar,
					},
				}
			},

			Armor: {
				subCategories: {
					Bronze: {
						items: BronzeArmor,
					},
					Iron: {
						items: IronArmor,
					},
					Gold: {
						items: GoldArmor,
					},
					Platinum: {
						items: PlatinumArmor,
					},
					Diamond: {
						items: DiamondArmor,
					},
				}
			},

			Weapon: {
				subCategories: {
					Bronze : {
						items: BronzeWeapons,
					},

					Iron : {
						items: IronWeapons,
					},

					Gold : {
						items: GoldWeapons,
					},

					Platinum : {
						items: PlatinumWeapons,
					},

					Diamond : {
						items: DiamondWeapons,
					},

					Bow : {
						items: rangeWeapons,
					},

					Arrows : {
						items: arrows,
					},
				}
			},

			Magic: {
				subCategories: {
					Stones : {
						items: magicItems,
					},
				}
			},
		}

	this.buy = [
			{
				category: "Weapon",
				subcategories: [
								"Bronze",
								"Iron",
								"Gold",
								"Platinum",
								"Diamond",
								"Bow",
								"Arrows",
							]

			},
			{
				category: "Armor",
				subcategories: [
								"Bronze",
								"Iron",
								"Gold",
								"Platinum",
								"Diamond",
								
							]

			},
			{
					category: "Consumeable",
					subcategories: [
								"Potion",
							]

			}
		]


	this.craft = [
				{
					category: "Weapon",
					subcategories: [
								"Bronze",
								"Iron",
								"Gold",
								"Platinum",
								"Diamond",
								"Bow",
								"Arrows",
							]

				},
				{
					category: "Armor",
					subcategories: [
								"Bronze",
								"Iron",
								"Gold",
								"Platinum",
								"Diamond",
							]

				},
				{
					category: "Consumeable",
					subcategories: ["Potion"]
				}
				
			]



	this.cook = [
				{
					category: "Resources",
					subcategories: ["Bars"]
				},
				{
					category: "Consumeable",
					subcategories: ["Cooked"]
				},
			]

		this.setItemInfo();
		//-----------------------------------------------------------
		// makes a file that holds the list of items in root dir.
		// makes all the function calls for quick copy and paste if needed
		// ** Only use if items are refreshed / edited / added
		// this.createItemReference();
		//-----------------------------------------------------------

	}

	none() {
		return (new ItemTemplate({ 
			name: "None", 
			id: -1,
			use: function() {
			 	return ("No Item to Use");
			}
		}))
   	}

   	package(item) {
   		return ({
   			name : item.name,
   			img : item.img,
   			category: item.category,
   			quantity: item.quantity,
   		})
   	}

   	getItem = (category, subcategory, item) => {
   		let newItem = this.categories[category].subCategories[subcategory].items[item]
   		if (!newItem) {
   			return (this.none());
   		} else {
   			return newItem.copy();
   		}
   	}

   	getSubcategory(category, subcategory) {
   		let newSubcategory = this.categories[category].subCategories[subcategory];
   		if (!newSubcategory) {
   			return (this.none());
   		} else {
   			return newSubcategory.items;
   		}
   	}

   	getCategory(category) {
   		let newCategory = this.categories[category];
   		if (!newCategory) {
   			return (this.none());
   		} else {
   			return newCategory;
   		}
   	}


   	match(item, category, subcategory) {
   		let items = this.getSubcategory(category, subcategory);
   		for (let key in items) {
   			if (item.id === items[key].id) {
   				return ({
   							code: 1, 
   							message: `Item ${item.name} Matches ${items[key].name}`,
   							item: items[key],
   							match : true,
   						})
   			}
   		}
   		return 	({
					code: -1, 
					message: `NO Matches Found`,
					item: this.none(),
					match : false,
				})
   	}

   	random(level, category, subcategory) {
   		const items = this.getSubcategory(category, subcategory);
   		var keys = Object.keys(items);
   		let max = Math.floor(level / 20)

   		if (max >= keys.length) {
   			max = keys.length - 1;
   		}

   		let index = RandomInt(0, max);
   		let item = this.getItem(category, subcategory, keys[index]);
    	return item
   	}


   	createItemReference() {
   		var writeStream = fs.createWriteStream("ItemReference.txt");
   		let categoryKeys = Object.keys(this.categories);
		for (let key of categoryKeys) {
			writeStream.write("\n"+key);
			let subCategoryKeys = Object.keys(this.categories[key].subCategories)
			for (let subcategoryKey of subCategoryKeys) {
				writeStream.write("\n     " + subcategoryKey);
				let itemKeys = Object.keys(this.categories[key].subCategories[subcategoryKey].items);
				for (let itemKey of itemKeys) {
					writeStream.write("\n        "+itemKey);
				}
			}
		}

		for (let key of categoryKeys) {
			let subCategoryKeys = Object.keys(this.categories[key].subCategories)
			for (let subcategoryKey of subCategoryKeys) {
				writeStream.write("\n\n" + subcategoryKey);
				writeStream.write("\n--------------");

				let itemKeys = Object.keys(this.categories[key].subCategories[subcategoryKey].items);
				for (let itemKey of itemKeys) {
					writeStream.write(`\n\nitems.getItem("${key}", "${subcategoryKey}", "${itemKey}")`);
				}
			}
		}
		writeStream.end();
   	}

   	fillInventory(inventory) {
   		let id = 0;
   		let x = 0;
   		let y = 2;
   		let categoryKeys = Object.keys(this.categories);
		for (let key of categoryKeys) {
			let subCategoryKeys = Object.keys(this.categories[key].subCategories)
			for (let subcategoryKey of subCategoryKeys) {
				let itemKeys = Object.keys(this.categories[key].subCategories[subcategoryKey].items);
				for (let itemKey of itemKeys) {
					let item = this.getItem(key, subcategoryKey, itemKey);
					item.body.pos.x = x * 32;
					item.body.pos.y = y * 32;
					inventory.add(item, 10000);
					x++;
					if (x >= 10) {
						x = 0;
						y++;
					}
				}
			}
		}
   	}

   	setItemInfo() {
   		let id = 0;
   		let categoryKeys = Object.keys(this.categories);
		for (let key of categoryKeys) {
			let subCategoryKeys = Object.keys(this.categories[key].subCategories)
			for (let subcategoryKey of subCategoryKeys) {
				let itemKeys = Object.keys(this.categories[key].subCategories[subcategoryKey].items);
				for (let itemKey of itemKeys) {
					let item = this.categories[key].subCategories[subcategoryKey].items[itemKey];
					item.setCategory(key);
					item.setSubCategory(subcategoryKey);
					item.setItemName(itemKey);
					item.setId(id++);
				}
			}
		}
   	}
}

module.exports = Items