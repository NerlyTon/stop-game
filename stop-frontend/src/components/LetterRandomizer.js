import React, { Component } from 'react'
import { ActionCableConsumer } from 'react-actioncable-provider';
import PlayerGameForm from './PlayerGameForm';



class LetterRandomizer extends Component {
    

    state = {
        letter: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
        selectedLetter: ""
    }

    

    randomLetter = () => {
        // console.log("inside randomletter func in letterR")
        this.setState({
            selectedLetter: this.state.letter[Math.floor(Math.random()*this.state.letter.length)]
            
        })

    }


        
    render() {
        // console.log("inside render in letterR")
        return (
            <div>
                <ActionCableConsumer
                channel={{ channel: 'PlayersChannel' }}
                onConnected={this.randomLetter}
                />
                <h2>LETTER:<span className="badge bg-secondary">{this.state.selectedLetter}</span></h2>
                
                <PlayerGameForm randomizeLetter = {this.randomLetter}/>
            </div>
        )
    }
}


export default LetterRandomizer

