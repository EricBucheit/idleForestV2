const { RigidBody } = require('../../../Helpers/bodies');

class ItemTemplate {
   constructor(info) {

      let body = {
         x : 0,
         y : 0,
         width : 20,
         height : 20,
         velocityX : 0,
         velocityY : 0
      }
      return ({
               name: info.name,
               body: new RigidBody(body),
               id: info.id || 0,
               item_name : "",
               category_name : "",
               subCategory_name : "",
               quantity: 1,
               maxStack: 99,
               bonus : info.bonus || 0,
               speed : info.speed || 0,
               price: info.price || 0,
               wearable: false,
               magic: false,
               use : info.use,
               useable: info.useable === undefined ? true : false,
               recipe : info.recipe || false,
               produce : info.produce || false,
               animation : info.animation || false,
               img: info.img || false,
               category: info.category || false,
               info: info.name,
               craftTime : info.craftTime || 3000,

               setId(id) {
                  this.id = id;
               },

               setCategory(category) {
                  this.category_name = category;
               },

               setSubCategory(subcategory) {
                  this.subCategory_name = subcategory;
               },

               setItemName(itemName) {
                  this.item_name = itemName;
               },

               setQuantity(quantity) {
                  this.quantity = quantity;
               },

               addRecipe(recipe) {
                  for (var i = recipe.length - 1; i >= 0; i--) {
                     this.recipe.push(recipe[i])
                  }
               },

               setPos(x, y) {
                  this.body.pos.x = x
                  this.body.pos.y = y
               },

               setSize(width, height) {
                  this.body.size.x = width;
                  this.body.size.y = height;
               },
               setVelocity(x,y) {
                  this.body.velocity.x = x;
                  this.body.velocity.y = y;
               },

               isWearable : function() {
                  this.wearable = true;
               },

               package : function() {
                  return({
                     name : this.name,
                     img : this.img,
                     category: this.category,
                     quantity: this.quantity,
                  })
               },

               copy : function(x = 0,y=0,width=20,height=20) {
                 
                  let body = {
                     x : x,
                     y : y,
                     width : width,
                     height : height,
                     velocityX : 0,
                     velocityY : 0
                  }
      
                 return ({
                     name: this.name,
                     body: new RigidBody(body),
                     id: this.id,
                     item_name : this.item_name,
                     category_name : this.category_name,
                     subCategory_name : this.subCategory_name,
                     animation : this.animation,
                     img : this.img,
                     category: this.category,
                     quantity: 1,
                     bonus : this.bonus,
                     speed : this.speed,
                     maxStack: this.maxStack,
                     price: this.price,
                     wearable: this.wearable,
                     magic : this.magic,
                     use : this.use,
                     useable : this.useable,
                     recipe : this.recipe,
                     setPos : this.setPos,
                     setSize : this.setSize,
                     isWearable : this.isWearable,
                     setQuantity : this.setQuantity,
                     setVelocity : this.setVelocity,
                     info : this.info,
                     copy : this.copy,
                     package : this.package,
                     craftTime : this.craftTime
                  })
               }
            }
         )
      }
   }
module.exports = ItemTemplate;