import {
	background, 
	buttons, 
	playerImages,
	playerShirts,
	playerPants,
	playerHair
} from '../../../../../Images'
import Render from '../../Render'
import {userMessage, button} from '../../../Helpers'
import Letters from './letters'

export default class StartScreen {
	constructor() {
		let letters = new Letters();
		this.start = false;
		this.screen = 'main';
		this.credits = "";
		this.sound = true;
		this.render = new Render();
		this.difficulties = {
			index : 0,
			options : ['Easy', "Medium", "Hard"],
			change : function() {
				this.index++;
				if (this.index >= this.options.length) this.index = 0
			},
			difficulty : function() {
				return (this.options[this.index]);
			}
		}

		this.userMessage = userMessage();

		this.makeBackground();
		this.makeHalfBackground()
		this.makeStartScreen()
		this.makeLogoutScreen();
		this.makeOptionScreen()
		this.makeCreditScreen();
		this.creditsYOffset = 0;



		this.makeChooseNameScreen(letters.letters);
		this.makeChoosePasswordScreen(letters.letters)
		this.makeChoosePlayerScreen()
	}

	package() {
		return ({
			sound : this.sound,
			difficulty : this.difficulties.difficulty(),
			name : this.chooseName.value,
			password : this.choosePassword.value,
			skin : this.player.skin.types[this.player.skin.index].name,
			shirt : this.player.shirt.types[this.player.shirt.index].name,
			pants : this.player.pants.types[this.player.pants.index].name,
			hair : this.player.hair.types[this.player.hair.index].name,
			info : '',
		})
	}

	loginEvent(login) {
		if (login.success === true) {
			this.userMessage.success(login.message)
			this.start = true;
		} else if (login.exists === true || login.error) {
			this.userMessage.warning(login.message)
		} else {
			this.userMessage.success(login.message)
			this.screen = 'character';
		}
	}

	pause() {
		this.screen = "logout";
		this.start = false
	}

	logoutEvent(logout) {
		if (logout.success === true) {
			this.userMessage.success(logout.message)
			this.start = false;
			this.screen = 'name';
		}
	}

	registerEvent(register) {
		if (register === true) {
			this.start = true;
		}
	}

	reset() {
		this.start = false;
		this.screen = "name";
	}

	run(canvas) {
		if (this.start) return false;
		
		this.background.display(canvas.ctx);
		
		if (this.screen === 'logout') {
			this.resumeButton.display(canvas.ctx)
			this.logoutButton.display(canvas.ctx);
		}

		if (this.screen === 'main') {
			this.startButton.display(canvas.ctx);
			this.optionsButton.display(canvas.ctx);
			this.creditsButton.display(canvas.ctx);
		}

		if (this.screen === 'options') {
			this.optionsBackButton.display(canvas.ctx)
			this.soundButton.display(canvas.ctx)
			this.difficultyButton.display(canvas.ctx)
		}

		if (this.screen === 'credits') {
			this.renderCredits(canvas.ctx)
			this.halfBackground.display(canvas.ctx);

			this.creditsBackButton.display(canvas.ctx);
		}

		if (this.screen === 'name') {
			this.chooseName.display(canvas.ctx)
			this.chooseName.deleteButton.display(canvas.ctx)
			this.chooseNameNextButton.display(canvas.ctx)
			this.chooseNameBackButton.display(canvas.ctx)
		}

		if (this.screen === 'password') {	
			this.choosePassword.display(canvas.ctx)
			this.choosePassword.deleteButton.display(canvas.ctx)
			this.choosePasswordNextButton.display(canvas.ctx)
			this.choosePasswordBackButton.display(canvas.ctx)
		}

		if (this.screen === 'character') {
			this.player.display(canvas.ctx)
			this.choosePlayerNextButton.display(canvas.ctx)
			this.choosePlayerBackButton.display(canvas.ctx)
		}
		this.userMessage.display(canvas.ctx);

	}

