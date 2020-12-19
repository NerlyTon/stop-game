import React, { Component } from 'react'
import {connect} from 'react-redux'
import { getPlayer } from '../redux/actions/playerActions'


class Answer extends Component {

    componentDidMount = () => {
        console.log("answer")
        this.props.getPlayer(this.props.match.params.id)
    }
    
    render() {
    // debugger

        return (
            <div>
                <h1>Answer</h1>
                {/* {player.intiials} */}
                {this.props.player.initials} - {this.props.player.name} - {this.props.player.place} - {this.props.player.color} - {this.props.player.animal} - {this.props.player.thing}
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
