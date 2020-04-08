const {RigidBody, Timer} = require('../../../Helpers')
const {actionButtonPanelSettings, hitBubbleSettings} = require('../../../../GlobalSettings')

class Action {
	constructor(info) {
		this.current = info.current || "idle";
		this.task = info.task || "none";
		
		let pos = {
				x: actionButtonPanelSettings.x,
				y: actionButtonPanelSettings.y,
		}

		let xOffset = actionButtonPanelSettings.xOffset
		
		this.buttons = {
			walk : this.toggleSwitch("Pause", info.walk || true, pos.x += xOffset, pos.y),
			home : this.toggleSwitch("Home", info.home || false, pos.x += xOffset, pos.y),
			farm : this.toggleSwitch("Farm", info.farm || false, pos.x += xOffset, pos.y),
			mine : this.toggleSwitch("Mine", info.mine || false, pos.x += xOffset, pos.y),
			woodCut : this.toggleSwitch("WoodCut", info.woodCut || false, pos.x += xOffset, pos.y),
			hunt : this.toggleSwitch("Hunt", info.hunt || false, pos.x += xOffset, pos.y),
		}

		this.hitBubble = this.makeHitBubble()
		this.teleported = false

	}

	makeHitBubble () {
		return ({
			value: false,
			body: new RigidBody(hitBubbleSettings.body),
			img: "redHitBubble",
			timer : new Timer(hitBubbleSettings.timer),
			moveTimer : new Timer(hitBubbleSettings.moveTimer),
			y: 0,

			done: function() {
				if (this.timer.check()) {
					this.value = false
					this.y = 0;
				}
			},

			move : function() {
				if (this.moveTimer.check()) {
					this.y++;
				}
			},

			check : function() {
				this.done();
				this.move();
			},

			set : function(value, x, y) {
				this.value = value;
				this.body.pos.x = x;
				this.body.pos.y = y;
				this.timer.reset();
				this.moveTimer.reset()
				this.y = 0;
			},
			package : function() {
				if (this.value === false) return false
				return {x: this.body.pos.x, y: this.body.pos.y - this.y, value: this.value, img: this.img}
			}

		})
	}

	currentTarget(socket, gameState) {
		let player = gameState.players[socket.id].player;
		if (!this.buttons.walk.state) {
			return ({ 
						destination: "stop",
						action: "none",
					})
		}

		if (gameState.players[socket.id].enemies.length) {
			return ({ 
						destination: "enemies",
						action: "enemy"
					});
		}

		if (this.buttons.mine.state && gameState.players[socket.id].ores.length) {
			return ({ 
						destination: "ores",
						action: "mine"
					});
		}

		if (this.buttons.woodCut.state && gameState.players[socket.id].trees.length) {
			return ({ 
						destination: "trees",
						action: "woodcut"
					});
		}

		if (this.buttons.hunt.state && gameState.players[socket.id].animals.length) {
			return ({ 
						destination: "animals",
						action: "hunt"
					});
		}

		if (this.buttons.home.state) {
			if (player.info.currLevel === 1) {
				if (player.info.menu.current === "bank") {
					return ({
							destination: "bank",
							action : "walk",
						})
				} else if (player.info.menu.current === "waterSource") {
						return ({
							destination: "waterSource",
							action : "walk",
						})
				} else if (player.info.menu.current === "craft") {
						return ({
							destination: "craft",
							action : "walk",
						})
				} else if (player.info.menu.current === "cook") {
						return ({
							destination: "cook",
							action : "walk",
						})
				} else if (player.info.menu.current === "buy") {
						return ({
							destination: "buy",
							action : "walk",
						})
				} else {
					return ({
							destination: "centerLevel",
							action : "walk",
						})

				}

			}
			if (player.info.currLevel === 0) {
				return ({
							destination: "nextLevel",
							action : "walk",

						})
			}
			return ({
						destination: "prevLevel",
						action : "walk",

					});
		}

		if (this.buttons.farm.state) {
			if (player.info.currLevel === 0) {
				return ({ 
							destination: "centerLevel",
							action : "walk",
						})
			}
			if (player.info.currLevel === 1) {
				return ({ 
							destination: "prevLevel",
							action : "walk",
						})
			}
			return ({ 
					destination: "prevLevel",
					action : "walk",
				});
		}

		return ({
					destination: "nextLevel",
					action: "walk"
				});
	}

	toggleSwitch(name, state, x, y) {

		return ({
					name : name,
					state : state,
					body : new RigidBody({x : x, y: 440, width: 50, height:30}),

					start : function() {
						this.state = true;
					},

					stop : function() {
						this.state = false;
					},

					toggle : function() {
						this.state = !this.state
					},

					label : function() {
						if (this.state) {
							return this.name + "\nStop";
						} else {
							return this.name + "\nStart";
						}
					},

					button : function() {
						if (this.state) {
							return "redButton"
						} else {
							return "greenButton"
						}
					}
				})
	}
}

module.exports = Action;