	onClick(mouse, canvas, socket) {
		if (this.screen === 'main') {
			if (this.startButton.onClick(mouse, canvas)) {
				this.screen = 'name'
			}
			if (this.optionsButton.onClick(mouse, canvas)) this.screen = 'options'
			if (this.creditsButton.onClick(mouse, canvas)) {
				this.screen = 'credits'
				socket.emit("getCredits")
			}
		} else if (this.screen === 'logout') {
			if(this.logoutButton.onClick(mouse, canvas)) {
				socket.emit('logout');
				this.screen = 'name'
				this.start = false
			}
			if (this.resumeButton.onClick(mouse, canvas)) {
				this.start = true;
			}
		}
		else if (this.screen === 'options') {
			if (this.optionsBackButton.onClick(mouse, canvas)) this.screen = "main"
			
			if (this.soundButton.onClick(mouse, canvas)) {
				this.sound = !this.sound
				this.soundButton.changeInfo(`Sound ${this.sound ? "On" : "OFF"}`)
			}

			if (this.difficultyButton.onClick(mouse, canvas)) {
				this.difficulties.change();
				this.difficultyButton.changeInfo(this.difficulties.options[this.difficulties.index])
			}
		}

		else if (this.screen === 'credits') {
			if(this.creditsBackButton.onClick(mouse, canvas)) this.screen = 'main'
		}

		else if (this.screen === 'name') {
			this.chooseName.onClick(mouse, canvas)
			this.chooseName.delete(mouse, canvas)
			if(this.chooseNameNextButton.onClick(mouse, canvas)) this.screen = 'password'
			if (this.chooseNameBackButton.onClick(mouse, canvas)) this.screen = 'main'	
		}

		else if (this.screen === 'password') {
			this.choosePassword.onClick(mouse, canvas)
			this.choosePassword.delete(mouse, canvas)
			if(this.choosePasswordNextButton.onClick(mouse, canvas)) {
				socket.emit('login', {name: this.chooseName.value, password: this.choosePassword.value});
			} 
			if (this.choosePasswordBackButton.onClick(mouse, canvas)) this.screen = 'name'	
		}

		else if (this.screen === 'character') {
			if (this.choosePlayerNextButton.onClick(mouse, canvas)) {
				socket.emit('register', this.package());
			}
			if (this.choosePlayerBackButton.onClick(mouse, canvas)) this.screen = "password"
			this.player.onClick(mouse, canvas)
		}

	}

	onKeyPress(e) {
		if(e.key === '\\' || e.key === "Enter") return false
		
		if (this.screen === 'name') {
			this.chooseName.add(e.key);
		}

		else if (this.screen === 'password') {
			this.choosePassword.add(e.key);
		}

	}

	onKeyDown(e, socket) {
		
		if (e.keyCode === 8) {
			if (this.screen === 'name') {
				this.chooseName.keyPressDelete();
			}
			else if (this.screen === 'password') {
				this.choosePassword.keyPressDelete();
			}
		}

		if (e.keyCode === 13) {
			if (this.screen === 'name') {
				this.screen = 'password'
			}
			else if (this.screen === 'password') {
				socket.emit('login', {name: this.chooseName.value, password: this.choosePassword.value});

			}

		}
	}

	makeBackground() {
		this.background = button({
							img : background.bankBackGround,
							info: "IDLE FOREST",
							pos : {
								x: 0, 
								y : 0, 
								width: 480, 
								height: 480,
							},
							text : {
								x: 70,
								y: 100,
								fontsize : 50,
							},
						})
	}

	makeHalfBackground() {
		this.halfBackground = button({
							img : background.bankBackGround,
							info: "A BIG THANK YOU",
							pos : {
								x: 0, 
								y : 0, 
								width: 480, 
								height: 220,
							},
							text : {
								x: 20,
								y: 100,
								fontsize : 50,
							},
						})
	}

	makeLogoutScreen() {

		this.resumeButton = button({
								img : buttons.greenButton,
								info: "Resume",
								pos : {
									x: 150, 
									y : 200, 
									width: 200, 
									height: 100,
								},

								text : {
									x: 35,
									y: 60,
									fontsize : 40,
								},
							})

		this.logoutButton = button({
								img : buttons.redButton,
								info: "Logout",
								pos : {
									x: 150, 
									y : 300, 
									width: 200, 
									height: 100,
								},

								text : {
									x: 35,
									y: 60,
									fontsize : 40,
								},
							})
	}

