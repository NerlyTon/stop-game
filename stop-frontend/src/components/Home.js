import React, { Component } from 'react'
import {connect} from 'react-redux'
import { getPlayers } from '../redux/actions/playerActions'
import PlayerAnswers from './PlayerAnswers'
import { ActionCableConsumer } from 'react-actioncable-provider';
import PlayerGameForm from './PlayerGameForm'
import LetterRandomizer from './LetterRandomizer';


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
        console.log("handlereceived players in home", this.state)
    };

    mapPlayers = (players) => {
        return players.map(player => {
          return (
            <PlayerAnswers player={player} key={player.id}/>)
        }
    )}
      
    



    render() {
        console.log("I am inside Home Render")
        return (
            <div>
                <h1>Game</h1>
                <LetterRandomizer/><br/><br/>
                <ActionCableConsumer
                channel={{ channel: 'PlayersChannel' }}
                onReceived={this.handleReceivedPlayers}
                />
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