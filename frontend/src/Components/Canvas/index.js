import React from "react"
import socketIOClient from "socket.io-client";

import LoadBar from '../LoadBar'
import Draw from './Draw'
import InputHandler from '../InputHandlers'
import StartScreen from './Draw/UI/StartScreen'
import {Timer, userMessage} from './Helpers'
import {music, playSong} from '../../Sounds'
let socket = socketIOClient("http://localhost:4200")

export default class Canvas extends React.Component {

     constructor() {
        super()

        this.state = {
          data : false,
          mousePos : false,
        };

        this.canvasRef = React.createRef();
        this.Draw = new Draw();
        this.InputHandler = new InputHandler();
        this.StartScreen = new StartScreen()
        this.userMessage = userMessage();
        this.loadBar = new LoadBar();
    }

    componentDidMount() {
        let frameRate = 25
        this.frameRateTimer = Timer(1000 / frameRate);
        
        socket.on("game", data => {
            this.setState({data : data})
        });

        socket.on("disconnect", data => {
            this.StartScreen.reset();
        });

        socket.on("login", data => {
            this.StartScreen.loginEvent(data)
            // playSong(music.homeScreen, true)
        });

        socket.on("register", data => {
            this.StartScreen.registerEvent(data)
            // playSong(music.homeScreen, true)
        });

        socket.on("save", data => {
            this.userMessage.success(data)
        })

        socket.on("pause", data => {
            this.StartScreen.pause();
            this.StartScreen.userMessage.clearWarning();
        })

        socket.on("logout", data => {
            this.StartScreen.logoutEvent(data)
        })

        this.updateCanvas();
    }

    getCanvas() {
        const canvas = this.canvasRef.current;
        const ctx = canvas.getContext('2d');
        
        return {
                canvas : canvas, 
                ctx: ctx,
                width: canvas.width,
                height: canvas.height,
           };
    }

    updateCanvas = () => {
        if (this.frameRateTimer.check()) {
            
            let canvas = this.getCanvas();
            canvas.ctx.clearRect(0,0, canvas.width, canvas.height)
            if (!this.loadBar.loaded) {
                this.loadBar.draw(canvas)
            }
            else if (this.StartScreen.start === false) {
                this.StartScreen.run(canvas);
            } else {
                socket.emit('update');
                let entities = {
                    currentPlayer : this.state.data.currentPlayer,
                    players : this.state.data.players,
                    enemies : this.state.data.enemies,
                    trees : this.state.data.trees,
                    ores : this.state.data.ores,
                    animals : this.state.data.animals,
                    npcs : this.state.data.npcs,
                }
                if (entities.currentPlayer) {
                    console.log(entities.currentPlayer.skills)

                }

                if (entities.currentPlayer) {
                    entities.currentPlayer.mousePos = false
                    if(this.state.mousePos) {
                        entities.currentPlayer.mousePos = this.state.mousePos;
                    }
                }

                this.Draw.Level.all(canvas, this.state.data.level, entities.currentPlayer);
                this.Draw.Entity.draw(canvas, entities);
                this.Draw.Entity.cornerHealthStats(canvas, entities.currentPlayer)
                this.Draw.UserInterface.draw(canvas, entities.currentPlayer)
                this.Draw.BottomPanel.buttons(canvas, entities.currentPlayer)
                this.Draw.BottomInventoryIcons.draw(canvas)
                this.userMessage.display(canvas.ctx)

            }
            
        }
        this.rAF = requestAnimationFrame(this.updateCanvas);

    }


    render() {
         return (
            <canvas ref={this.canvasRef}
                    width={480} 
                    height={480}
                    style={{   
                                outline: "none",
                                borderRadius:10,
                                padding: 0,
                                margin: "auto",
                                display: "block",
                                width: 480,
                                height: 480,
                                position: "absolute",
                                top: 0,
                                bottom: 0,
                                left: 0,
                                right: 0,
                            }}
                    id = "canvas"
                    tabIndex="0" 

                    onKeyPress={ (e) => {
                        let canvas = this.canvasRef.current
                        if (this.StartScreen.start === false) {
                            this.StartScreen.onKeyPress(e)
                        } 
                        this.InputHandler.KeyPress(e, canvas, socket);
                      } 
                    }

                    onKeyDown={ (e) => {
                        let canvas = this.canvasRef.current
                        if (this.StartScreen.start === false) {
                            this.StartScreen.onKeyDown(e, socket)
                        } 
                        this.InputHandler.KeyPress(e, canvas, socket);
                      } 
                    }

                    onContextMenu = {(e) => {
                        e.preventDefault()
                        let canvas = this.canvasRef.current
                        this.InputHandler.RightClick(e, canvas, socket);
                      }
                    }
                    onMouseMove = {(e) => {
                        let canvas = this.canvasRef.current
                        let click = this.InputHandler.transformedCoordinate(e, canvas)
                        this.setState({mousePos: click});
                        this.InputHandler.MouseMove(e, canvas, socket)
                      }
                    }

                    onClick = {(e) => {
                        let canvas = this.canvasRef.current
                        this.InputHandler.Click(e, canvas, socket)
                      }
                    }

                    onMouseDown = {(e) => {
                        let canvas = this.canvasRef.current
                        this.InputHandler.MouseDown(e, canvas, socket);
                      }
                    }

                    onMouseUp = {(e) => {
                        let canvas = this.canvasRef.current
                        if (this.StartScreen.start === false) {
                            this.StartScreen.onClick(e, canvas, socket)
                        } 
                        this.InputHandler.MouseUp(e, canvas, socket);
                      }
                    }
            />

         );
    }
}

