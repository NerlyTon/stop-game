import React, { Component } from 'react'
import {connect} from 'react-redux'
import { getPlayer } from '../redux/actions/playerActions'
import history from '../history';


class Answer extends Component {

    componentDidMount = () => {
        console.log("answer")
        this.props.getPlayer(this.props.match.params.id)
    }
    
    handleClick = () => {
        debugger
        history.push('/game');
        
    }

    render() {
    // debugger

        return (
            <div>
                <h1>Answer</h1>
                <h2>{this.props.player.initials} - {this.props.player.name} - {this.props.player.place} - {this.props.player.color} - {this.props.player.animal} - {this.props.player.thing}</h2>
                <button onClick={this.handleClick}>Go Back</button>
            </div>
        )
    }
}

const mapStateToProps = (player) => {
    // debugger
    console.log("inside Amap", player)
    
    return {
        player: player.answer
    }
}


export default connect(mapStateToProps, { getPlayer })(Answer)
