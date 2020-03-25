export default class Render {

	text(str, x, y, size, ctx, color= "white") {
		if (str.toString().length > 6 && parseInt(size) >= 10) {
			x -= 6
		}
		str = str.toString().split(' ');

		ctx.strokeStyle = color
		ctx.font = size+"px Comic Sans MS";
		
		for (let word in str) {
			ctx.strokeText(str[word], x, y + (word * 7));
		}
    }

    textLine(str, x, y, size, ctx, color= "white") {
		if (str.toString().length > 6 && parseInt(size) >= 10) {
			x -= 6
		}

		ctx.strokeStyle = color
		ctx.font = size+"px Comic Sans MS";
		
		ctx.strokeText(str, x, y);
		
    }

    img(img, x,y, width, height, ctx) {
	    ctx.drawImage(img.img, 
	                  img.pos.x,
	                  img.pos.y, 
	                  img.pos.width, 
	                  img.pos.height,
	                  x,
	                  y,
	                  width,
	                  height
	                );
	}

	roundRect(x, y, w, h, r, ctx) {
		ctx.fillStyle = 'rgba(16, 133, 26,0.9)';
	  if (w < 2 * r) r = w / 2;
	  if (h < 2 * r) r = h / 2;
	  ctx.beginPath();
	  ctx.moveTo(x+r, y);
	  ctx.arcTo(x+w, y,   x+w, y+h, r);
	  ctx.arcTo(x+w, y+h, x,   y+h, r);
	  ctx.arcTo(x,   y+h, x,   y,   r);
	  ctx.arcTo(x,   y,   x+w, y,   r);
	  ctx.closePath();;
	}
}