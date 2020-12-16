import React, { Component } from 'react'
import { ActionCableConsumer } from 'react-actioncable-provider';


export default class LetterRandomizer extends Component {
    

    state = {
        letter: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
        selectedLetter: ""
    }

    

    randomLetter = () => {
        
        this.setState({
            selectedLetter: this.state.letter[Math.floor(Math.random()*this.state.letter.length)]
            
        })

    }
        
        
        // e.preventDefault()
    //     let letter
    //   const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  
    //     for (let i = 0; i < alphabet.length; i += 1) {
    //    letter = alphabet[Math.floor(Math.random()*alphabet.length)]
    // }console.log(letter)
    //     return letter
        
    

    // stateValue = () => {
    //     console.log(this.state.selectedLetter)
    //     return this.state.selectedLetter
    // }
    // addtoState = () => {
    // this.setState({
    //     letter: letter
    //     });
    //     debugger
    //     // console.log(this.state)
        
    // }
    // handleReceivedPlayers = response => {
    //     const { player } = response;
    //     this.setState({
    //       players: [...this.state.players, player]
    //     });
    //     // debugger
    //     // console.log("handlereceived players in home", this.props)
    // };

    // handleLetter = () => {
       
    //     this.setState({
    //         selectedLetter: this.state.letter[Math.floor(Math.random()*this.state.letter.length)]
    //     });
    //     // debugger
    //     return this.state.selectedLetter// console.log("handlereceived players in home", this.props)
    // };


    // oneLetter = () => {
    //     return this.handleLetter()
    // }

    render() {
        return (
            <div>
                <ActionCableConsumer
                channel={{ channel: 'PlayersChannel' }}
                onConnected={this.randomLetter}
                />
                Letter: {this.state.selectedLetter}<br/>
            {/* <form onSubmit={this.addtoState}>
            <input type="submit" value="NEW LETTER"/>
            </form> */}
            </div>
        )
    }
}

