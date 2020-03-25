import Render from '../../Render'
import {mapAtlas} from '../../../../../Images'

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export default class Wild {
	constructor() {
		this.render = new Render()
        this.level = false;
        this.layer = false;
        this.currentLevel = false
	}

    draw(canvas, map, player) {
        if (!this.level || this.currentLevel !== player.info.currentLevel) {
            this.currentLevel = player.info.currentLevel
            this.createMap(map)
        }

        if (map) {
            let level = map.body;
            for (let x = level.pos.x; x <= level.size.x; x++) {
                for (let y = level.pos.y; y <= level.size.y; y++) {
                    this.render.img(this.level[x][y], x * 32, y * 32, 32,32, canvas.ctx);
                    if (this.layer[x][y]) {
                        this.render.img(this.layer[x][y], x*32,y*32, this.layer[x][y].pos.width, this.layer[x][y].pos.height, canvas.ctx)
                    }
                }
            }
        }

    }

	createMap(map) {
       
        let mapIndex = Math.floor(this.currentLevel / 30);

        let mapKeys = Object.keys(mapAtlas.terrain);

        if (mapIndex >= mapKeys.length) {
            mapIndex = mapKeys.length - 1;
        }

        let floor = mapKeys[mapIndex];

        let main = mapAtlas.terrain[floor].light.base.main;
        let specks = mapAtlas.terrain[floor].light.base.specks;
        let full = mapAtlas.terrain[floor].light.base.hole;

        let patch = mapAtlas.terrain[floor].light.layer.patch;
        let bigHole = mapAtlas.terrain[floor].light.layer.bigHole;
        let smallSpot = mapAtlas.terrain[floor].light.layer.smallSpot;
        // let tinySpot = mapAtlas.terrain[floor].light.layer.tinySpot;

        let mapChoice = [main, specks, full];
        let layer = [patch, bigHole, smallSpot];


        this.level = [];
        this.layer = [];
		if (map) {
            let level = map.body;
            for (let x = level.pos.x; x <= level.size.x; x++) {
                this.level[x] = [];
                this.layer[x] = [];
                for (let y = level.pos.y; y <= level.size.y; y++) {
                    this.level[x][y] = mapChoice[randomInt(0,2)]
                    let layerChance = randomInt(0,100);
                    if (layerChance < 3) {
                        this.layer[x][y] = layer[layerChance];
                    } else {
                        this.layer[x][y] = false;
                    }
                }
            }
        }
	}
}