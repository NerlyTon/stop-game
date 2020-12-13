import React, { Component } from 'react'
import { ActionCableConsumer } from 'react-actioncable-provider';
import { createPlayer } from '../redux/actions/playerActions'
import { connect } from 'react-redux'


class PlayerGameForm extends Component {

    state = {
        initials: "",
        name: "",
        place: "",
        color: "",
        animal: "",
        thing: ""
    }

    // handleChange = e => {
    //     this.setState({ initials: e.target.value });
    //     debugger
    //   };

    submit = (e) => {
        e.preventDefault();
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
    
    render() {
        return (
            <div>
                <form onSubmit={this.submit}>
                <ActionCableConsumer
                channel={{ channel: 'PlayersChannel' }}/>
                    Initials:<input onChange={(e) => this.setState({ initials: e.target.value })} type="text" value={this.state.initials}/><br/>
                    Name:<input onChange={(e) => this.setState({ name: e.target.value })} type="text" value={this.state.name}/><br/>
                    Place:<input onChange={(e) => this.setState({ place: e.target.value })} type="text" value={this.state.place}/><br/>
                    Color:<input onChange={(e) => this.setState({ color: e.target.value })} type="text" value={this.state.color}/><br/>
                    Animal:<input onChange={(e) => this.setState({ animal: e.target.value })} type="text" value={this.state.animal}/><br/>
                    Thing:<input onChange={(e) => this.setState({ thing: e.target.value })} type="text" value={this.state.thing}/><br/>
                    <input type="submit" value="STOP"/>
                </form>
            </div>
        )
    }
}

export default connect(null, { createPlayer })(PlayerGameForm)