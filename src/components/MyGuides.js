import React from "react";
import axiosWithHeaders from './utils/headers';
import {Route, Link} from "react-router-dom"
import Navigation from './Navigation'
import SearchBar from './SearchBar'

class MyGuides extends React.Component {
    constructor(props) {
        super(props);
        this.setState({
            getGuides: [], 
            
        })
    }

    componentDidMount() {
        axiosWithHeaders()
            .get(`https://how-to-lambda.herokuapp.com/api/how-to/author/${this.props.authorID}`)
            .then(res => {
                this.setState({
                    getGuides: res.data, 
                });
                console.log(this.state.getGuides)
            })
            .catch(err => console.log("failed to get data", err.response));
        }

    render() {
        return (
            <div>
                <Navigation createPost={this.props.createPost}/>
                <div className="secondary-header">
                    <div className="title">My Guides</div>
                </div>
                {/* {this.state.getGuides.map(guide => 
                    <div>{guide.title}</div>)}  */}
            </div>
            )

    }
}

export default MyGuides;