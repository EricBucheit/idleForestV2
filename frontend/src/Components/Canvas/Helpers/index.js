import Render from '../Draw/Render'

class Vector2d {
	constructor(x,y) {
		this.x = x;
		this.y = y;
	}
}

class RigidBody {
	constructor(settings) {
		this.pos = new Vector2d(settings.x,settings.y);
		this.center = new Vector2d(settings.width / 2, settings.height / 2);
		this.size = new Vector2d(settings.width, settings.height);
		this.velocity = new Vector2d(settings.velocityX, settings.velocityY);
        this.collision = new Collision();
	}

    collide(targetBody) {
        return(this.collision.box(this, targetBody));
    }
}

class Collision {
    box(obj1, obj2) {
        let collision = {
            collide : false,
            left : false,
            right: false,
            up : false,
            down : false
        }
        if (obj1.pos.x < obj2.pos.x + obj2.size.x &&
           obj1.pos.x + obj1.size.x > obj2.pos.x &&
           obj1.pos.y < obj2.pos.y + obj2.size.y &&
           obj1.pos.y + obj1.size.y > obj2.pos.y) { 
                collision.collide = true;   
                if (obj1.pos.x + obj1.size.x < obj2.pos.x + obj2.center.x) {
                    collision.right = true;
                }
                if (obj1.pos.x >= obj2.pos.x + obj2.center.x) {
                    collision.left = true;
                }
                if (obj1.pos.y + obj1.size.y < obj2.pos.y + obj2.center.y) {
                    collision.down = true;
                }
                if (obj1.pos.y > obj2.pos.y + obj2.center.y) {
                    collision.up = true;
                }
                return (collision);
        }
        return (collision);
    }
}

class ClickHandler {

    click(mouse, obj, canvas) {
        let point = this.transformedCoordinate(mouse, canvas)
        point = new RigidBody({x: point.x, y: point.y, width: 1, height: 1})
        if (point.collide(obj.body).collide) {
            return true
        }
        return false
    }

    transformedCoordinate(mouse, canvas) {
        var transformedClickX = mouse.pageX - canvas.offsetLeft;
        var transformedClickY = mouse.pageY - canvas.offsetTop;
        return ({x : transformedClickX, y : transformedClickY})
    }

}

function Timer (time) {
    let date = new Date();
    let expiration = date.getTime() + time;
    return ({
            date : date,
            time : time,
            expiration: expiration,
            
            reset: function() {
                let date = new Date();
                let newTime = date.getTime()
                this.expiration = newTime + this.time;
            },

            isDone() {
                let date = new Date();
                let newTime = date.getTime()
                if (newTime > this.expiration) {
                    return (true)
                }
                return false;
            },

            check : function() {
                if (this.isDone()) {
                    this.reset();
                    return (true)
                }
                return false
            },

            getTimeLeft() {
                let date = new Date();
                let newTime = date.getTime()
                return (expiration - newTime);
            },

            setExpiration : function(newExpiration) {
                this.time = newExpiration;
                this.reset()
            }
        })
}

function userMessage(x = 175, y = 250) {
    return({
            button : button({
                info: "",
                pos : {
                    x: 175, 
                    y : 250, 
                    width: 100, 
                    height: 100,
                },
                text : {
                    x: 0,
                    y: 0,
                    fontsize : 20,
                    color: "red"
                },
            }),
            timer : new Timer(5),
            clear : true,
            set : function(info) {
                this.button.changeInfo(info)
                this.button.body.pos.x = 175;
                this.button.body.pos.y = 250;
                this.clear = false
            },

            warning : function(info) {
                this.button.color = "red";
                this.set(info)
            },

            success : function(info) {
                this.button.color = "blue";
                this.set(info)
            },

            clearWarning : function () {
                this.button.changeInfo('')
                this.button.body.pos.x = 160;
                this.button.body.pos.y = 250;
                this.clear = true;
            },

            display : function(ctx) {
                if (this.clear === true) return false
                
                this.button.display(ctx);
                if (this.timer.check()) {
                    this.button.body.pos.y -= 1;
                }
                if (this.button.body.pos.y <= 175) {
                    this.clearWarning()
                }
            } 
        })
}

function button(settings) {
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


export {
	Vector2d,
	RigidBody,
	Timer,
    ClickHandler,
    userMessage,
}