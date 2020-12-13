import React from 'react'

export default function PlayerAnswers({ player }) {
    return (
        <div>
           <li>{player.initials} - {player.name} - {player.place} - {player.color} - {player.animal} - {player.thing}</li> 
        </div>
    )
}
