import React, { Component } from 'react'
import {connect} from 'react-redux'
import { getPlayers } from '../redux/actions/playerActions'
import PlayerAnswers from './PlayerAnswers'
import { ActionCableConsumer } from 'react-actioncable-provider';
// import PlayerGameForm from './PlayerGameForm'
import Timer from './Timer';
import PlayerGameForm from './PlayerGameForm';
// import Timer from './Timer';
// import LetterRandomizer from './LetterRandomizer';
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
        // debugger
        // console.log("handlereceived players in home", this.props)
    };

    mapPlayers = (players) => {
        return players.map(player => {
          return (
            <PlayerAnswers player={player} key={player.id}/>)
        }
    )}

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
        console.log("I am inside Home Render")
        return (
            <div>
                <h1>Word Combat</h1>
                <h4>Also knows as "STOP paper game"</h4><br/><br/>
                
                <ActionCableConsumer
                channel={{ channel: 'PlayersChannel' }}
                onReceived={this.handleReceivedPlayers}
                onConnected={this.handleTimer}
                />
                {/* <button>Start Game</button> */}
                
                <Timer/>
                {/* <PlayerGameForm/> */}
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