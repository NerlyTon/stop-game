import React, { Component } from 'react'
import { ActionCableConsumer } from 'react-actioncable-provider';
import { createPlayer } from '../redux/actions/playerActions'
import { connect } from 'react-redux'
// import LetterRandomizer from './LetterRandomizer';
// import Timer from './Timer';


class PlayerGameForm extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         initials: "",
    //         name: "",
    //         place: "",
    //         color: "",
    //         animal: "",
    //         thing: ""
    //     }

    //     // this.handleStopTimer = this.handleStopTimer.bind(this)
    // }
    
    state = {
        initials: "",
        name: "",
        place: "",
        color: "",
        animal: "",
        thing: ""
            }
  
    submit = (e) => {
        e.preventDefault();
        this.props.sendFuntion(e)
        this.props.createPlayer(this.state);
        this.setState({
            initials: "",
            name: "",
            place: "",
            color: "",
            animal: "",
            thing: ""
        });
    };

    handleReceivedPlayers = (player)=> {
        this.props.allPlayers(props => {
            return {
              player
            };
          });
        
       
    };
    
    render() {
        return (
            <div>
                
                <form onSubmit={this.submit}>
                <ActionCableConsumer
                channel={{ channel: 'PlayersChannel' }}/>
                    Player(Initials or Username):<input onChange={(e) => this.setState({ initials: e.target.value })} type="text" value={this.state.initials}/><br/><br/><br/><br/><br/>
                    Name:<input onChange={(e) => this.setState({ name: e.target.value })} type="text" value={this.state.name}/><br/><br/>
                    Place:<input onChange={(e) => this.setState({ place: e.target.value })} type="text" value={this.state.place}/><br/><br/>
                    Color:<input onChange={(e) => this.setState({ color: e.target.value })} type="text" value={this.state.color}/><br/><br/>
                    Animal:<input onChange={(e) => this.setState({ animal: e.target.value })} type="text" value={this.state.animal}/><br/><br/>
                    Thing:<input onChange={(e) => this.setState({ thing: e.target.value })} type="text" value={this.state.thing}/><br/><br/>
                    <input type="submit" value="STOP"/>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {allPlayers: state.allPlayers}
}


export default connect(mapStateToProps, { createPlayer })(PlayerGameForm)
