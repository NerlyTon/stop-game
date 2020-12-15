import React, { Component } from 'react'
import {connect} from 'react-redux'
import { getPlayers } from '../redux/actions/playerActions'
import PlayerAnswers from './PlayerAnswers'
import { ActionCableConsumer } from 'react-actioncable-provider';
import PlayerGameForm from './PlayerGameForm'
import Timer from './Timer';
// import Timer from './Timer';




class Home extends Component {

    state = {
        players: [],
      };


    componentDidMount() {
        this.props.getPlayers()
    }

    handleReceivedPlayers = response => {
        const { player } = response;
        this.setState({
          players: [...this.state.players, player]
        });
        console.log("handlereceived players in home", this.props)
    };

    mapPlayers = (players) => {
        return players.map(player => {
          return (
            <PlayerAnswers player={player} key={player.id}/>)
        }
    )}

    timer = () => {
        console.log("in the timer func")
        return <button>Start</button>

    }
      
    handleTimer = () => {
        console.log("in the Timer")
        this.timer()
        // return (
        // <Timer/>)
    }


    render() {
        console.log("I am inside Home Render")
        return (
            <div>
                <h1>Game</h1>
                
                <ActionCableConsumer
                channel={{ channel: 'PlayersChannel' }}
                onReceived={this.handleReceivedPlayers}
                // onInitialized={this.props.Timer}
                />
                {/* <button>Start Game</button> */}
                <PlayerGameForm/>
                <h2>Players Answers</h2>
                <ul>{this.mapPlayers(this.state.players)}</ul>
                
            </div>
        )
    }
}

const mapStateToProps = ({ players }) => {
    return {
        players: players.all
    }
}

export default connect(mapStateToProps, { getPlayers })(Home)