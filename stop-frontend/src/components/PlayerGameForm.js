import React, { Component } from 'react'
import { createPlayer } from '../redux/actions/playerActions'
import { connect } from 'react-redux'




class PlayerGameForm extends Component {
  
    
    state = {
        initials: "",
        name: "",
        place: "",
        color: "",
        animal: "",
        thing: "",
        score: 0
            }
  

    submit = (e) => {
        e.preventDefault();
        this.props.sendFuntion(e)
        // this.props.sendAnotherFunction()
        this.props.createPlayer(this.state)
        this.setState((prevState) => ({ score: prevState.score + 1 }))
        this.setState({
            initials: "",
            name: "",
            place: "",
            color: "",
            animal: "",
            thing: ""
        });
    };

    

    
    
    render() {
        return (
            <div>
             
                <form onSubmit={this.submit}>
                    Player(Initials or Username):<input onChange={(e) => this.setState({ initials: e.target.value })} type="text" value={this.state.initials} required/><br/><br/><br/><br/><br/>
                    Name:<input onChange={(e) => this.setState({ name: e.target.value })} type="text" value={this.state.name}required/><br/><br/>
                    Place:<input onChange={(e) => this.setState({ place: e.target.value })} type="text" value={this.state.place}required/><br/><br/>
                    Color:<input onChange={(e) => this.setState({ color: e.target.value })} type="text" value={this.state.color}required/><br/><br/>
                    Animal:<input onChange={(e) => this.setState({ animal: e.target.value })} type="text" value={this.state.animal}required/><br/><br/>
                    Thing:<input onChange={(e) => this.setState({ thing: e.target.value })} type="text" value={this.state.thing}required/><br/><br/>
                    <input type="submit" value="SUBMIT"/>                  
                </form>
                <br/>
                YOUR SCORE: {this.state.score}
                
            </div>
        )
    }
}



export default connect(null, { createPlayer })(PlayerGameForm)
