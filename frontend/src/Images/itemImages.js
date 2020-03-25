import oreItems from "./images/resources/ores.png"
import bars from "./images/resources/Bars.png"
import woodItems from "./images/resources/woodItems.png"
import seeds from "./images/resources/seeds.png"
import potionImages from "./images/resources/potions.png"

import plantImages from "./images/resources/plants.png"
import cookedFood from "./images/resources/food.png"
import cookedPlantImages from "./images/resources/cookedPlants.png"


import magicStones from "./images/Player/partSheets/magic/magicStones.png"

//axes
import bronzeAxe from "./images/Player/fullSheet/axes/bronze.png"
import ironAxe from "./images/Player/fullSheet/axes/iron.png"
import goldAxe from "./images/Player/fullSheet/axes/gold.png"
import platinumAxe from "./images/Player/fullSheet/axes/platinum.png"
import diamondAxe from "./images/Player/fullSheet/axes/diamond.png"

//pickaxes
import bronzePickaxe from "./images/Player/fullSheet/pickaxes/bronze.png"
import ironPickaxe from "./images/Player/fullSheet/pickaxes/iron.png"
import goldPickaxe from "./images/Player/fullSheet/pickaxes/gold.png"
import platinumPickaxe from "./images/Player/fullSheet/pickaxes/platinum.png"
import diamondPickaxe from "./images/Player/fullSheet/pickaxes/diamond.png"

//swords
import bronzeSword from "./images/Player/fullSheet/weapons/male/slash/bronze.png"
import ironSword from "./images/Player/fullSheet/weapons/male/slash/iron.png"
import goldSword from "./images/Player/fullSheet/weapons/male/slash/gold.png"
import platinumSword from "./images/Player/fullSheet/weapons/male/slash/platinum.png"
import diamondSword from "./images/Player/fullSheet/weapons/male/slash/diamond.png"

//maces 
import bronzeMace from "./images/Player/partSheets/mace/bronzeMace.png"
import ironMace from "./images/Player/partSheets/mace/ironMace.png"
import goldMace from "./images/Player/partSheets/mace/goldMace.png"
import platinumMace from "./images/Player/partSheets/mace/platinumMace.png"
import diamondMace from "./images/Player/partSheets/mace/diamondMace.png"


//bows
import oakBow from "./images/Player/fullSheet/weapons/male/shoot/oak.png"
import mapleBow from "./images/Player/fullSheet/weapons/male/shoot/maple.png"
import mahogonyBow from "./images/Player/fullSheet/weapons/male/shoot/mahogony.png"
import magicBow from "./images/Player/fullSheet/weapons/male/shoot/magic.png"
import superBow from "./images/Player/fullSheet/weapons/male/shoot/super.png"

//arrows
// import arrows from "./images/Player/fullSheet/weapons/male/shoot/arrow.png"
import bronzeArrows from "./images/Player/fullSheet/weapons/male/shoot/bronzeArrow.png"
import ironArrows from "./images/Player/fullSheet/weapons/male/shoot/ironArrow.png"
import goldArrows from "./images/Player/fullSheet/weapons/male/shoot/goldArrow.png"
import platinumArrows from "./images/Player/fullSheet/weapons/male/shoot/platinumArrow.png"
import diamondArrows from "./images/Player/fullSheet/weapons/male/shoot/diamondArrow.png"

//armor
import bronzeShield from "./images/Player/fullSheet/shields/bronze.png"
import ironShield from "./images/Player/fullSheet/shields/iron.png"
import goldShield from "./images/Player/fullSheet/shields/gold.png"
import platinumShield from "./images/Player/fullSheet/shields/platinum.png"
import diamondShield from "./images/Player/fullSheet/shields/diamond.png"

import bronzeHelm from "./images/Player/fullSheet/armor/helm/bronzeHelm.png"
import ironHelm from "./images/Player/fullSheet/armor/helm/ironHelm.png"
import goldHelm from "./images/Player/fullSheet/armor/helm/goldHelm.png"
import platinumHelm from "./images/Player/fullSheet/armor/helm/platinumHelm.png"
import diamondHelm from "./images/Player/fullSheet/armor/helm/diamondHelm.png"

import bronzeChest from "./images/Player/fullSheet/armor/chest/bronzeChest.png"
import ironChest from "./images/Player/fullSheet/armor/chest/ironChest.png"
import goldChest from "./images/Player/fullSheet/armor/chest/goldChest.png"
import platinumChest from "./images/Player/fullSheet/armor/chest/platinumChest.png"
import diamondChest from "./images/Player/fullSheet/armor/chest/diamondChest.png"

