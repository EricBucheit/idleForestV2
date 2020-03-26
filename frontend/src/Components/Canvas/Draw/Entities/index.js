import Render from '../Render'
import {
			statusBar, 
			enemyImages, 
			oreImages, 
			treeImages,
			animals,
			playerImages,
			playerShirts,
			playerPants,
			playerHair,
			buttons,
			itemImages,
			spells,
		} from '../../../../Images'

import {playerSounds, soundCheck} from '../../../../Sounds'

function randomInt(min, max) {
   	return Math.floor(Math.random() * (max - min + 1) + min);
}

export default class Entity {
	
	constructor() {
		this.Render = new Render()
	}

	draw(canvas, entities) {
		if (entities.currentPlayer && entities.currentPlayer.navigation.direction === "down") {
			this.currentPlayer(canvas, entities.currentPlayer);
			this.trees(canvas, entities.trees);
			this.ores(canvas, entities.ores);
			this.animals(canvas, entities.animals);
			this.npcs(canvas, entities.npcs);
			this.enemies(canvas, entities.enemies);	
		} else {
			this.trees(canvas, entities.trees);
			this.ores(canvas, entities.ores);
			this.animals(canvas, entities.animals);
			this.npcs(canvas, entities.npcs);
			this.enemies(canvas, entities.enemies);	
			this.currentPlayer(canvas, entities.currentPlayer);
		}
	}


	drawEntityBody(canvas, player) {
		let imgs = playerImages[player.animation.img].images;
		let direction = player.navigation.direction;

		this.Render.img(imgs[player.action].getImg(direction, player.animation.index), player.body.pos.x, player.body.pos.y, player.body.size.x, player.body.size.y, canvas.ctx)
		if (player.animation.shirt) {
			let shirt = playerShirts[player.animation.shirt].images;
			this.Render.img(shirt[player.action].getImg(direction, player.animation.index), player.body.pos.x, player.body.pos.y, player.body.size.x, player.body.size.y, canvas.ctx)
		}

		if (player.animation.pants) {
			let pants = playerPants[player.animation.pants].images;
			this.Render.img(pants[player.action].getImg(direction, player.animation.index), player.body.pos.x, player.body.pos.y, player.body.size.x, player.body.size.y, canvas.ctx)
		}

		if (player.animation.helm.img) {
			let helm = itemImages[player.animation.helm.category][player.animation.helm.img].images;
			this.Render.img(helm[player.action].getImg(direction, player.animation.index), player.body.pos.x, player.body.pos.y, player.body.size.x, player.body.size.y, canvas.ctx)
		} else if (player.animation.hair) {
			let hair = playerHair[player.animation.hair].images;
			this.Render.img(hair[player.action].getImg(direction, player.animation.index), player.body.pos.x, player.body.pos.y, player.body.size.x, player.body.size.y, canvas.ctx)
		}
		if (player.animation.feet.img) {
			let feet = itemImages[player.animation.feet.category][player.animation.feet.img].images;
			this.Render.img(feet[player.action].getImg(direction, player.animation.index), player.body.pos.x, player.body.pos.y, player.body.size.x, player.body.size.y, canvas.ctx)
		} 
		if (player.animation.legs.img) {
			let legs = itemImages[player.animation.legs.category][player.animation.legs.img].images;
			this.Render.img(legs[player.action].getImg(direction, player.animation.index), player.body.pos.x, player.body.pos.y, player.body.size.x, player.body.size.y, canvas.ctx)
		} 

		if (player.animation.chest.img) {
			let chest = itemImages[player.animation.chest.category][player.animation.chest.img].images;
			this.Render.img(chest[player.action].getImg(direction, player.animation.index), player.body.pos.x, player.body.pos.y, player.body.size.x, player.body.size.y, canvas.ctx)
		} 

		if (player.animation.shield.img) {
			let shield = itemImages[player.animation.shield.category][player.animation.shield.img].images;
			this.Render.img(shield[player.action].getImg(direction, player.animation.index), player.body.pos.x, player.body.pos.y, player.body.size.x, player.body.size.y, canvas.ctx)
		}


	}

