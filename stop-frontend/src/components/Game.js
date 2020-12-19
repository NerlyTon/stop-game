import React, { Component } from 'react'
import {connect} from 'react-redux'
import { playerAns } from '../redux/actions/playerActions'
import PlayerAnswers from './PlayerAnswers'
import { ActionCableConsumer } from 'react-actioncable-provider';
import Timer from './Timer';



class Game extends Component {
    
    state = {
        players: [],
        currentTime: 0,
      };


    handleReceivedPlayers = (players)=> {
        // debugger
        // console.log("here", players)
        const player = players.player
       
        this.props.playerAns(player)
        console.log("inside the handle", players)
        
       };

       infoFromChild = (info) => {
        this.setState({
        currentTime: info.currentTime,
        })
        // debugger
        console.log(this.state.currentTime)
       }
    
      



    render() {

        console.log(this.state, "state")
        console.log(this.props.playerA, "redux")
        return (
            <div>
                <ActionCableConsumer
                channel={{ channel: 'PlayersChannel' }}
                onReceived={this.handleReceivedPlayers}
                />
           
                
                <Timer fromParent={this.infoFromChild}/>
               
                <h2>Players Answers</h2>
             
            
                {this.props.playerA.map((player) => {
               return <PlayerAnswers player={player} key={player.id} state={this.state.info}/>
                })}

                
                
            </div>
        )
    }
}

const mapStateToProps = (players) => {
    console.log("inside map", players)
    return {
        playerA: players.playerAns
    }
}

export default connect(mapStateToProps, { playerAns })(Game)


            // e.preventDefault()
            

        // this.setState({toggle: true, players: this.state.players.push(player)})
        // this.setState(prevState => {
        //     return {
        //        players: [...prevState.players, player]
        //     }
        //  });


//    this.props.player -- 
        // this.state.players.push(player)
        // this.props.getPlayers({
        //     players: [ player]
        //   });
        // <li> {players.initials} - {players.name} - {players.place} - {players.color} - {players.animal} - {players.thing}</li>
        // this.props.players.map((player) => (
        //     <PlayerAnswers player={player} key={player.id} />
        //     ))
        // this.props.createPlayer(this.state)
        // debugger
        // console.log("handlereceived players in home", this.props)
       
    // };

    // mapPlayers = (players) => {
    //     return players.map(player => {
    //       return (
    //         <PlayerAnswers player={player} key={player.id}/>)
    //         // {props.data}
    //         // <li key={player.id}> {player.initials} - {player.name} - {player.place} - {player.color} - {player.animal} - {player.thing} - {props.data}</li>)
    //     }
        
    // )
    


    // timer = () => {
    //     console.log("in the timer func")
    //     return <Timer/>

    // }

    // checkingToggle = () => {
    //     if(this.state.toggle) {
    //     return this.props.players.map((player) => {
    //            return <PlayerAnswers player={player} key={player.id} />
    //     })
    //     }
    // }
    