	makeStartScreen() {
			this.startButton = button({
								img : buttons.greenButton,
								info: "Start",
								pos : {
									x: 150, 
									y : 100, 
									width: 200, 
									height: 100,
								},

								text : {
									x: 35,
									y: 60,
									fontsize : 40,
								},
							})

			this.optionsButton = button({
								img : buttons.greenButton,
								info: "Options",
								pos : {
									x: 150, 
									y : 200, 
									width: 200, 
									height: 100,
								},

								text : {
									x: 25,
									y: 60,
									fontsize : 40,
								},
							})
			this.creditsButton = button({
								img : buttons.aquaButton,
								info: "Credits",
								pos : {
									x: 150, 
									y : 300, 
									width: 200, 
									height: 100,
								},

								text : {
									x: 35,
									y: 60,
									fontsize : 40,
								},
							})
		}

		makeOptionScreen() {
			this.optionsBackButton = button({
								img : buttons.redButton,
								info: "Back",
								pos : {
									x: 150, 
									y : 100, 
									width: 200, 
									height: 100,
								},

								text : {
									x: 35,
									y: 60,
									fontsize : 40,
								},
							})
			this.soundButton = button({
								img : buttons.aquaButton,
								info: "Sound On",
								pos : {
									x: 150, 
									y : 200, 
									width: 200, 
									height: 100,
								},

								text : {
									x: 35,
									y: 60,
									fontsize : 30,
								},
							})
			this.difficultyButton = button({
								img : buttons.aquaButton,
								info: "Easy",
								pos : {
									x: 150, 
									y : 300, 
									width: 200, 
									height: 100,
								},

								text : {
									x: 30,
									y: 60,
									fontsize : 30,
								},
							})
			
		}

		makeCreditScreen() {
			this.creditsBackButton = button({
								img : buttons.redButton,
								info: "Back",
								pos : {
									x: 150, 
									y : 100, 
									width: 200, 
									height: 100,
								},

								text : {
									x: 30,
									y: 60,
									fontsize : 30,
								},
							})
		}

		renderCredits(ctx) {

			this.creditsYOffset -= 1;
			if (this.credits) {
				this.render.textLinesByLength(this.credits, 20,this.creditsYOffset + 220,15,ctx)
			}
		}

		makeChooseNameScreen(letters) {
			let deleteButton = button({
							img : buttons.redButton,
							info: "Del",
							pos : {
								x: 390, 
								y : 250, 
								width: 90, 
								height: 45,
							},

							text : {
								x: 30,
								y: 25,
								fontsize : 15,
							},
			})

			this.chooseName = {
				label : "Name :",
				letters : letters,
				draw: new Render(),
				value: '',

				deleteButton: deleteButton,

				display(ctx) {
					this.draw.textLine(this.label, 120, 330, 35, ctx, "white");
					this.draw.textLine(this.value, 240, 330, 35, ctx, "white");
					for (let x = 0; x < this.letters.length; x++) {
						this.letters[x].display(ctx)
					}
				},

				add : function(letter) {
					this.value = this.value += letter;
				},

				keyPressDelete : function() {
					this.value = this.value.substring(0, this.value.length - 1);
				},

				delete : function(mouse,canvas) {
					if (this.deleteButton.onClick(mouse, canvas)) {
						this.value = this.value.substring(0, this.value.length - 1);
						return true
					}
					return false
				},

				onClick : function(mouse,canvas) {
					for (let x = 0; x < this.letters.length; x++) {
						let currLetter = this.letters[x].onClick(mouse,canvas);
						if (currLetter) {
							this.add(currLetter);
							return true
						}
					}
					return false
				}
			}
			
			this.chooseNameNextButton = button({
							img : buttons.greenButton,
							info: "Next",
							pos : {
								x: 240, 
								y : 400, 
								width: 100, 
								height: 50,
							},

							text : {
								x: 20,
								y: 30,
								fontsize : 20,
							},
			})

			this.chooseNameBackButton = button({
							img : buttons.redButton,
							info: "Back",
							pos : {
								x: 130, 
								y : 400, 
								width: 100, 
								height: 50,
							},

							text : {
								x: 20,
								y: 30,
								fontsize : 20,
							},
			})

		}

