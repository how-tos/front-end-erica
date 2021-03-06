import React, { Component } from 'react';
import {Route, Link} from "react-router-dom"
import LogoBlue from '../img/H2-Logo-Blue.png'
import '../css/navigation.css'


class Navigation extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return(
        <nav>
            <Link to = "/howTos"><img className="logoheader" src={LogoBlue} /></Link>
            <div className="links">
                <Link to = "/savedGuides" className="heading">Saved Guides</Link>
                <Link to = "/myGuides" className="heading">My Guides</Link>
                <Link to = "/addHowTo" className="addGuide" onClick={this.props.createPost}>Make Guide</Link>
            
            </div>

        </nav> 
        )
    }
}

export default Navigation;