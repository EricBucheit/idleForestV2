const Grid = require("../../Helpers/Grid")

class Inventory {
	 constructor(items, settings = false) {
        this.max = settings.max || 24;
        this.stackable = true;
        if (settings.stack === false) {
          this.stackable = false;
        }
        this.spaces = new Array(this.max);
        this.gold = settings.gold || 0;
        this.emptySlot = items.none;
        for (let i = 0; i < this.max; i++){
        	this.spaces[i] = this.emptySlot();
        }
        this.grid = false;
        if (settings.grid) {
          this.grid = new Grid(settings.grid.options)
        }
   }

   empty() {
      for (let i = 0; i < this.max; i++){
          this.spaces[i] = this.emptySlot();
      }
   }

   logTakenSlots() {
     for (let x = 0; x < this.max; x++) {
            if (this.spaces[x].id !== -1) {
               console.log("------------"+x+"------------------")
               console.log("name: " + this.spaces[x].name);
               console.log("id: " + this.spaces[x].id);
               console.log("quantity: " + this.spaces[x].quantity);
               console.log("img: " + this.spaces[x].img);
               console.log("category: " + this.spaces[x].category);
               console.log(`POS: ${this.spaces[x].body.pos.x}, ${this.spaces[x].body.pos.y}`)
               console.log("------------------------------")
            }
         }
   }

   packageDB(user_id) {
      let items = [];
        for (let x = 0; x < this.max; x++) {
            items.push({
                slot_id: x,
                item_id : this.spaces[x].id,
                quantity : this.spaces[x].quantity,
                user_id : user_id,
                item_name: this.spaces[x].item_name,
                category_name: this.spaces[x].category_name,
                subCategory_name: this.spaces[x].subCategory_name,
                x : this.spaces[x].body.pos.x,
                y : this.spaces[x].body.pos.y,
            })
          }
        return items;
   }

    package() {
        let imgs = [];
        for (let x = 0; x < this.max; x++) {
              if (this.spaces[x].id !== -1) {
                imgs.push({
                    id : this.spaces[x].id,
                    img: this.spaces[x].img,
                    category: this.spaces[x].category,
                    quantity: this.spaces[x].quantity,
                    x: this.spaces[x].body.pos.x,
                    y: this.spaces[x].body.pos.y,
                    name: this.spaces[x].name,
                })
              } else {
                imgs.push({
                    id : this.spaces[x].id,
                })
              }
        }
        return imgs;
    }


    countTakenSlots() {
      let count = 0 ;
      for (let x = 0; x < this.max; x++) {
        if (this.spaces[x].id !== -1) {
           count++;
        }
      }
      return (count);
    }

    hasSpace() {
      return(this.find(this.emptySlot()));
    }

    item(index) {
        return(this.spaces[index].copy());
    }

    use(player, index) {
      if (this.item(index).useable) {
        if (this.item(index).use(player).used) {
            this.delete(index, 1);
        }
      }
    }

    farm(player, index) {
      if (this.checkQuantity(index) > 4) {
        if (player.home.farm.plant(this.item(index))) {
          this.delete(index, 1);
          return true
        }

      }

      if (player.home.farm.addWater(this.item(index)).code === 1) {
          this.delete(index, 1);
          return true
      }
    }

    find(item) {
      for (let x = 0; x < this.max; x++) {
            if (this.spaces[x].id === item.id) {
                return ({found: true, index : x, item: this.spaces[x]});
            }
      }
      return ({found: false, index : -1});
    }

    add(item, quantity = 1) {
      if (quantity === 0) return true
      if (this.stackable) {
        let foundItem = this.find(item)
        if (foundItem.found) {
          this.spaces[foundItem.index].quantity += quantity;
          return (true);
        }
      }


      for (let x = 0; x < this.max; x++) {
        if (this.spaces[x].id === -1) {
            this.spaces[x] = item;
            this.spaces[x].quantity = quantity
            return (true);
        }
      }
      return (false);
    }

    checkQuantity(index) {
        return (this.spaces[index].quantity)
    }

    buy (item, quantity) {
      let price = item.price * quantity;
      if (price <= this.gold) {
         if (this.add(item, quantity)) {
            this.gold -= price;
         }
      }
    }

    sell(index, quantity) {
      let price = (this.item(index).price * 0.6) * quantity;
      this.gold += price;
      this.delete(index, quantity)
    }

    addInventory(newInventory, itemPos = false) {

      for (let y = 0; y < newInventory.spaces.length; y++) {
        if (newInventory.spaces[y].id !== -1) {
            if (itemPos) {
                newInventory.spaces[y].body.pos = {...itemPos};
            }
            for (let x = 0; x < this.max; x++) {
              if (this.add(newInventory.spaces[y], newInventory.spaces[y].quantity)) {
                break;
              }
           }
        }
      }
    }

   addGold(gold) {
   		this.gold += gold
   }

   useGold(gold) {
   		if (this.gold - gold >= 0) {
   			this.gold -= gold
   			return (true)
   		}
   		return (false);
   }



   delete(index, quantity) {
        let spaceLeft = this.spaces[index].quantity - quantity

         if (spaceLeft > 0) {
            this.spaces[index].quantity = this.spaces[index].quantity - quantity;
         } else {
      			this.spaces.splice(index, 1, this.emptySlot());
      			return true
         } 
   }

   transferItem(inventory, index, quantity) {
      if (quantity > this.checkQuantity(index)) {
        quantity = this.checkQuantity(index)
      }
      if(inventory.add(this.item(index), quantity)) {
          this.delete(index, quantity);
      }
   }

   transferItemtoSlot(inventory, index, quantity, slotIndex) {
      if (inventory.spaces[slotIndex].id === -1) {
          inventory.spaces[slotIndex] = this.item(index);
          inventory.spaces[slotIndex].quantity = quantity
          this.delete(index, quantity);
      } else {
        let item = this.item(index);
        if (this.find(index).found) {
            this.transferItem(inventory, index, quantity)
        }
        if (inventory.find(slotIndex).found) {
            inventory.transferItem(this, slotIndex, item.quantity)
        }

        this.delete(index, quantity);
        let tmp = inventory.spaces[slotIndex]
        this.spaces[index] = tmp
        inventory.delete(slotIndex, tmp.quantity);
        inventory.spaces[slotIndex] = item;
        inventory.spaces[slotIndex].quantity = quantity

        // this.transferItem(inventory, index, quantity)
      }
   }


   swap(index1, index2) {
      let temp = this.spaces[index1]
      this.spaces[index1] = this.spaces[index2]
      this.spaces[index2] = temp;
   }
}

module.exports = Inventory