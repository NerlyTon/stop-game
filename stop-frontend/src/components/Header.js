import React from 'react'
import Nav from './Nav'

export default function Header() {
    return (
        <div>
            <Nav/>
            <h1>WORD COMBAT<span className="badge bg-secondary"></span></h1>
        </div>
    )
}
