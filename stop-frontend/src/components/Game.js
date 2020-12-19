import React, { Component } from 'react'
import {connect} from 'react-redux'
import { playerAns } from '../redux/actions/playerActions'
import PlayerAnswers from './PlayerAnswers'
import { ActionCableConsumer } from 'react-actioncable-provider';

import Timer from './Timer';
import Scores from './Scores';





class Game extends Component {
    
    state = {
        players: [],
        timerStarted: false,
        timerStopped: true,
        minutes: 0,
        seconds: 0,
        currentTime: 0,
      };


    // componentDidMount() {
    //     this.props.getPlayer()
    // }

    handleReceivedPlayers = (players)=> {
        // debugger
        // console.log("here", players)
        const player = players.player
        // this.setState({
        //     players: [...this.state.players, player]
        // })
        this.props.playerAns(player)
        console.log("inside the handle", players)
        
       };

       infoFromChild = (info) => {
        this.setState({
        // timerStarted: info.timerStarted,
        // timerStopped: info.timerStopped,
        // minutes: info.minutes,
        // seconds: info.seconds,
        currentTime: info.currentTime,
        })
        // debugger
        console.log(this.state.currentTime)
       }
    
      
    handleTimer = () => {
        // App.cable.subscriptions.subscriptions.receive( { data })
        // debugger
        console.log("Timer")
        // this.timer()
        // return (
        // <Timer/>)
    }


    render() {

        console.log(this.state, "state")
        console.log(this.props.playerA, "redux")
        return (
            <div>
                <h1>Word Combat</h1>
                <h4>Also knows as "STOP paper game"</h4><br/><br/>
                
                <ActionCableConsumer
                channel={{ channel: 'PlayersChannel' }}
                onReceived={this.handleReceivedPlayers}
                // onConnected={this.handleTimer}
                />
                {/* <button>Start Game</button> */}
                
                <Timer fromParent={this.infoFromChild}/>
                {/* <PlayerGameForm/> */}
                <h2>Players Answers</h2>
                {/* {this.checkingToggle()} */}
            
                {this.props.playerA.map((player) => {
               return <PlayerAnswers player={player} key={player.id} state={this.state.info}/>
                })}

                <Scores/>
                
            </div>
        )
    }
}

const mapStateToProps = (players) => {
    console.log("inside map", players)
    return {
        players: players.allPlayers, playerA: players.playerAns
    }
}

export default connect(mapStateToProps, { playerAns })(Game)


            // e.preventDefault()
            

        // this.setState({toggle: true, players: this.state.players.push(player)})
        // this.setState(prevState => {
        //     return {
        //        players: [...prevState.players, player]
        //     }
        //  });


//    this.props.player -- 
        // this.state.players.push(player)
        // this.props.getPlayers({
        //     players: [ player]
        //   });
        // <li> {players.initials} - {players.name} - {players.place} - {players.color} - {players.animal} - {players.thing}</li>
        // this.props.players.map((player) => (
        //     <PlayerAnswers player={player} key={player.id} />
        //     ))
        // this.props.createPlayer(this.state)
        // debugger
        // console.log("handlereceived players in home", this.props)
       
    // };

    // mapPlayers = (players) => {
    //     return players.map(player => {
    //       return (
    //         <PlayerAnswers player={player} key={player.id}/>)
    //         // {props.data}
    //         // <li key={player.id}> {player.initials} - {player.name} - {player.place} - {player.color} - {player.animal} - {player.thing} - {props.data}</li>)
    //     }
        
    // )
    


    // timer = () => {
    //     console.log("in the timer func")
    //     return <Timer/>

    // }

    // checkingToggle = () => {
    //     if(this.state.toggle) {
    //     return this.props.players.map((player) => {
    //            return <PlayerAnswers player={player} key={player.id} />
    //     })
    //     }
    // }
    