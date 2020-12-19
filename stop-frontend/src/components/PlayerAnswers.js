import React, { Component } from 'react'
import history from '../history';


class PlayerAnswers extends Component {
   

    handleClickShow = () => {
        history.push(`/answer/${this.props.player.id}`)
    }


    render() {
    return (
        <li> {this.props.player.initials} <button onClick={() => this.props.sendFunc(this.props.player.id)} style={{ cursor: "pointer"}}>Delete</button><button onClick={this.handleClickShow}>Look at Answer</button></li> 
  
    )
}}


export default (PlayerAnswers)



