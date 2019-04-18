import React from "react";
import axios from "axios";
import {Route, Link} from "react-router-dom"
import Navigation from './Navigation'
import SearchBar from './SearchBar'

class MyGuides extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Navigation createPost={this.props.createPost}/>
                <div className="secondary-header">
                    <div className="title">My Guides</div>
        </div> 
            </div>
            )

    }
}

export default MyGuides;