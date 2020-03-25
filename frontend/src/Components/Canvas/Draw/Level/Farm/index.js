import {farmImages, mapAtlas, buttons} from '../../../../../Images'
import itemImages from '../../../../../Images/itemImages'
import Render from '../../Render'

export default class Farm {
    
    constructor() {
        this.render = new Render()
        
        this.y_start = 2;
        this.x_start = 0;

    }

    draw(canvas, map, player) {
        this.level(canvas,map)
        this.farmPlot(canvas, player);
        this.plants(canvas, player);
        this.upgradeButton(canvas, player)
    }

    plants(canvas, player) {
        let items = player.farm.items;
       
        for (let item of items) {
            if (item) {
                this.render.img(itemImages.growingPlants[item.img].img.getImg(item.level), item.body.pos.x, item.body.pos.y, item.body.size.x, item.body.size.y, canvas.ctx)
            }
        }
    }

    upgradeButton(canvas, player) {
        let button_x = 280;
        let button_y = 40;

        this.render.img(buttons.greenButton, button_x, button_y, 50, 25,canvas.ctx)
        this.render.text("Upgrade", button_x + 7, button_y + 14, "9" , canvas.ctx)
    }

    farmPlot(canvas, player) {
        let rows = player.farm.rows;
        let columns = player.farm.columns;

        let x_start = this.x_start * 32;
        let x_end = (columns + this.x_start) * 32

        let y_start = this.y_start * 32;
        let y_end = (rows + this.y_start + 1) * 32;

        this.render.text(`WATER:`, 120,30, "20", canvas.ctx)
        this.render.text(`${player.farm.water}`, 200,30, "20", canvas.ctx)

        this.render.img(farmImages.plot.leftTop, x_start, y_start, 32, 32, canvas.ctx);
        this.render.img(farmImages.plot.rightTop, x_end, y_start, 32, 32, canvas.ctx);

        for (let n = 0; n <= rows; n++) {
            this.render.img(farmImages.plot.leftMiddle, x_start, (this.y_start + n + 1) * 32, 32, 32, canvas.ctx);
            this.render.img(farmImages.plot.rightMiddle, x_end, (this.y_start + n + 1) * 32, 32, 32, canvas.ctx);
        }

        this.render.img(farmImages.plot.leftBottom, x_start, y_end, 32, 32, canvas.ctx);
        this.render.img(farmImages.plot.rightBottom, x_end, y_end, 32, 32, canvas.ctx);
        
        for (let x = 1; x < columns; x++) {
            this.render.img(farmImages.plot.middleTop, x * 32, y_start, 32, 32, canvas.ctx);
            this.render.img(farmImages.plot.middleBottom, x * 32, y_end, 32, 32, canvas.ctx);
            for (let n = 0; n < rows; n++) {
                this.render.img(farmImages.plot.middle, x * 32, (this.y_start + n + 1) * 32, 32, 32, canvas.ctx);
            }
        }
    }

    level(canvas, map) {
        if (map) {
            let level = map.body;
            for (let x = level.pos.x; x <= level.size.x; x++) {
                for (let y = level.pos.y; y <= level.size.y; y++) {
                    this.render.img(mapAtlas.terrain.grass.light.base.main, x * 32, y * 32, 32,32, canvas.ctx)
                }
            }
        }
    }
}