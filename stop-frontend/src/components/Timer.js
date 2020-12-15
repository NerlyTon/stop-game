import React, { Component } from 'react'

console.log("Inside timer component")
export default class Timer extends Component {
    
    state = {
        timerStarted: false,
        timerStopped: true,
        minutes: 0,
        seconds: 0,
        captures: []
    }

    handleStartTimer = (e) => {
        e.preventDefault()
        if(this.state.timerStopped) {
        setInterval(() => {
             this.setState({timerStarted: true, timerStopped: false})
             if(this.state.timerStarted) {
                 if(this.state.seconds >= 60) {
                    this.setState((prevState) => ({ minutes: prevState.minutes + 1, seconds: 0}))
                 } 
                 this.setState((prevState) => ({ seconds: prevState.seconds + 1 }))
             }
         
        }, 1000)
    }
    }

    handleStopTimer = () => {
        this.setState({timerStarted: false, timerStopped: true})
    }

    render() {
        return (
            <div>
                Timer: {this.state.minutes + ":" + this.state.seconds}<br/>
                <button onClick={this.handleStartTimer}>Start Game</button>
            </div>
        )
    }
}
