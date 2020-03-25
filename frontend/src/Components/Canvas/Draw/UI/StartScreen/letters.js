import {background, buttons} from '../../../../../Images'
import Render from '../../Render'
import {RigidBody, ClickHandler} from '../../../Helpers'

export default class Letters {
	constructor() {
		this.makeLetterButtons();
	}

	letter(x,y,w,h, letter) {
			let button = {
				clickHandler : new ClickHandler(),
				img : buttons.greenButton,
				draw : new Render(),
				body : new RigidBody({x: x, y: y, width: w, height: h}),
				info : letter,
				display : function(ctx) {
					this.draw.img(this.img, this.body.pos.x, this.body.pos.y, this.body.size.x, this.body.size.y, ctx);
					this.draw.textLine(this.info, this.body.pos.x + 10, this.body.pos.y + 20, 15, ctx, "purple")
				},
				onClick : function(mouse, canvas) {
					let click = this.clickHandler.click(mouse, this, canvas);
					if (click) {
						console.log(this.info);
						return this.info;
					}
					return(false)
				}
			}
			return button
		}

		makeLetterButtons() {
			let line1 = ["q","w","e","r","t","y","u","i","o","p"]
			let line2 = ["a","s","d","f","g","h","j","k","l"]
			let line3 = ["z","x","c","v","b","n","m"]
			let letters = []

			for (let x = 0; x < line1.length; x++) {
				letters.push(this.letter((x * 45) + 20, 150 ,40,40, line1[x]));
			}
			for (let x = 0; x < line2.length; x++) {
				letters.push(this.letter((x * 45) + 40, 200 ,40,40, line2[x]));
			}
			for ( let x = 0; x < line3.length; x++) {
				letters.push(this.letter((x * 45) + 70, 250 ,40,40, line3[x]));
			}
			this.letters = letters
		}

}