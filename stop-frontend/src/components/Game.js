import React, { Component } from 'react'
import {connect} from 'react-redux'
import { getPlayers } from '../redux/actions/playerActions'
// import { createPlayer } from '../redux/actions/playerActions'
import PlayerAnswers from './PlayerAnswers'
import { ActionCableConsumer } from 'react-actioncable-provider';
// import PlayerGameForm from './PlayerGameForm'
import Timer from './Timer';
// import PlayerGameForm from './PlayerGameForm';
// import Timer from './Timer';
// import LetterRandomizer from './LetterRandomizer';
// import Timer from './Timer';




class Game extends Component {
    
    state = {
        players: [],
      };


    // componentDidMount() {
    //     this.props.getPlayers()
    // }

    handleReceivedPlayers = (players)=> {
        // debugger
        // console.log("here", players)
        const player = players.player
        this.state.players.push(player)
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
       
    };

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
      
    handleTimer = () => {
        // App.cable.subscriptions.subscriptions.receive( { data })
        // debugger
        console.log("Timer")
        // this.timer()
        // return (
        // <Timer/>)
    }


    render() {
        console.log("inside game render")
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
                
                <Timer/>
                {/* <PlayerGameForm/> */}
                <h2>Players Answers</h2>
                {this.props.players.map((player) => (
                <PlayerAnswers player={player} key={player.id} />
                ))}
                
            </div>
        )
    }
}

const mapStateToProps = (players) => {
    console.log(players)
    return {
        players: players.allPlayers
    }
}

export default connect(mapStateToProps, { getPlayers})(Game)