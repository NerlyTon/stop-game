import React from 'react'
import {Link} from 'react-router-dom'


export default function Nav() {
    return (
        <div>
            <ul>
                <li><Link to='/'>Game</Link></li>
                <li><Link to='/rules'>Rules</Link></li>
                <li><Link to='/scores'>Scores</Link></li>
            </ul>
        </div>
    )
}
