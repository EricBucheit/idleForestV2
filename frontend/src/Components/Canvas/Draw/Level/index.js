import Farm from './Farm'
import Home from './Home'
import Wild from './Wild'
import MapItems from './MapItems'

export default class Level {
	constructor(map) {
        this.farm = new Farm();
        this.home = new Home();
        this.wild = new Wild();
        this.mapItems = new MapItems();
    }

	all(canvas, map, player) {
        if (player) {
            if (player.info.currentLevel === 0) {
                this.farm.draw(canvas, map, player)
            } else if (player.info.currentLevel === 1) {
                this.home.draw(canvas, map);
                if (player.bank) {
                    this.home.bank.draw(canvas, player);
                }
                if(player.menu) {
                    this.home.menu.draw(canvas, player);
                }
            } else {
                this.wild.draw(canvas, map, player)
            }
            this.mapItems.draw(canvas, map.inventory);
        }
	}


	level(canvas, map) {
		if (map) {
            let level = map.body;
            for (let x = level.pos.x; x <= level.size.x; x++) {
                for (let y = level.pos.y; y <= level.size.y; y++) {
                    canvas.ctx.beginPath();
                    canvas.ctx.strokeStyle = "black"
                    canvas.ctx.rect(x * 32, y*32, 32, 32);
                    canvas.ctx.stroke();
                }
            }
        }
	}
}