import bronzeLegs from "./images/Player/fullSheet/armor/legs/bronzeLegs.png"
import ironLegs from "./images/Player/fullSheet/armor/legs/ironLegs.png"
import goldLegs from "./images/Player/fullSheet/armor/legs/goldLegs.png"
import platinumLegs from "./images/Player/fullSheet/armor/legs/platinumLegs.png"
import diamondLegs from "./images/Player/fullSheet/armor/legs/diamondLegs.png"

import bronzeBoots from "./images/Player/fullSheet/armor/boots/bronzeBoots.png"
import ironBoots from "./images/Player/fullSheet/armor/boots/ironBoots.png"
import goldBoots from "./images/Player/fullSheet/armor/boots/goldBoots.png"
import platinumBoots from "./images/Player/fullSheet/armor/boots/platinumBoots.png"
import diamondBoots from "./images/Player/fullSheet/armor/boots/diamondBoots.png"




import {
		mapTile,
		singleImage,
		partSheetImage,
		fullSheetImage,
		farmPlantImage,
	} from './imgFunctions'


let itemImages = {
	ore : {
		copper : {
			img : singleImage(oreItems),
			pos : mapTile(0,0, 33, 33) 
		},

		tin : {
			img : singleImage(oreItems),
			pos : mapTile(33,0, 33, 33) 
		},

		iron : {
			img : singleImage(oreItems),
			pos : mapTile(66,0, 33, 33) 
		},

		gold : {
			img : singleImage(oreItems),
			pos : mapTile(99,0, 33, 33) 
		},

		platinum : {
			img : singleImage(oreItems),
			pos : mapTile(0,33, 33, 33) 
		},
		diamond : {
			img : singleImage(oreItems),
			pos : mapTile(33,33, 33, 33) 
		}
	},

	bar : {
		bronze: {
			img : singleImage(bars),
			pos : mapTile(0,0, 64,64) 
		},

		iron : {
			img : singleImage(bars),
			pos : mapTile(64,0, 64,64) 
		},

		gold : {
			img : singleImage(bars),
			pos : mapTile(128,0, 64,64) 
		},

		platinum : {
			img : singleImage(bars),
			pos : mapTile(192,0, 64, 64) 
		},
		diamond : {
			img : singleImage(bars),
			pos : mapTile(256,0, 64,64) 
		}
	},

	wood : {
		oak: {
			img : singleImage(woodItems),
			pos : mapTile(0,0, 21, 30) 
		},

		maple : {
			img : singleImage(woodItems),
			pos : mapTile(21,0, 21, 30) 

		},

		mahogony : {
			img : singleImage(woodItems),
			pos : mapTile(42,0, 21, 30) 

		},

		magic : {
			img : singleImage(woodItems),
			pos : mapTile(63,0, 21, 30) 

		},
		super : {
			img : singleImage(woodItems),
			pos : mapTile(84,0, 21, 30) 

		}
	},

	seed : {
		carrot: {
			img : singleImage(seeds),
			pos : mapTile(32, 0, 32, 32) 
		},

		potatoe : {
			img : singleImage(seeds),
			pos : mapTile(64, 0, 32, 32) 

		},

		corn : {
			img : singleImage(seeds),
			pos : mapTile(0, 0, 32, 32) 

		},

		cucumber : {
			img : singleImage(seeds),
			pos : mapTile(96, 0, 32, 32) 

		},
		tomatoe : {
			img : singleImage(seeds),
			pos : mapTile(128, 0, 32, 32) 
		},

		artichoke : {
			img : singleImage(seeds),
			pos : mapTile(128, 0, 32, 32) 

		}
	},

	water : {
		tiny: {
			img : singleImage(potionImages),
			pos : mapTile(24, 72, 24, 24) 
		},

		small : {
			img : singleImage(potionImages),
			pos : mapTile(24, 216, 24, 24) 

		},

		medium : {
			img : singleImage(potionImages),
			pos : mapTile(240, 72, 24, 24) 

		},

		large : {
			img : singleImage(potionImages),
			pos : mapTile(240, 216, 24, 24) 

		},
		giant : {
			img : singleImage(potionImages),
			pos : mapTile(240, 96, 24, 24) 
		},

		god : {
			img : singleImage(potionImages),
			pos : mapTile(240, 240, 24, 24) 

		}
	},


	potion : {
		tiny: {
			img : singleImage(potionImages),
			pos : mapTile(24, 72 - 24, 24, 24) 
		},

		small : {
			img : singleImage(potionImages),
			pos : mapTile(24, 216 - 24, 24, 24) 

		},

		medium : {
			img : singleImage(potionImages),
			pos : mapTile(240, 72 - 24, 24, 24) 

		},

		large : {
			img : singleImage(potionImages),
			pos : mapTile(240, 216 - 24, 24, 24) 

		},
		giant : {
			img : singleImage(potionImages),
			pos : mapTile(240, 96 + 24, 24, 24) 
		},

		god : {
			img : singleImage(potionImages),
			pos : mapTile(240, 240 + 24, 24, 24) 

		}
	},

	plants : {
		carrot: {
			img : singleImage(plantImages),
			pos : mapTile(64, 352, 32, 32) 
		},

		potatoes : {
			img : singleImage(plantImages),
			pos : mapTile(32, 352, 32, 32) 

		},

		corn : {
			img : singleImage(plantImages),
			pos : mapTile(192, 352, 32, 32) 

		},

		cucumber : {
			img : singleImage(plantImages),
			pos : mapTile(160, 352, 32, 32) 

		},
		tomatoe : {
			img : singleImage(plantImages),
			pos : mapTile(0, 352, 32, 32) 
		},

		artichoke : {
			img : singleImage(plantImages),
			pos : mapTile(96, 352, 32, 32) 

		}
	},

	growingPlants : {
		carrot: {
			img : farmPlantImage(plantImages, {x: 64 , y: 0}),		
		},

		potatoe : {
			img : farmPlantImage(plantImages, {x: 32, y: 0}),
		},

		corn : {
			img : farmPlantImage(plantImages, {x: 192, y: 0}),
		},

		cucumber : {
			img : farmPlantImage(plantImages, {x: 160, y: 0}),
		},
		
		tomatoe : {
			img : farmPlantImage(plantImages, {x: 0, y: 0}),		
		},

		artichoke : {
			img : farmPlantImage(plantImages, {x: 96, y: 0}),
		}
	},




	cookedPlants : {
		carrot: {
			img : singleImage(cookedPlantImages),
			pos : mapTile(64, 352, 32, 32) 
		},

		potatoe : {
			img : singleImage(cookedPlantImages),
			pos : mapTile(32, 352, 32, 32) 

		},

		corn : {
			img : singleImage(cookedPlantImages),
			pos : mapTile(192, 352, 32, 32) 

		},

		cucumber : {
			img : singleImage(cookedPlantImages),
			pos : mapTile(160, 352, 32, 32) 

		},
		tomatoe : {
			img : singleImage(cookedPlantImages),
			pos : mapTile(0, 352, 32, 32) 
		},

		artichoke : {
			img : singleImage(cookedPlantImages),
			pos : mapTile(96, 352, 32, 32) 

		}
	},

	cookedMeat : {
		chicken: {
			img : singleImage(cookedFood),
			pos : mapTile(64, 800, 32, 32) 
		},

		cow : {
			img : singleImage(cookedFood),
			pos : mapTile(0, 800, 32, 32) 

		},

		llama : {
			img : singleImage(cookedFood),
			pos : mapTile(32 * 5, 800, 32, 32) 

		},

		pig : {
			img : singleImage(cookedFood),
			pos : mapTile(32 * 12, 800, 32, 32) 

		},
		turkey : {
			img : singleImage(cookedFood),
			pos : mapTile(32 * 3, 800, 32, 32) 
		},

	},

	rawMeat : {
		chicken: {
			img : singleImage(cookedFood),
			pos : mapTile(8*32, 800, 32, 32) 
		},

		cow : {
			img : singleImage(cookedFood),
			pos : mapTile(9*32, 800, 32, 32) 

		},

		llama : {
			img : singleImage(cookedFood),
			pos : mapTile(32 * 10, 800, 32, 32) 

		},

		pig : {
			img : singleImage(cookedFood),
			pos : mapTile(32 * 11, 800, 32, 32) 

		},
		turkey : {
			img : singleImage(cookedFood),
			pos : mapTile(32 * 8, 800, 32, 32) 
		},
	},

	magic : {
		teleportStone : {
				img : singleImage(magicStones),
				pos : mapTile(264, 66, 64, 64) 
		},

		archerStone : {
				img : singleImage(magicStones),
				pos : mapTile(199, 1, 64, 64) 
		},

		shieldStone : {
				img : singleImage(magicStones),
				pos : mapTile(134, 1, 64, 64) 
		},

		attackStone : {
				img : singleImage(magicStones),
				pos : mapTile(68, 1, 64, 64) 
		},

		miningStone : {
				img : singleImage(magicStones),
				pos : mapTile(1, 64, 64, 64) 
		},

		thirstStone : {
				img : singleImage(magicStones),
				pos : mapTile(68, 66, 64, 64) 
		},

		hungerStone : {
				img : singleImage(magicStones),
				pos : mapTile(199, 66, 64, 64) 
		},

		woodCuttingStone : {
				img : singleImage(magicStones),
				pos : mapTile(134, 66, 64, 64) 
		},

		huntingStone : {
				img : singleImage(magicStones),
				pos : mapTile(264, 1, 64, 64) 
		},
	},
		
	tools: {
		bronzeAxe: {
			img : singleImage(bronzeAxe),
			pos : mapTile(0, 655, 64, 64),
			images: fullSheetImage(bronzeAxe)

		},

		ironAxe: {
			img : singleImage(ironAxe),
			pos : mapTile(0, 655, 64, 64),
			images: fullSheetImage(ironAxe)

		},

		goldAxe: {
			img : singleImage(goldAxe),
			pos : mapTile(0, 655, 64, 64),
			images: fullSheetImage(goldAxe)

		},

		platinumAxe: {
			img : singleImage(platinumAxe),
			pos : mapTile(0, 655, 64, 64),
			images: fullSheetImage(platinumAxe)

		},

		diamondAxe: {
			img : singleImage(diamondAxe),
			pos : mapTile(0, 655, 64, 64),
			images: fullSheetImage(diamondAxe)

		},

		bronzePickaxe: {
			img : singleImage(bronzePickaxe),
			pos : mapTile(0, 655, 64, 64),
			images: fullSheetImage(bronzePickaxe)

		},

		ironPickaxe: {
			img : singleImage(ironPickaxe),
			pos : mapTile(0, 655, 64, 64),
			images: fullSheetImage(ironPickaxe),

		},

		goldPickaxe: {
			img : singleImage(goldPickaxe),
			pos : mapTile(0, 655, 64, 64),
			images: fullSheetImage(goldPickaxe)

		},

		platinumPickaxe: {
			img : singleImage(platinumPickaxe),
			pos : mapTile(0, 655, 64, 64),
			images: fullSheetImage(platinumPickaxe)


		},

		diamondPickaxe: {
			img : singleImage(diamondPickaxe),
			pos : mapTile(0, 655, 64, 64),
			images: fullSheetImage(diamondPickaxe),

		},
	},

	weapon: {
		bronzeSword: {
			img : singleImage(bronzeSword),
			pos : mapTile(0, 140, 64, 64),
			images : partSheetImage({
						hurt : bronzeSword,
						idle : bronzeSword,
						magic : bronzeSword,
						shoot : bronzeSword,
						swing : bronzeSword,
						thrust : bronzeSword,
						walk : bronzeSword,
			}),
		},

		ironSword: {
			img : singleImage(ironSword),
			pos : mapTile(0, 140, 64, 64),
			images : partSheetImage({
						hurt : ironSword,
						idle : ironSword,
						magic : ironSword,
						shoot : ironSword,
						swing : ironSword,
						thrust : ironSword,
						walk : ironSword,
			})
		},

		goldSword: {
			img : singleImage(goldSword),
			pos : mapTile(0, 140, 64, 64),
			images : partSheetImage({
						hurt : goldSword,
						idle : goldSword,
						magic : goldSword,
						shoot : goldSword,
						swing : goldSword,
						thrust : goldSword,
						walk : goldSword,
			})
		},

		platinumSword: {
			img : singleImage(platinumSword),
			pos : mapTile(0, 140, 64, 64),
			images : partSheetImage({
						hurt : platinumSword,
						idle : platinumSword,
						magic : platinumSword,
						shoot : platinumSword,
						swing : platinumSword,
						thrust : platinumSword,
						walk : platinumSword,
			})
		},

		diamondSword: {
			img : singleImage(diamondSword),
			pos : mapTile(0, 140, 64, 64),
			images : partSheetImage({
						hurt : diamondSword,
						idle : diamondSword,
						magic : diamondSword,
						shoot : diamondSword,
						swing : diamondSword,
						thrust : diamondSword,
						walk : diamondSword,
			})
		},

		bronzeMace: {
			img : singleImage(bronzeMace),
			pos : mapTile(0, 150, 128, 128),
			images : partSheetImage({
						hurt : bronzeMace,
						idle : bronzeMace,
						magic : bronzeMace,
						shoot : bronzeMace,
						swing : bronzeMace,
						thrust : bronzeMace,
						walk : bronzeMace,
			}, 128, 124),
		},

		ironMace: {
			img : singleImage(ironMace),
			pos : mapTile(0, 150, 128, 128),
			images : partSheetImage({
						hurt : ironMace,
						idle : ironMace,
						magic : ironMace,
						shoot : ironMace,
						swing : ironMace,
						thrust : ironMace,
						walk : ironMace,
			}, 128, 124),
		},

		goldMace: {
			img : singleImage(goldMace),
			pos : mapTile(0, 150, 128, 128),
			images : partSheetImage({
						hurt : goldMace,
						idle : goldMace,
						magic : goldMace,
						shoot : goldMace,
						swing : goldMace,
						thrust : goldMace,
						walk : goldMace,
			}, 128, 124),
		},

		platinumMace: {
			img : singleImage(platinumMace),
			pos : mapTile(0, 150, 128, 128),
			images : partSheetImage({
						hurt : platinumMace,
						idle : platinumMace,
						magic : platinumMace,
						shoot : platinumMace,
						swing : platinumMace,
						thrust : platinumMace,
						walk : platinumMace,
			}, 128, 124),
		},

		diamondMace: {
			img : singleImage(diamondMace),
			pos : mapTile(0, 150, 128, 128),
			images : partSheetImage({
						hurt : diamondMace,
						idle : diamondMace,
						magic : diamondMace,
						shoot : diamondMace,
						swing : diamondMace,
						thrust : diamondMace,
						walk : diamondMace,
			}, 128, 124),
		},


	},


	range : {
		oakBow: {
			img : singleImage(oakBow),
			pos : mapTile(128, 64, 64, 64),
			images : partSheetImage({
						hurt : oakBow,
						idle : oakBow,
						magic : oakBow,
						shoot : oakBow,
						swing : oakBow,
						thrust : oakBow,
						walk : oakBow,
			})
		},

		mapleBow: {
			img : singleImage(mapleBow),
			pos : mapTile(128, 64, 64, 64),
			images : partSheetImage({
						hurt : mapleBow,
						idle : mapleBow,
						magic : mapleBow,
						shoot : mapleBow,
						swing : mapleBow,
						thrust : mapleBow,
						walk : mapleBow,
			})
		},

		mahogonyBow: {
			img : singleImage(mahogonyBow),
			pos : mapTile(128, 64, 64, 64),
			images : partSheetImage({
						hurt : mahogonyBow,
						idle : mahogonyBow,
						magic : mahogonyBow,
						shoot : mahogonyBow,
						swing : mahogonyBow,
						thrust : mahogonyBow,
						walk : mahogonyBow,
			})
		},

		magicBow: {
			img : singleImage(magicBow),
			pos : mapTile(128, 64, 64, 64),
			images : partSheetImage({
						hurt : magicBow,
						idle : magicBow,
						magic : magicBow,
						shoot : magicBow,
						swing : magicBow,
						thrust : magicBow,
						walk : magicBow,
			})
		},

		superBow: {
			img : singleImage(superBow),
			pos : mapTile(128, 64, 64, 64),
			images : partSheetImage({
						hurt : superBow,
						idle : superBow,
						magic : superBow,
						shoot : superBow,
						swing : superBow,
						thrust : superBow,
						walk : superBow,
			})
		},

		bronzeArrow: {
			img : singleImage(bronzeArrows),
			pos : mapTile(0, 0, 64, 64),
		},

		ironArrow: {
			img : singleImage(ironArrows),
			pos : mapTile(0, 0, 64, 64),
		},

		goldArrow: {
			img : singleImage(goldArrows),
			pos : mapTile(0, 0, 64, 64),
		},

		platinumArrow: {
			img : singleImage(platinumArrows),
			pos : mapTile(0, 0, 64, 64),
		},

		diamondArrow: {
			img : singleImage(diamondArrows),
			pos : mapTile(0, 0, 64, 64),
		}
	},

	armor: {
		bronzeShield: {
			img : singleImage(bronzeShield),
			pos : mapTile(-10, 655, 64, 64),
			images: fullSheetImage(bronzeShield)

		},

		ironShield: {
			img : singleImage(ironShield),
			pos : mapTile(-10, 655, 64, 64),
			images: fullSheetImage(ironShield)

		},

		goldShield: {
			img : singleImage(goldShield),
			pos : mapTile(-10, 655, 64, 64),
			images: fullSheetImage(goldShield)

		},

		platinumShield: {
			img : singleImage(platinumShield),
			pos : mapTile(-10, 655, 64, 64),
			images: fullSheetImage(platinumShield)

		},

		diamondShield: {
			img : singleImage(diamondShield),
			pos : mapTile(-10, 655, 64, 64),
			images: fullSheetImage(diamondShield)

		},

		bronzeHelm: {
			img : singleImage(bronzeHelm),
			pos : mapTile(0, 640, 64, 64),
			images: fullSheetImage(bronzeHelm)

		},

		ironHelm: {
			img : singleImage(ironHelm),
			pos : mapTile(0, 640, 64, 64),
			images: fullSheetImage(ironHelm),

		},

		goldHelm: {
			img : singleImage(goldHelm),
			pos : mapTile(0, 640, 64, 64),
			images: fullSheetImage(goldHelm)
		},

		platinumHelm: {
			img : singleImage(platinumHelm),
			pos : mapTile(0, 640, 64, 64),
			images: fullSheetImage(platinumHelm)
		},

		diamondHelm: {
			img : singleImage(diamondHelm),
			pos : mapTile(0, 640, 64, 64),
			images: fullSheetImage(diamondHelm)
		},

		bronzeChest: {
			img : singleImage(bronzeChest),
			pos : mapTile(0, 655, 64, 64),
			images: fullSheetImage(bronzeChest)
		},

		ironChest: {
			img : singleImage(ironChest),
			pos : mapTile(0, 655, 64, 64),
			images: fullSheetImage(ironChest)
		},

		goldChest: {
			img : singleImage(goldChest),
			pos : mapTile(0, 655, 64, 64),
			images: fullSheetImage(goldChest)
		},

		platinumChest: {
			img : singleImage(platinumChest),
			pos : mapTile(0, 655, 64, 64),
			images: fullSheetImage(platinumChest)
		},

		diamondChest: {
			img : singleImage(diamondChest),
			pos : mapTile(0, 655, 64, 64),
			images: fullSheetImage(diamondChest)
		},
		bronzeLegs: {
			img : singleImage(bronzeLegs),
			pos : mapTile(0, 655, 64, 64),
			images: fullSheetImage(bronzeLegs)
		},
		ironLegs: {
			img : singleImage(ironLegs),
			pos : mapTile(0, 655, 64, 64),
			images: fullSheetImage(ironLegs)
		},
		goldLegs: {
			img : singleImage(goldLegs),
			pos : mapTile(0, 655, 64, 64),
			images: fullSheetImage(goldLegs)
		},
		platinumLegs: {
			img : singleImage(platinumLegs),
			pos : mapTile(0, 655, 64, 64),
			images: fullSheetImage(platinumLegs)
		},
		diamondLegs: {
			img : singleImage(diamondLegs),
			pos : mapTile(0, 655, 64, 64),
			images: fullSheetImage(diamondLegs)
		},
		bronzeBoots: {
			img : singleImage(bronzeBoots),
			pos : mapTile(0, 655, 64, 64),
			images: fullSheetImage(bronzeBoots)
		},
		ironBoots: {
			img : singleImage(ironBoots),
			pos : mapTile(0, 655, 64, 64),
			images: fullSheetImage(ironBoots)
		},
		goldBoots: {
			img : singleImage(goldBoots),
			pos : mapTile(0, 655, 64, 64),
			images: fullSheetImage(goldBoots)
		},
		platinumBoots: {
			img : singleImage(platinumBoots),
			pos : mapTile(0, 655, 64, 64),
			images: fullSheetImage(platinumBoots)
		},
		diamondBoots: {
			img : singleImage(diamondBoots),
			pos : mapTile(0, 655, 64, 64),
			images: fullSheetImage(diamondBoots)
		},
	},
}

export default itemImages;