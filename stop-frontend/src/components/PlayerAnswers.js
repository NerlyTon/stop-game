import React, { Component } from 'react'
import {connect} from 'react-redux'


class PlayerAnswers extends Component {
   
    render() {
        console.log(this.props.time)
    return (
        <li> {this.props.player.initials} - {this.props.player.name} - {this.props.player.place} - {this.props.player.color} - {this.props.player.animal} - {this.props.player.thing} - {this.props.time.currentTime}</li> 
  
    )
}}

const mapStateToProps = (state) => {
    return {time: state.time}
}

export default connect(mapStateToProps)(PlayerAnswers)