	currentPlayer(canvas, player) {
		if (player) {
			if (player.animation.img) {
				let direction = player.navigation.direction;

				this.drawEntityBody(canvas, player)

				if (player.action === 'magic') {
					if (player.animation.magicIndex === 1) {
						soundCheck(playerSounds.magic, player.sound)
					}
					if (player.animation.magicImg) {
						this.Render.img(spells[player.animation.magicImg].images.getImg(player.animation.magicIndex), player.body.pos.x - 16, player.body.pos.y - 16, player.body.size.x * 2, player.body.size.y * 2, canvas.ctx)
					}
				}

				if (player.action === "swing") {
					if (player.animation.index === 3) {
						soundCheck(playerSounds.swing, player.sound);
					}
					
					if (player.task === "fight" || player.task === "hunt") {

						if (player.animation.index === 5) {
							soundCheck(playerSounds.hit1, player.sound);
						}
						if (player.animation.weapon.img) {
							let weapon = itemImages[player.animation.weapon.category][player.animation.weapon.img].images;
							this.Render.img(weapon[player.action].getImg(direction, player.animation.index), player.body.pos.x, player.body.pos.y, player.body.size.x, player.body.size.y, canvas.ctx)
						}
					}
					if (player.task === "woodcut") {
						if (player.animation.index === 5) {
							soundCheck(playerSounds.hit, player.sound);
						}
						if (player.animation.axe.img) {
							let axe = itemImages[player.animation.axe.category][player.animation.axe.img].images;
							this.Render.img(axe[player.action].getImg(direction, player.animation.index), player.body.pos.x, player.body.pos.y, player.body.size.x, player.body.size.y, canvas.ctx)
						} 
					}

					if (player.task === "mine") {
						if (player.animation.index === 5) {
							soundCheck(playerSounds.oreHit, player.sound);
						}
						if (player.animation.pickaxe.img) {
							let pickaxe = itemImages[player.animation.pickaxe.category][player.animation.pickaxe.img].images;
							this.Render.img(pickaxe[player.action].getImg(direction, player.animation.index), player.body.pos.x, player.body.pos.y, player.body.size.x, player.body.size.y, canvas.ctx)
						} 
					}
				}
				if (player.action === "shoot") {
					if (player.task === "fight" || player.task === "hunt") {
						if (player.animation.index === 5) {
							soundCheck(playerSounds.hit1, player.sound);
						}
						if (player.animation.bow.img) {
							let bow = itemImages[player.animation.bow.category][player.animation.bow.img].images;
							this.Render.img(bow[player.action].getImg(direction, player.animation.index), player.body.pos.x, player.body.pos.y, player.body.size.x, player.body.size.y, canvas.ctx)
						}
					}
				}
            } else {
                canvas.ctx.beginPath();
                canvas.ctx.strokeStyle = player.body.color
                canvas.ctx.rect(player.body.pos.x, player.body.pos.y, player.body.size.x, player.body.size.y);
                canvas.ctx.stroke();
            }
            
            if (player.hitBubble) {
					this.Render.img(buttons.redHitBubble, player.hitBubble.x, player.hitBubble.y, 20, 20, canvas.ctx)
					this.Render.text(player.hitBubble.value, player.hitBubble.x + 6,  player.hitBubble.y + 12, "8", canvas.ctx, "purple")
			}
		}
	}

	scale(value, x1, y1, x2, y2) {
		return ((value - x1) * (y2 - x2) / (y1 - x1) + x2)
	}

	cornerHealthStats (canvas, player) {
		
		if(!player) {
			return false
		}
		const xOffset = 35;

		this.Render.img(statusBar.empty, xOffset, 0, 50, 15, canvas.ctx);
		this.Render.img(statusBar.empty, xOffset, 15, 50, 15, canvas.ctx);
		this.Render.img(statusBar.empty, xOffset, 30, 50, 15, canvas.ctx);

		let scaledHealth = this.scale(player.skills.health.current, 0, player.skills.health.value, 0 , 50)
		this.Render.img(statusBar.health, xOffset, 0, scaledHealth, 15, canvas.ctx);

		let scaledThirst = this.scale(player.skills.thirst.current, 0, player.skills.thirst.value, 0 , 50)
		this.Render.img(statusBar.thirst, xOffset, 15, scaledThirst, 15, canvas.ctx);

		let scaledHunger = this.scale(player.skills.hunger.current, 0, player.skills.hunger.value, 0 , 50)
		this.Render.img(statusBar.hunger, xOffset, 30, scaledHunger, 15, canvas.ctx);

		this.Render.text("HP:", 5, 8, "8", canvas.ctx, "purple")
		this.Render.text("Thirst:", 5, 24, "8", canvas.ctx, "purple")
		this.Render.text("Hunger:", 5, 40, "8", canvas.ctx, "purple")
		this.Render.text("Level:" + player.info.currentLevel, 10, 54, "10", canvas.ctx, "purple");

  	}

