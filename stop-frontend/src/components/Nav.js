import React from 'react'
import {Link} from 'react-router-dom'


export default function Nav() {
    return (
        <div>
            
                <Link to='/'>Game</Link><br/>       
                <Link to='/rules'>Rules</Link>
            
        </div>
    )
}
