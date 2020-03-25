import {background} from '../../../../../Images'
import Render from '../../Render'


export default class Background {
	constructor() {
		this.Render = new Render();
	}

	draw(canvas) {
		this.actionButtonBorder(canvas)
	}


	actionButtonBorder(canvas) {
		this.Render.img(background.actionButtonBackGround, 0, 430, 360, 180, canvas.ctx)
	}
	

}