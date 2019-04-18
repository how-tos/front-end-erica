import React, { Component } from 'react';
import '../css/guide.css'
import HeartIcon from '../img/heart_outline.svg'
import RedHeart from '../img/red_heart.png'
import gardening from '../img/gardening.jpeg'


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
                test2 
                    <img className="guide-cover" src={gardening}/>
                    <div className="guide-information">
                        <div className="guide-title-like">
                            <p>{this.props.name}</p>
                            <img className="heart-icon"  onClick ={this.save} src={!this.state.isSaved ? HeartIcon : RedHeart} />
                        </div>      

                        {/* <div className="medicinePills">{this.props.tags.map(tag => (<div className="pill">{tag}</div>))}</div> */}
                        
                    </div>
            
            </div> 
        )
    }
}

export default Guide;