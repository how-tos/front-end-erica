import React, { Component } from 'react';
import '../css/howto.css'
import HeartIcon from '../img/heart_outline.svg'
import RedHeart from '../img/red_heart.png'
import gardening from '../img/gardening.jpeg'

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
                <img className="cover" src={gardening}/>
                <div className="information">
                    <div className ="guideName">{this.props.name}</div>
                    <div className="tags-and-pills">
                        <img className="heart-icon"  onClick ={this.save} src={!this.state.isSaved ? HeartIcon : RedHeart} />
                        <div className="medicinePills">{this.props.tags.map(tag => (<div className="pill">{tag}</div>))}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HowTo;