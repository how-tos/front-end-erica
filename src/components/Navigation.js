import React, { Component } from 'react';
import {Route, Link} from "react-router-dom"
import LogoBlue from '../img/H2-Logo-Blue.png'
import '../css/navigation.css'


const Navigation = () => {
    return(
    <nav>
        <Link to = "/howTos"><img className="logoheader" src={LogoBlue} /></Link>
        <div className="links">
            <Link to = "/savedGuides" className="heading">Saved Guides</Link>
            <Link to = "/myGuides" className="heading">My Guides</Link>
            <Link to = "/addHowTo" className="addGuide">Make Guide</Link>
        
        </div>

    </nav> 
    )
}

export default Navigation;