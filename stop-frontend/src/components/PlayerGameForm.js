import React, { Component } from 'react'

export default class PlayerGameForm extends Component {

    state = {
        initials: "",
        name: "",
        place: "",
        color: "",
        animal: "",
        thing: ""
    }
    
    render() {
        return (
            <div>
                <form>
                    Initials:<input type="text" value={this.state.initials}/><br/>
                    Name:<input type="text" value={this.state.name}/><br/>
                    Place:<input type="text" value={this.state.place}/><br/>
                    Color:<input type="text" value={this.state.color}/><br/>
                    Animal:<input type="text" value={this.state.animal}/><br/>
                    Thing:<input type="text" value={this.state.thing}/><br/>
                    <input type="submit" value="STOP"/>
                </form>
            </div>
        )
    }
}