		makeChoosePasswordScreen(letters) {
			let deleteButton = button({
							img : buttons.redButton,
							info: "Del",
							pos : {
								x: 390, 
								y : 250, 
								width: 80, 
								height: 40,
							},

							text : {
								x: 20,
								y: 25,
								fontsize : 15,
							},
			})

			this.choosePassword = {
				label : "Password:",
				letters : letters,
				draw: new Render(),
				value: '',
				mask : '',

				deleteButton: deleteButton,

				display(ctx) {
					this.draw.textLine(this.label, 120, 330, 35, ctx, "white");
					this.draw.textLine(this.mask, 280, 330, 35, ctx, "white");

					for (let x = 0; x < this.letters.length; x++) {
						this.letters[x].display(ctx)
					}
				},

				add : function(letter) {
					this.value = this.value += letter;
					this.mask = this.mask += "*";
				},

				keyPressDelete : function() {
					this.value = this.value.substring(0, this.value.length - 1);
					this.mask = this.mask.substring(0, this.mask.length - 1);

				},

				delete : function(mouse,canvas) {
					if (this.deleteButton.onClick(mouse, canvas)) {
						this.value = this.value.substring(0, this.value.length - 1);
						this.mask = this.mask.substring(0, this.mask.length - 1);
						return true
					}
					return false
				},

				onClick : function(mouse,canvas) {
					for (let x = 0; x < this.letters.length; x++) {
						let currLetter = this.letters[x].onClick(mouse,canvas);
						if (currLetter) {
							this.add(currLetter);
							return true
						}
					}
					return false
				}
			}
			
			this.choosePasswordNextButton = button({
							img : buttons.greenButton,
							info: "Next",
							pos : {
								x: 240, 
								y : 400, 
								width: 100, 
								height: 50,
							},

							text : {
								x: 20,
								y: 30,
								fontsize : 20,
							},
			})

			this.choosePasswordBackButton = button({
							img : buttons.redButton,
							info: "Back",
							pos : {
								x: 130, 
								y : 400, 
								width: 100, 
								height: 50,
							},

							text : {
								x: 20,
								y: 30,
								fontsize : 20,
							},
			})

		}


		characterPrevButtons = (x, y) => {
			return (button({
							img : buttons.aquaButton,
							info: "<",
							pos : {
								x: x, 
								y : y, 
								width: 50, 
								height: 50,
							},

							text : {
								x: 20,
								y: 30,
								fontsize : 30,
								color: "white"
							},
			}))
		}

		characterNextButtons = (x, y) => {
			return(button({
							img : buttons.aquaButton,
							info: ">",
							pos : {
								x: x, 
								y : y, 
								width: 50, 
								height: 50,
							},

							text : {
								x: 20,
								y: 30,
								fontsize : 30,
								color: "white"
							},
			}))

		}
		
