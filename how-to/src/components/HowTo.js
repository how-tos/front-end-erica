import React, { Component } from 'react';
import '../css/howto.css'
import HeartIcon from '../img/heart_outline.svg'
import RedHeart from '../img/red_heart.png'


class HowTo extends React.Component {
    constructor (props) {
        super(props)
        this.state={
            isSaved: false,
            saved: false,
            savedGuides: [], 
        }
    }

    save = (e) => {
        e.preventDefault();
        let saved = this.state.isSaved;
        console.log(saved);
        if(saved){
            this.setState({
                isSaved: !this.state.saved,
                saved: !this.state.saved,
            })
        } else{
            this.setState({
                isSaved: !this.state.saved,
                saved: !this.state.saved,
            })
        }
    }

    render() {
        return (

            <div className="Howto">
                <div className ="guideName">{this.props.name}</div>
                <img className="heart-icon" onClick ={this.save} src={!this.state.isSaved ? HeartIcon : RedHeart} />
            </div>
        )
    }
}

export default HowTo;