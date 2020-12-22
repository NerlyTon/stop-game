import React, { Component } from 'react'
import { ActionCableConsumer } from 'react-actioncable-provider';
import PlayerGameForm from './PlayerGameForm';
import {connect} from 'react-redux'





class LetterRandomizer extends Component {
    

    state = {
        letter: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
        selectedLetter: ""
    }

    

    randomLetter = () => {
        
        this.setState({
            selectedLetter: this.state.letter[Math.floor(Math.random()*this.state.letter.length)]
            
        })

    }


        
    render() {
        return (
            <div>
                <ActionCableConsumer
                channel={{ channel: 'PlayersChannel' }}
                onConnected={this.randomLetter}
                />
                <h2>LETTER:<span className="badge bg-secondary">{this.state.selectedLetter}</span></h2>
                
                <PlayerGameForm sendFuntion = {this.randomLetter}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {time: state.time}
}

export default connect(mapStateToProps)(LetterRandomizer)

