const EntityStructure = require('../structure')
const {RandomInt} = require('../../../../Helpers')

class NPCStructure {
  merchant(items) {
    let structure = EntityStructure(items);
    structure.info.name = "Merchant";
    structure.info.description = "Buy And Sell";
    structure.info.type = "npc";
    structure.animation.img = "coffee";
    structure.animation.shirt = "black";
    structure.animation.pants = "black";
    structure.animation.hair = "black";
    structure.inventory.stack = true;
    structure.navigation.direction = "left"
    structure.action.current = "idle"
    structure.body = {
        x : 280,
        y : 160,
        width : 45,
        height : 45,
        velocityX : 3,
        velocityY : 3
    }
   
    return (structure);
  }

   tutorialMaster(items) {
    let structure = EntityStructure(items);
    structure.info.name = "TutorialMaster";
    structure.info.description = "Here to Help";
    structure.info.type = "npc";
    structure.animation.img = "dove";
    structure.animation.shirt = "blackTabard";
    structure.animation.pants = "black";
    structure.animation.hair = "blackHood";
    // structure.inventory.stack = true;
    structure.navigation.direction = "left"
    structure.action.current = "idle"
    structure.body = {
        x : 100,
        y : 100,
        width : 45,
        height : 45,
        velocityX : 3,
        velocityY : 3
    }
   
    return (structure);
  }



}

module.exports = NPCStructure