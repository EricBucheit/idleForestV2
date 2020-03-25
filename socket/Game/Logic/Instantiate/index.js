const {RandomInt} = require("../../Helpers")
const Entity = require('../../Objects/Entity');
const EntityStructure = require('../../Objects/Entity/Template/structure')
const NPCStructure = require('../../Objects/Entity/Template/npc')
const EnemyStructure = require('../../Objects/Entity/Template/enemy')
const OreStructure = require('../../Objects/Entity/Template/ore')
const TreeStructure = require('../../Objects/Entity/Template/tree')
const PlayerStructure = require('../../Objects/Entity/Template/player')
const AnimalStructure = require('../../Objects/Entity/Template/animal')
const UIButtons = require("../../Objects/Buttons")
const Level = require('../../Objects/Level');
const Items = require ("../../Objects/Items");
const Crafting = require("../../Objects/Crafting");
const {register , createPlayerData, login, loadPlayer, loadLevelItems} = require('../../../DataBase/Controllers/users')

const {
        ClickHandler,
        MouseDownHandler,
        KeyPressHandler,
        RightClickHandler,
        LoadHandler,
        SaveHandler,
        MoveHandler,
} = require('../InputHandlers');



class Instantiate {
	constructor() {
		this.EnemyStructure = new EnemyStructure();
		this.OreStructure = new OreStructure();
		this.TreeStructure = new TreeStructure();
		this.PlayerStructure = new PlayerStructure();
		this.AnimalStructure = new AnimalStructure();
		this.NPCStructure = new NPCStructure();
	}

	initialize() {
		let gameInit = {
			players : {},
			items: new Items(),
			UIbuttons: new UIButtons(),
		};

		return (gameInit);

	}

	addItems(items, resource, itemInfo, count) {
		let itemCount = RandomInt(1, count);
		for (let x = 0; x < itemCount; x++) {
			let item = items.getItem(itemInfo.category, itemInfo.subcategory, itemInfo.name);
			resource.inventory.add(item)
		}
	}

	levelLogic(socket, gameState) {
		let player = gameState.players[socket.id].player

		if(player.info.currLevel > player.info.highestLevel) {
			player.info.highestLevel = player.info.currLevel;
		}

		if (player.info.currLevel <= 1) {
			this.clear(socket, gameState)
		} else {
			this.newLevel(socket, gameState)
		}
	}

	clear(socket, gameState) {

		let game = gameState.players[socket.id]
		loadLevelItems(game.player, game.player.info.currLevel, game.level, gameState.items)
		gameState.players[socket.id].enemies = [];
		gameState.players[socket.id].ores = [];
		gameState.players[socket.id].trees = [];
		gameState.players[socket.id].animals = [];
	}

	DrawSort(entity) {
		entity.sort((a, b) => (a.body.pos.y > b.body.pos.y) ? 1 : -1)
	}

	newLevel(socket, gameState) {

		this.clear(socket, gameState);
		let game = gameState.players[socket.id]
		// game.level.addInventoryToLevel(gameState.items, game.player.info.currLevel);
		for (let x = 0; x < RandomInt(3,4); x++) {
			this.Enemy(socket, gameState, gameState.players[socket.id].player.info.currLevel)

		}

		for (let x = 0; x < RandomInt(1,7); x++) {
			this.Ore(socket, gameState, gameState.players[socket.id].player.info.currLevel);
		}

		for (let x = 0; x < RandomInt(1,7); x++) {
			this.Tree(socket, gameState, gameState.players[socket.id].player.info.currLevel);
		}
		
		for (let x = 0; x < RandomInt(1,4); x++) {
			this.Animal(socket, gameState, gameState.players[socket.id].player.info.currLevel);

		}
		this.DrawSort(gameState.players[socket.id].enemies);
		this.DrawSort(gameState.players[socket.id].ores);
		this.DrawSort(gameState.players[socket.id].trees);
		this.DrawSort(gameState.players[socket.id].enemies);
	}

	checkLogin = async (socket, gameState, data) => {
		await login(data.name, data.password, this.ExistingPlayer, {socket, gameState, data})
	}

	checkRegister = async (socket, gameState, data) => {
		register(data.name, data.password, this.NewPlayer, this.ExistingPlayer, {socket, gameState, data})
	}

