import React, { Component } from 'react'
import {connect} from 'react-redux'
import { playerAns, deletePlayer } from '../redux/actions/playerActions'
import PlayerAnswers from './PlayerAnswers'
import { ActionCableConsumer } from 'react-actioncable-provider';
import Timer from './Timer';




class Game extends Component {
    
    state = {
        players: [],
      };


    handleReceivedPlayers = (players)=> {
    // debugger
    // console.log("here", players)
    const player = players.player
    
    this.props.playerAns(player)
    console.log("inside the handle", players)
    
    };

    
    deleteP = (playerId) => {
        console.log("delete")
        this.props.deletePlayer(playerId)
    }
   



    render() {
        let displayPlayers;
        if(this.props.playerA) {
            displayPlayers = this.props.playerA.map((player) => {
                return <PlayerAnswers player={player} key={player.id} sendFunc={this.deleteP}/>
            })
            }
        console.log(this.state, "state")
        console.log(this.props.playerA, "redux")
       
        return (
            <div>
                <ActionCableConsumer
                channel={{ channel: 'PlayersChannel' }}
                onReceived={this.handleReceivedPlayers}
                />
                <Timer/><br/><br/>
                <h2>Players Answers</h2>
                {displayPlayers}
                
            </div>
        )
    }
}

const mapStateToProps = (players) => {
    console.log("inside map", players)
    return {
        playerA: players.playerAns
    }
}

export default connect(mapStateToProps, { playerAns, deletePlayer })(Game)
