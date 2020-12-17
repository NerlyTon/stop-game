import React, { Component } from 'react'
import { ActionCableConsumer } from 'react-actioncable-provider';
import LetterRandomizer from './LetterRandomizer';
// import PlayerAnswers from './PlayerAnswers';
import PlayerGameForm from './PlayerGameForm';
import Game from './Game'
import {connect} from 'react-redux'
import { sendTime } from '../redux/actions/playerActions'

class Timer extends Component {
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
        currentTime: 0,
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
        this.props.sendTime({currentTime: this.state.minutes + ":" + this.state.seconds})
        // {this.state.minutes + ":" + this.state.seconds}
    }

    render() {
        // <Game data={this.state.currentTime}/>
        
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
                <h6>{this.state.currentTime}</h6>
                
            </div>
        )
    }
}



export default connect(null, { sendTime })(Timer)