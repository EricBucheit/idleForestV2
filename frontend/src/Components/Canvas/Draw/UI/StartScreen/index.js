import {
	background, 
	buttons, 
	playerImages,
	playerShirts,
	playerPants,
	playerHair
} from '../../../../../Images'
import Render from '../../Render'
import {RigidBody, ClickHandler, Timer, userMessage} from '../../../Helpers'
import Letters from './letters'
import {music} from '../../../../../Sounds'

export default class StartScreen {
	constructor() {
		let letters = new Letters();
		this.start = false;
		this.screen = 'main';
		this.sound = true;
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
		this.makeStartScreen()
		this.makeLogoutScreen();
		this.makeOptionScreen()
		this.makeCreditScreen();
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
			if (this.creditsButton.onClick(mouse, canvas)) this.screen = 'credits'
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

	button(settings) {

		let img = settings.img || false;
		let info = settings.info || ""
		let x = settings.pos.x || 0;
		let y = settings.pos.y || 0;
		let width = settings.pos.width || 200;
		let height = settings.pos.height || 100;
		let text = {
			x : settings.text.x || 0,
			y : settings.text.y || 0,
		}
		let color = settings.text.color || "white"
		let fontsize = settings.text.fontsize || 12;
		let onClick = settings.onClick || function empty() {}

		return({
			img : img,
			color: color,
			body : new RigidBody({x: x, y : y, width: width, height: height}),
			draw : new Render(),
			clickHandler : new ClickHandler(),
			info: info,
			display : function(ctx) {
				if (this.img) {
					this.draw.img(this.img, this.body.pos.x, this.body.pos.y, this.body.size.x, this.body.size.y, ctx);
				}
				this.draw.textLine(this.info, this.body.pos.x + text.x, this.body.pos.y + text.y, fontsize, ctx, this.color)
			},
			onClick : function (mouse, canvas) {
				let click = this.clickHandler.click(mouse, this, canvas);
				if (click) {
					return true
				}
				return false;
			},
			changeInfo(info) {
				this.info = info
			}
		})
	}

	makeBackground() {
		this.background = this.button({
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

	makeLogoutScreen() {

		this.resumeButton = this.button({
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

		this.logoutButton = this.button({
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
			this.startButton = this.button({
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

			this.optionsButton = this.button({
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
			this.creditsButton = this.button({
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
			this.optionsBackButton = this.button({
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
			this.soundButton = this.button({
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
			this.difficultyButton = this.button({
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
			this.creditsBackButton = this.button({
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

		makeChooseNameScreen(letters) {
			let deleteButton = this.button({
							img : buttons.redButton,
							info: "Del",
							pos : {
								x: 390, 
								y : 247, 
								width: 80, 
								height: 40,
							},

							text : {
								x: 20,
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
					this.draw.textLine(this.label, 120, 330, 35, ctx, "blue");
					this.draw.textLine(this.value, 240, 330, 35, ctx, "blue");
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
			
			this.chooseNameNextButton = this.button({
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

			this.chooseNameBackButton = this.button({
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
			let deleteButton = this.button({
							img : buttons.redButton,
							info: "Del",
							pos : {
								x: 390, 
								y : 247, 
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
					this.draw.textLine(this.label, 120, 330, 35, ctx, "blue");
					this.draw.textLine(this.mask, 280, 330, 35, ctx, "blue");

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
			
			this.choosePasswordNextButton = this.button({
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

			this.choosePasswordBackButton = this.button({
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
			return (this.button({
							img : buttons.greenButton,
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
								color: "purple"
							},
			}))
		}

		characterNextButtons = (x, y) => {
			return(this.button({
							img : buttons.greenButton,
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
								color: "purple"
							},
			}))

		}
		
		makeChoosePlayerScreen() {
			this.choosePlayerNextButton = this.button({
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

			this.choosePlayerBackButton = this.button({
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
					let x = 205;
					let y = 200;
					
					let skin = this.skin.types[this.skin.index].img.images
					let shirt = this.shirt.types[this.shirt.index].img.images
					let pants = this.pants.types[this.pants.index].img.images
					let hair = this.hair.types[this.hair.index].img.images
					
					this.draw.img(skin['idle'].getImg("down", 0), x, y, 64,64, ctx)
					this.draw.img(shirt['idle'].getImg("down", 0), x, y, 64,64, ctx)
					this.draw.img(pants['idle'].getImg("down", 0), x, y, 64,64, ctx)
					this.draw.img(hair['idle'].getImg("down", 0), x, y, 64,64, ctx)

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

				},

				onClick(canvas, mouse) {
					this.skin.onClick(canvas, mouse);
					this.hair.onClick(canvas, mouse);
					this.shirt.onClick(canvas, mouse);
					this.pants.onClick(canvas, mouse);
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

					prevButton : characterPrevButtons(160, 150),
					nextButton : characterNextButtons(260, 150),
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
					prevButton : characterPrevButtons(160, 200),
					nextButton : characterNextButtons(260, 200),
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

					prevButton : characterPrevButtons(160, 250),
					nextButton : characterNextButtons(260, 250),
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

					prevButton : characterPrevButtons(160, 300),
					nextButton : characterNextButtons(260, 300),

				}
			}



		}


		
}