import React, { Component } from 'react'
import { playerAns } from '../redux/actions/playerActions'
import {connect} from 'react-redux'
// import PlayerGameForm from './PlayerGameForm';


class Scores extends Component {
    state = {
        score: 0
    }

    mapOverPlayers = () => {
       this.props.playerA.map(player => {
            console.log("inside of scores", player)
            return player.initials !== "" ? this.setState((prevState) => ({ score: prevState.score + 1 })) : null
                  
        })
        console.log(this.state.score)
    }


    render() {
        
        // <PlayerGameForm sendAnotherFuntion = {this.mapOverPlayers}/>
        return (
            <div>
                <h1>Scores</h1>
                <h5>{this.state.score}</h5>
                {/* {this.mapOverPlayers()} */}
                {/* {this.props.playerA.map((player) => {
                    // return console.log("inside score", player)
                    // debugger
            //    return <ul><li key={player.id}>{player.intitials}</li></ul>
                })} */}
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

export default connect(mapStateToProps, { playerAns })(Scores)