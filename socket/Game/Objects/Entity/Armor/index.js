const {RigidBody} = require('../../../Helpers/bodies')
const {armorSettings} = require('../../../../GlobalSettings');
class Armor {
	constructor(items) {
		let id = 0;
		
		this.items = items;
		this.noItem = items.none();
		this.arrowItems = items.getSubcategory("Weapon", "Arrows");
		
		let armorPos = armorSettings.positions
		
		this.spaces = {
			helm : this.initializeArmor(items, id++, armorPos.helm),
			chest : this.initializeArmor(items, id++, armorPos.chest),
			legs : this.initializeArmor(items, id++, armorPos.legs),
			feet : this.initializeArmor(items, id++, armorPos.feet),
			weapon : this.initializeArmor(items, id++, armorPos.weapon),	
			shield : this.initializeArmor(items, id++, armorPos.shield),	
			bow : this.initializeArmor(items, id++, armorPos.bow),
			arrows : this.initializeArmor(items, id++, armorPos.arrows),
			pickaxe : this.initializeArmor(items, id++, armorPos.pickaxe),
			axe : this.initializeArmor(items, id++, armorPos.axe),	
		}
		
		this.bonus = armorSettings.defaultBonus
	}

	initializeArmor = (items, id, pos) => {
		return({
			item: items.none(),
			noItem : items.none(),
			body: new RigidBody({x: pos.x, y: pos.y, width: pos.width, height: pos.height}),
			id: id,

			set: function(item) {
				this.item = item.copy();
			},

			remove : function(inventory) {
				if (this.item && this.item.id !== -1 && inventory.add(this.item.copy(), this.item.quantity)) {
					this.item = this.noItem.copy();
				}
			},

			animationInfo : function() {
				return ({
					category: this.item.category,
					img : this.item.img,
					name: this.item.name,
					quantity: this.item.quantity,
				})
			},
			packageDB : function(name) {
				return ({
					name: name, 
					item_id: this.item.id,
					item_name: this.item.item_name,
	                category_name: this.item.category_name,
	                subCategory_name: this.item.subCategory_name,
					quantity: this.item.quantity,
				})
			}

			
		})
	}

	addBonus() {
		this.bonus.attack = this.spaces.weapon.item.bonus;
		
		this.bonus.defense = this.spaces.helm.item.bonus;
		this.bonus.defense += this.spaces.chest.item.bonus;
		this.bonus.defense += this.spaces.legs.item.bonus;
		this.bonus.defense += this.spaces.feet.item.bonus;
		this.bonus.defense += this.spaces.shield.item.bonus;

		this.bonus.range = this.spaces.arrows.item.bonus + this.spaces.bow.item.bonus;
		this.bonus.mining = this.spaces.pickaxe.item.bonus;
		this.bonus.woodcutting = this.spaces.axe.item.bonus;
	}

	remove(armorSlot, inventory) {
		if (inventory.add(this.spaces[armorSlot].item.copy(), this.spaces[armorSlot].item.quantity)) {
			this.spaces[armorSlot].item = this.noItem.copy();
			this.addBonus();
			return (true);
		}
		return false;
	}

	add(armorSlot, item, inventory) {
		let tmp = this.spaces[armorSlot].item.copy();

		if (!tmp || tmp.id === -1) {
			this.spaces[armorSlot].set(item);
			inventory.delete(inventory.find(item).index, 1);
			this.addBonus();
			return true
		} else {
			let foundItem = inventory.find(item);
			let quantity = inventory.checkQuantity(foundItem.index);
			let hasSpace = inventory.hasSpace().found;
			let armorItemInInventory = inventory.find(tmp).found;

			//*** Comment-1
			if (hasSpace || quantity === 1 || armorItemInInventory) {
				this.spaces[armorSlot].item = this.noItem.copy()
				this.spaces[armorSlot].set(item);
				inventory.delete(inventory.find(item).index, 1);
				inventory.add(tmp);
				return true
			} 
		}
		return false




	}

	addArrows(item, inventory) {


		let matchItem = this.items.match(item, "Weapon", "Arrows");
		
		if (matchItem.match === false) {
			return ({code: -1, message: `Item ${item.name} is not an Arrow`})
		}

		let inventoryItem = inventory.find(item);

		if (item.id === this.spaces.arrows.item.id) {
			this.spaces.arrows.item.quantity += inventoryItem.item.quantity;
			inventory.delete(inventoryItem.index, inventoryItem.quantity);

			return ({code: 1, message: `Quantity: ${inventoryItem.quantity} was added to ${this.spaces.arrows.item.name}`})
		}

		let tmp = this.spaces.arrows.item;
		if (tmp.id !== -1) {
			if (this.remove("arrows", inventory)) {
				this.spaces.arrows.item = inventoryItem.item;
				inventory.delete(inventoryItem.index, inventoryItem.item.quantity);
				return ({code: 1, message: `${tmp.name} Exchanged for ${item.name}`})
			} else {
				return ({code: -1, message: "No Space in Inventory"})
			}
		} else {
			this.spaces.arrows.item = inventoryItem.item;
			inventory.delete(inventoryItem.index, inventoryItem.quantity);

			return ({code: 1, message: `Added ${item.name}, Quantity: ${item.quantity}`})
		}
	}

}
			
module.exports = Armor;

// *** Comment-1
	// if inventory has space 
	// or quantity is one, meaning item will be deleted
	// or armoritem exists in inventory to add to it
	// then add the item to swap item and inventory item 