	NewPlayer = (socket, gameState, data) => {
		gameState.players[socket.id] = {
			player: new Entity(this.PlayerStructure.player(gameState.items, data)),
			enemies : [],
			ores : [],
			trees : [],
			animals: [],
			npcs: {},
			level : new Level(gameState.items),
			crafting : new Crafting(gameState.items),
			ClickHandler: new ClickHandler(),
			MouseDownHandler: new MouseDownHandler(),
			KeyPressHandler: new KeyPressHandler(),
			RightClickHandler: new RightClickHandler(),
			LoadHandler: new LoadHandler(),
			SaveHandler: new SaveHandler(),
			MoveHandler: new MoveHandler(),
		}
		createPlayerData(gameState.players[socket.id].player)
		this.Merchant(socket, gameState)
		// gameState.players[socket.id].level.addInventoryToLevel(gameState.items, 0);
		// gameState.players[socket.id].level.addInventoryToLevel(gameState.items, 1);
	}

	ExistingPlayer = (socket, gameState, data) => {
		gameState.players[socket.id] = {
			player: new Entity(this.PlayerStructure.player(gameState.items, data)),
			enemies : [],
			ores : [],
			trees : [],
			animals: [],
			npcs: {},
			level : new Level(gameState.items),
			crafting : new Crafting(gameState.items),
			ClickHandler: new ClickHandler(),
			MouseDownHandler: new MouseDownHandler(),
			KeyPressHandler: new KeyPressHandler(),
			RightClickHandler: new RightClickHandler(),
			LoadHandler: new LoadHandler(),
			SaveHandler: new SaveHandler(),
			MoveHandler: new MoveHandler(),
		}
		loadPlayer(gameState.players[socket.id].player, gameState.items);
		this.Merchant(socket, gameState)
		
		// gameState.players[socket.id].level.addInventoryToLevel(gameState.items, 0);
		// gameState.players[socket.id].level.addInventoryToLevel(gameState.items, 1);
	}



	Enemy(socket, gameState, level) {
		let itemCount = 4;
		let enemy = new Entity(this.EnemyStructure.randomEnemy(gameState.items, level))
		this.EnemyStructure.randomItems(gameState.items, enemy, level, itemCount);
		gameState.players[socket.id].enemies.push(enemy);
	}

	Ore(socket, gameState, level) {
		let oreStructure = this.OreStructure.ore(gameState.items, level);
		let ore = new Entity(oreStructure);
		let itemInfo = {
							category: "Resources",
							subcategory: "Ores",
							name: oreStructure.itemName, 
					}
		let itemAmount = RandomInt(Math.floor(ore.skills.health.value / 4), Math.ceil(ore.skills.health.value / 1.5))
		this.addItems(gameState.items, ore, itemInfo, itemAmount);
		gameState.players[socket.id].ores.push(ore);
	}

	Tree(socket, gameState, level) {
		let treeStructure = this.TreeStructure.tree(gameState.items, level);
		let tree = new Entity(treeStructure);
		let itemInfo = {
							category: "Resources",
							subcategory: "Wood",
							name: treeStructure.itemName, 
					}
		let itemAmount = RandomInt(Math.floor(tree.skills.health.value / 4), Math.ceil(tree.skills.health.value / 1.5))
		this.addItems(gameState.items, tree, itemInfo, itemAmount);
		gameState.players[socket.id].trees.push(tree);
	}

	Animal(socket, gameState, level) {
		let animalStructure = this.AnimalStructure.animal(gameState.items, level);
		let animal = new Entity(animalStructure);
		animal.body.createPath();
		let itemInfo = {
							category: "Consumeable",
							subcategory: "Food",
							name: animalStructure.itemName, 
					}
		this.addItems(gameState.items, animal, itemInfo, 4);
		gameState.players[socket.id].animals.push(animal);
	}

	
	Merchant(socket, gameState) {
		gameState.players[socket.id].npcs.merchant = new Entity(this.NPCStructure.merchant(gameState.items));

		let merchant = gameState.players[socket.id].npcs.merchant;
		let items = gameState.items;

		merchant.armor.spaces.helm.set(items.getItem("Armor", "Diamond", "helm"));
		merchant.armor.spaces.chest.set(items.getItem("Armor", "Diamond", "chest"));
		merchant.armor.spaces.shield.set(items.getItem("Armor", "Diamond", "shield"));
		
	}

}

module.exports = Instantiate
