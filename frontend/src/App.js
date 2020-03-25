import React from 'react'
import Canvas from "./Components/Canvas"
import styles from "./App.css"

class App extends React.Component {
  render() {
    return (
    	<div style={{width: window.innerWidth, height:window.innerHeight, backGroundColor: "black"}}>
        	<Canvas />
        </div>
    );
  }
}
export default App;
