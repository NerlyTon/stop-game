import React from 'react'
import {Link} from 'react-router-dom'


export default function Nav() {
    return (
        <div>
            <Link to='/'>Rules</Link><br/>       
            <Link to='/game'>Game</Link>
        </div>
    )
}
