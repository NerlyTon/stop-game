import React, { Component } from 'react'
import { ActionCableConsumer } from 'react-actioncable-provider';
import LetterRandomizer from './LetterRandomizer';
import {connect} from 'react-redux'
import { sendTime } from '../redux/actions/playerActions'

class Timer extends Component {
    
    intervalID = 0

    state = {
        timerStarted: false,
        timerStopped: true,
        minutes: 0,
        seconds: 0,
        currentTime: 0,
    }

    

    handleStartTimer = () => {
        if(this.state.timerStopped) {
        this.intervalID = setInterval(() => {
             this.setState({timerStarted: true, timerStopped: false})
             if(this.state.timerStarted) {
                 if(this.state.seconds >= 59) {
                    this.setState((prevState) => ({ minutes: prevState.minutes + 1, seconds: 0}))
                 }
                 if(this.state.minutes === 2){
                    clearInterval(this.intervalID)
                    this.props.sendTime({currentTime: this.state.minutes})
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
    }

    render() {
        
        return (
            
            <div>
                <LetterRandomizer/>
                <ActionCableConsumer
                channel={{ channel: 'PlayersChannel' }}
                onConnected={this.handleStartTimer}
                />
                <br/><h3>TIMER:<span className="badge bg-secondary">{this.state.minutes + ":" + this.state.seconds}</span></h3>
            </div>
        )
    }
}



export default connect(null, { sendTime })(Timer)