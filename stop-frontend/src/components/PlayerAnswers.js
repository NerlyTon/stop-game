import React, { Component } from 'react'
import {connect} from 'react-redux'
import { getPlayer, deletePlayer } from '../redux/actions/playerActions'
// import Answer from './Answer'
// import { Redirect } from "react-router-dom";
import history from '../history';


class PlayerAnswers extends Component {
   
    deleteP = () => {
        console.log("delet")
        this.props.deletePlayer(this.props.player.id)
    }

    viewAns = () => {
        // debugger
        // console.log("view")
        // this.props.getPlayer(this.props.player.id)
        // <Answer/>
        // return <Redirect to="/answer" />
        // this.props.history.push('/answer');
        history.push(`/answer/${this.props.player.id}`)
    }


    render() {
        console.log(this.props.time)
    return (
        <li> {this.props.player.initials} - {this.props.player.name} - {this.props.player.place} - {this.props.player.color} - {this.props.player.animal} - {this.props.player.thing} - {this.props.info} <button onClick={this.deleteP} style={{ cursor: "pointer"}}>Delete</button><button onClick={this.viewAns}>Look at Answer</button></li> 
  
    )
}}

const mapStateToProps = (state) => {
    return {time: state.time}
}

export default connect(mapStateToProps, { getPlayer, deletePlayer })(PlayerAnswers)

// {this.props.time ? this.props.time.currentTime: 0}

