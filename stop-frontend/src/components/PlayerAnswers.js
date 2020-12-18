import React, { Component } from 'react'
import {connect} from 'react-redux'
import { deletePlayer } from '../redux/actions/playerActions'


class PlayerAnswers extends Component {
   
    deleteP = () => {
        console.log("delete")
        deletePlayer(this.props.player.id)
    }


    render() {
        console.log(this.props.time)
    return (
        <li> {this.props.player.initials} - {this.props.player.name} - {this.props.player.place} - {this.props.player.color} - {this.props.player.animal} - {this.props.player.thing} - {this.props.info} <button onClick={this.deleteP} style={{ cursor: "pointer"}}>Delete</button></li> 
  
    )
}}

const mapStateToProps = (state) => {
    return {time: state.time}
}

export default connect(mapStateToProps, { deletePlayer })(PlayerAnswers)

// {this.props.time ? this.props.time.currentTime: 0}

