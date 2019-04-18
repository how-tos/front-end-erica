import React, { Component } from 'react';
import '../css/guide.css'
import HeartIcon from '../img/heart_outline.svg'
import RedHeart from '../img/red_heart.png'
import gardening from '../img/gardening.jpeg'
import Back from '../img/back.png'


class Guide extends React.Component {
    constructor (props) {
        super(props)
        this.state={

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
            <div className="guide">      
                
                <div className="secondary-header-guide">
                    <div className="title-back">
                        <img onClick={this.props.clearSelected} className="back" src={Back}/>
                        <div className="title">{this.props.name}</div>
                    </div>
                    <img className="heart-icon-guide"  onClick ={this.save} src={!this.state.isSaved ? HeartIcon : RedHeart} />
                </div> 
                <div className="medicinePills-guide">{this.props.tags.map(tag => (<div className="pill-guide">{tag}</div>))}</div>
                <div className="image-wrapper"><img className="guide-cover" src={gardening}/></div>
                <div className="steps">{this.props.steps.map(step=> (
                    <div>{step.title}
                {step.text} </div>)
                )}
                    </div>
            </div> 
        )
    }
}

export default Guide;