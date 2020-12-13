import React from 'react'

export default function PlayerAnswers({ player }) {
    return (
        
        <li key={player.id}> {player.initials} - {player.name} - {player.place} - {player.color} - {player.animal} - {player.thing}</li> 

        
    )
}
