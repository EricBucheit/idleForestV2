import healthBar from "../../Images/images/UI/healthBars/healthBar.png"
import emptyBar from "../../Images/images/UI/healthBars/emptyBar.png"
import bankBackGround from "../../Images/images/UI/bankBackGround.png"

import Render from '../Canvas/Draw/Render'

var loadedImages = 0;

let loadImgs = {
    health: {
        img : singleImage(healthBar),
        pos : mapTile(0, 0, 206, 28) 
    },

    empty: {
        img : singleImage(emptyBar),
        pos : mapTile(0, 0, 206, 28) 
    },

    bankBackGround : {
        img : singleImage(bankBackGround),
        pos : mapTile(0, 0, 300, 430) 
    },
}

function scale(value, x1, y1, x2, y2) {
        return ((value - x1) * (y2 - x2) / (y1 - x1) + x2)
}



function mapTile(x,y,width,height) {
    return ({
        x:x,
        y:y,
        width : width,
        height: height,
    })
}

function singleImage(img) {
    let image = new Image();
    image.src = img;
    image.onload = function() {
        loadedImages++;
    }
    return image;
}

export default class LoadBar {
    constructor() {
        this.render = new Render()
        this.loaded = false;
    }

    draw(canvas) {
        this.render.img(loadImgs.bankBackGround, 0, 0, 480, 480, canvas.ctx);
        this.render.text("Loading...", 150, 100, 50, canvas.ctx);
        this.render.img(loadImgs.empty, 130, 200, 200, 100, canvas.ctx);
        let scaledLoadBar = scale(loadedImages, 0, 3085, 0 , 200)
        this.render.img(loadImgs.health, 135, 200, scaledLoadBar, 100, canvas.ctx);
        if (loadedImages > 3050) {
            this.loaded = true
        }
    }


}

export {singleImage}
