import React, { Component } from 'react'
import { createPlayer, sendTime, reset } from '../redux/actions/playerActions'
import { connect } from 'react-redux'
import history from '../history';


class PlayerGameForm extends Component {
  
    
    state = {
        initials: "",
        name: "",
        place: "",
        color: "",
        animal: "",
        thing: "",
        score: 0,
        highscore: 0
    }
  

    submit = (e) => {
        e.preventDefault();
        this.props.randomizeLetter(e)
        this.props.createPlayer(this.state)
        this.setState((prevState) => ({ score: prevState.score + 5 }))
        this.setState({
            initials: "",
            name: "",
            place: "",
            color: "",
            animal: "",
            thing: ""
        })
    };

  click = (e) => {
    e.preventDefault();
    // this.props.sendTime({currentTime: null})
    // this.props.randomizeLetter(e)
    this.props.reset()
    history.push('/')
  }
    
  handleChange = (e) => {
    const value = e.target.value
    this.setState({
        [e.target.name]: value
    })
  }

    
    
    render() {
        let form = <form onSubmit={this.submit}>
            Player(Initials or Username):<input onChange={this.handleChange} name="initials" type="text" value={this.state.initials} required/><br/><br/><br/><br/><br/>
            Name:<input onChange={this.handleChange} name="name" type="text" value={this.state.name}required/><br/><br/>
            Place:<input onChange={this.handleChange} name="place" type="text" value={this.state.place}required/><br/><br/>
            Color:<input onChange={this.handleChange} name="color" type="text" value={this.state.color}required/><br/><br/>
            Animal:<input onChange={this.handleChange} name="animal" type="text" value={this.state.animal}required/><br/><br/>
            Thing:<input onChange={this.handleChange} name="thing" type="text" value={this.state.thing}required/><br/><br/>
            <input type="submit" value="SUBMIT"/>                  
        </form>
        let display;
        if(this.props.time){
            if(this.props.time.currentTime === 2) { 
                display = <button onClick={this.click}>NEW GAME</button>   
            } 
        } else {
            display = form 
        }
        
        return (
            <div>
                {display}
                <br/><br/>
                YOUR SCORE: {this.state.score}
            </div>
        )
    }
}

const mapStateToProps = (time) => {
    console.log("pgf map", time)
    return {
        time: time.time
    }
}


export default connect(mapStateToProps, { createPlayer, sendTime, reset})(PlayerGameForm)