		makeChoosePlayerScreen() {
			this.choosePlayerNextButton = button({
							img : buttons.greenButton,
							info: "Play",
							pos : {
								x: 240, 
								y : 400, 
								width: 100, 
								height: 50,
							},

							text : {
								x: 20,
								y: 30,
								fontsize : 20,
							},
			})

			this.choosePlayerBackButton = button({
							img : buttons.redButton,
							info: "Back",
							pos : {
								x: 130, 
								y : 400, 
								width: 100, 
								height: 50,
							},

							text : {
								x: 20,
								y: 30,
								fontsize : 20,
							},
			})

			let characterNextButtons = this.characterNextButtons;
			let characterPrevButtons = this.characterPrevButtons;

			this.player = {
				draw : new Render(),

				display : function(ctx) {
					this.displayCharacter(ctx);
					this.displayButtons(ctx);
				},

				displayCharacter(ctx) {
					let x = 175;
					let y = 175;
					
					let skin = this.skin.types[this.skin.index].img.images
					let shirt = this.shirt.types[this.shirt.index].img.images
					let pants = this.pants.types[this.pants.index].img.images
					let hair = this.hair.types[this.hair.index].img.images
					
					this.draw.img(skin['idle'].getImg(this.direction.face[this.direction.index], 0), x, y, 128,128, ctx)
					this.draw.img(shirt['idle'].getImg(this.direction.face[this.direction.index], 0), x, y, 128,128, ctx)
					this.draw.img(pants['idle'].getImg(this.direction.face[this.direction.index], 0), x, y, 128,128, ctx)
					this.draw.img(hair['idle'].getImg(this.direction.face[this.direction.index], 0), x, y, 128,128, ctx)

				},

				displayButtons(ctx) {
					this.skin.prevButton.display(ctx);
					this.skin.nextButton.display(ctx);

					this.hair.prevButton.display(ctx);
					this.hair.nextButton.display(ctx);

					this.shirt.prevButton.display(ctx);
					this.shirt.nextButton.display(ctx);

					this.pants.prevButton.display(ctx);
					this.pants.nextButton.display(ctx);

					this.direction.prevButton.display(ctx);
					this.direction.nextButton.display(ctx);

				},

				onClick(canvas, mouse) {
					this.skin.onClick(canvas, mouse);
					this.hair.onClick(canvas, mouse);
					this.shirt.onClick(canvas, mouse);
					this.pants.onClick(canvas, mouse);
					this.direction.onClick(canvas, mouse);

				},

				direction: {
					face : [
							"down",
							"right",
							"up",
							"left",
							 ],
					index : 0,

					onClick : function(canvas, mouse) {
						if (this.prevButton.onClick(canvas, mouse)) {
							this.index--;
							if (this.index < 0) this.index = this.face.length - 1;
						}
						if (this.nextButton.onClick(canvas, mouse)) {
							this.index++;
							if (this.index >= this.face.length) this.index = 0;
						}
					},

					prevButton : characterPrevButtons(130, 325),
					nextButton : characterNextButtons(290, 325),
				},
				hair: {
					types : [
							 {img: playerHair.black, name: "black"},
							 {img: playerHair.brown, name: "brown"},
							 {img: playerHair.gold, name: "gold"},
							 {img: playerHair.red, name: "red"},
							 {img: playerHair.darkRed, name: "darkRed"},
							 ],
					index: 0,

					onClick : function(canvas, mouse) {
						if (this.prevButton.onClick(canvas, mouse)) {
							this.index--;
							if (this.index < 0) this.index = this.types.length - 1;
						}
						if (this.nextButton.onClick(canvas, mouse)) {
							this.index++;
							if (this.index >= this.types.length) this.index = 0;
						}
					},
					prevButton : characterPrevButtons(130, 125),
					nextButton : characterNextButtons(290, 125),
				},

				skin: {
					types : [
							 {img: playerImages.coffee, name: "coffee"},
							 {img: playerImages.comet, name: "comet"},
							 {img: playerImages.copper, name: "copper"},
							 {img: playerImages.dove, name: "dove"},
							 {img: playerImages.gold, name: "gold" },
							 {img: playerImages.gray, name: "gray"},
							 {img: playerImages.ivory, name: "ivory"},
							 {img: playerImages.sienna, name: "sienna"},
							 ],
					index : 0,

					onClick : function(canvas, mouse) {
						if (this.prevButton.onClick(canvas, mouse)) {
							this.index--;
							if (this.index < 0) this.index = this.types.length - 1;
						}
						if (this.nextButton.onClick(canvas, mouse)) {
							this.index++;
							if (this.index >= this.types.length) this.index = 0;
						}
					},

					prevButton : characterPrevButtons(130, 175),
					nextButton : characterNextButtons(290, 175),
				},

				shirt: {
					types : [
							 {img: playerShirts.black, name: "black"},
							 {img: playerShirts.blue, name: "blue"},
							 {img: playerShirts.forest, name: "forest"},
							 {img: playerShirts.gray, name: "gray"},
							 {img: playerShirts.lavender, name: "lavender"},
							 {img: playerShirts.sky, name: "sky"},
							 {img: playerShirts.teal, name: "teal"},
							 ],
					index: 0,

					onClick : function(canvas, mouse) {
						if (this.prevButton.onClick(canvas, mouse)) {
							this.index--;
							if (this.index < 0) this.index = this.types.length - 1;
						}
						if (this.nextButton.onClick(canvas, mouse)) {
							this.index++;
							if (this.index >= this.types.length) this.index = 0;
						}
					},

					prevButton : characterPrevButtons(130, 225),
					nextButton : characterNextButtons(290, 225),
				},

				pants: {
					types : [
							 {img: playerPants.black, name: "black" },
							 {img: playerPants.blue, name: "blue" },
							 {img: playerPants.forest, name: "forest" },
							 {img: playerPants.gray, name: "gray" },
							 {img: playerPants.lavender, name: "lavender" },
							 {img: playerPants.sky, name: "sky" },
							 {img: playerPants.teal, name: "teal" },
							 ],
					index: 0,

					onClick : function(canvas, mouse) {
						if (this.prevButton.onClick(canvas, mouse)) {
							this.index--;
							if (this.index < 0) this.index = this.types.length - 1;
						}
						if (this.nextButton.onClick(canvas, mouse)) {
							this.index++;
							if (this.index >= this.types.length) this.index = 0;
						}
					},

					prevButton : characterPrevButtons(130, 275),
					nextButton : characterNextButtons(290, 275),

				}
			}



		}


		
}