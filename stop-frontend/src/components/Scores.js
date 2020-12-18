import React, { Component } from 'react'
import { playerAns } from '../redux/actions/playerActions'
import {connect} from 'react-redux'


class Scores extends Component {
    state = {
        score: 0
    }

    // mapOverPlayers = () => {
    //    return this.props.playerA.map(player => {
    //         console.log("inside of scores", player)
    //         if(player.initials === player.initials) {
    //             this.setState({score: +1})
    //             return this.state.score
    //         }
    //     })
    // }


    render() {
        return (
            <div>
                <h1>Scores</h1>
                {/* {this.mapOverPlayers()} */}
                {/* {this.props.playerA.map((player) => {
                    // console.log("inside score", player)
                    // debugger
               return <ul><li key={player.id}>{player.intitials}</li></ul>
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