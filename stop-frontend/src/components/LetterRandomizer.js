import React, { Component } from 'react'

export default class LetterRandomizer extends Component {
    
    

    randomLetter = () => {
        // e.preventDefault()
        let letter
      const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  
        for (let i = 0; i < alphabet.length; i += 1) {
      letter = alphabet[Math.floor(Math.random()*alphabet.length)]
    }
    return letter
    }
 

    render() {
        return (
            <div>
                <this.randomLetter/><br/><br/>
            <form onSubmit={this.randomLetter}>
            <input type="submit" value="NEW LETTER"/>
            </form>
            </div>
        )
    }
}

