import React from "react";
import axios from "axios";
import {Route, Link} from "react-router-dom"
import Navigation from './Navigation'
import SearchBar from './SearchBar'

class SavedGuides extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Navigation />
                <div className="secondary-header">
                    <div className="title">Saved Guides</div>
        </div> 
            </div>
            )

    }
}

export default SavedGuides;