  	health(canvas, entity) {
  		let offset= 5;
  		if (entity.body.size.y >= 64)
  		{
  			offset = -10;
  		}
  		let scaledHealth = this.scale(entity.skills.health.current, 0, entity.skills.health.value, 0 , entity.body.size.x)
  		this.Render.img(statusBar.empty, entity.body.pos.x, entity.body.pos.y - offset, entity.body.size.x, 5, canvas.ctx);
		this.Render.img(statusBar.health,  entity.body.pos.x,  entity.body.pos.y -offset, scaledHealth, 5, canvas.ctx);

  	}

  	resourceImage(canvas, entity, imgSrc) {
  		if (entity.animation.img) {
    		let img = imgSrc[entity.animation.img];
			this.Render.img(img, entity.body.pos.x, entity.body.pos.y, entity.body.size.x, entity.body.size.y, canvas.ctx)
            this.health(canvas,entity)
    	} else {
            canvas.ctx.beginPath();
            canvas.ctx.strokeStyle = "GREEN"
            canvas.ctx.rect(entity.body.pos.x, entity.body.pos.y, entity.body.size.x, entity.body.size.y);
            canvas.ctx.stroke();
    	}
  	}

  	noImg(canvas, entity) {
  		canvas.ctx.beginPath();
        canvas.ctx.strokeStyle = "red"
        canvas.ctx.rect(entity.body.pos.x, entity.body.pos.y, entity.body.size.x, entity.body.size.y);
        canvas.ctx.stroke();
  	}

	drawEntity(canvas, entity) {
		if (entity) {
            for (var x = 0; x < entity.length; x++) {
                if (entity[x]) {
                	if (entity[x].info.type === 'enemy') {
	                	if (entity[x].animation.img) {
	                		let imgs = enemyImages[entity[x].animation.img].images;
		 					this.Render.img(imgs[entity[x].action].getImg(entity[x].navigation.direction, entity[x].animation.index), entity[x].body.pos.x, entity[x].body.pos.y, entity[x].body.size.x, entity[x].body.size.y, canvas.ctx)
		                    this.health(canvas,entity[x])
	                	} else {
		                    this.noImg(canvas, entity[x])
	                	}
                	} else if (entity[x].info.type === "animal"){
                		if (entity[x].animation.img) {
                			console.log()
	                		let imgs = animals[entity[x].animation.img].images;
		 					this.Render.img(imgs[entity[x].action].getImg(entity[x].navigation.direction, entity[x].animation.index), entity[x].body.pos.x, entity[x].body.pos.y, entity[x].body.size.x, entity[x].body.size.y, canvas.ctx)
		                    this.health(canvas, entity[x])
	                	} else {
		                    this.noImg(canvas, entity[x])
	                	}
                	} else if (entity[x].info.type === 'ore') {
                		this.resourceImage(canvas, entity[x], oreImages);
                	} else if (entity[x].info.type === 'tree') {
                		this.resourceImage(canvas, entity[x], treeImages)
                	} else {
                		this.noImg(canvas, entity[x])
                	}
                	if (entity[x].hitBubble) {
						this.Render.img(buttons.redHitBubble, entity[x].hitBubble.x, entity[x].hitBubble.y + 5, 20, 20, canvas.ctx)
						this.Render.text(entity[x].hitBubble.value, entity[x].hitBubble.x + 6,  entity[x].hitBubble.y + 17, "8", canvas.ctx, "purple")	
                	}
                }
        	}

        }
	}


	enemies(canvas, enemies) {
		this.drawEntity(canvas, enemies)
	}

	trees(canvas, trees) {
		this.drawEntity(canvas, trees)
	}

	ores(canvas, ores) {
		this.drawEntity(canvas, ores)
	}

	animals(canvas, animals) {
		this.drawEntity(canvas, animals)
	}

	npcs(canvas, npcs) {
		if (npcs && npcs.merchant) {
			this.drawEntityBody(canvas, npcs.merchant);
		}
	}
}