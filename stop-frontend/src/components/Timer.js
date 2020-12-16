import React, { Component } from 'react'
import { ActionCableConsumer } from 'react-actioncable-provider';
import LetterRandomizer from './LetterRandomizer';
import PlayerGameForm from './PlayerGameForm';


export default class Timer extends Component {
    // constructor(props) {
    //     super(props)
    // this.intervalID = 0

    // this.state = {
    //     timerStarted: false,
    //     timerStopped: true,
    //     minutes: 0,
    //     seconds: 0,
    // }
    // // this.handleStopTimer = this.handleStopTimer.bind(this)
    // }
    
    intervalID = 0

    state = {
        timerStarted: false,
        timerStopped: true,
        minutes: 0,
        seconds: 0,
    }

    

    handleStartTimer = () => {
        // e.preventDefault()
        if(this.state.timerStopped) {
        this.intervalID = setInterval(() => {
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

    componentWillUnmount = () => {
        clearInterval(this.intervalID)
    }

    handleStopTimer = (e) => {
        e.preventDefault()
        console.log("stopping timer")
        this.setState({timerStarted: false, timerStopped: true})
        clearInterval(this.intervalID)
        console.log(this.state.minutes, this.state.seconds)
    }

    render() {
        
        
        return (
            
            <div>
                <LetterRandomizer/>
                <ActionCableConsumer
                channel={{ channel: 'PlayersChannel' }}
                onConnected={this.handleStartTimer}
                />
                Timer: {this.state.minutes + ":" + this.state.seconds}<br/>
                {/* <button onClick={this.handleStartTimer}>Start Game</button> */}
                <PlayerGameForm sendFuntion = {this.handleStopTimer}/>
            </div>
        )
    }
}
