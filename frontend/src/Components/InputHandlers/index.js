
export default class InputHandler {

    transformedCoordinate(mouse, canvas) {
        var transformedClickX = mouse.pageX - canvas.offsetLeft;
        var transformedClickY = mouse.pageY - canvas.offsetTop;
        return ({x : transformedClickX, y : transformedClickY})
    }

	Click (e, canvas, socket) {
        let click = this.transformedCoordinate(e, canvas)
        socket.emit('mouseClick', click.x, click.y);
    }

    MouseMove(e, canvas, socket) {
        let click = this.transformedCoordinate(e, canvas)
        socket.emit('mouseMove', click.x, click.y);
    }

    RightClick(e, canvas, socket) {
        let click = this.transformedCoordinate(e, canvas)
        socket.emit('rightClick', click.x, click.y);
    }

    MouseDown(e, canvas, socket) {
        let click = this.transformedCoordinate(e, canvas)
        socket.emit('mouseDown', click.x, click.y);
    }

    MouseUp(e, canvas, socket) {
        let click = this.transformedCoordinate(e, canvas)
        socket.emit('mouseUp', click.x, click.y);
    }

    KeyPress(e, canvas, socket) {
        socket.emit('keyPress', e.key);
    }
}