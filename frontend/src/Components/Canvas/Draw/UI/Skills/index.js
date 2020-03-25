import Render from '../../Render'
import {background} from '../../../../../Images'

export default class Skills {
	constructor() {
		this.render = new Render()
	}

	draw(canvas, player) {
		this.skillsBackground(canvas)
		this.skills(canvas, player)	
	}

	skills(canvas, player) {
		if (!player) {
			return false
		}
		
		let x = 365;
		let y = -10;

		let skills = Object.keys(player.skills)
		for (let skill of skills) {
			let current_lvl = Math.ceil(player.skills[skill].current)
			let value = player.skills[skill].value;
			let boost = player.skills[skill].boost;
			let xp = player.skills[skill].xp;
			let next_level = player.skills[skill].threshold;

			this.render.textLine(`${skill} : ${current_lvl + boost}/${value}`, x, y += 20, 9, canvas.ctx, "white");
			this.render.textLine(`XP: ${xp} / ${next_level}`, x + 10, y += 12, 9, canvas.ctx, "white");
		}

		this.render.textLine(`Current Level:${player.info.currentLevel}`, x, y += 40, 9, canvas.ctx, "white");
		this.render.textLine(`Gold : ${player.info.gold}`, x, y += 20, 9, canvas.ctx, "white");
	}


	skillsBackground(canvas) {
		this.render.img(background.skills, 360, 0, 120, 480, canvas.ctx)
	}

}