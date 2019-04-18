import React, { Component } from 'react';
import '../css/guide.css'
import HeartIcon from '../img/heart_outline.svg'
import RedHeart from '../img/red_heart.png'
import gardening from '../img/gardening.jpeg'
import Back from '../img/back.png'
import axiosWithHeaders from './utils/headers';


class Guide extends React.Component {
    constructor (props) {
        super(props)
        this.state={
            isFavorite: true,
            userID: props.userID,
        }
    }


    save = (e, id) => {
        e.preventDefault();
        let saved = this.state.isSaved;
        const{ isFavorite, userID } = this.state;
        console.log(saved);
        const newSave = {
            isFavorite,
            userID,
        };

        if(saved){
            this.setState({
                isSaved: !this.state.saved,
                saved: !this.state.saved,
                isFavorite: !this.state.isFavorite,
            })
            this.props.setSave(this.props.id); 
        } else{
            this.setState({
                isSaved: !this.state.saved,
                saved: !this.state.saved,
                isFavorite: !this.state.isFavorite,
            })
        }

        console.log(this.props.id)
        axiosWithHeaders()
            .post(`https://how-to-lambda.herokuapp.com/api/how-to/${this.props.id}/favorite`, newSave)
            .then(res => {
                console.log(res);
            })
            .catch(err => console.log(err.response));
        
    }

   

    render() {
        return (
            <div className="guide">      
                
                <div className="secondary-header-guide">
                    <div className="title-back">
                        <img onClick={this.props.clearSelected} className="back" src={Back}/>
                        <div className="title">{this.props.name}</div>
                    </div>
                    <img className="heart-icon-guide"  onClick ={(e) => this.save(e, this.props.id)} src={!this.state.isSaved ? HeartIcon : RedHeart} />
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