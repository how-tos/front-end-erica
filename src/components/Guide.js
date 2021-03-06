import React, { Component } from 'react';
import '../css/guide.css'
import HeartIcon from '../img/heart_outline.svg'
import RedHeart from '../img/red_heart.png'
import gardening from '../img/gardening.jpeg'
import gardening2 from '../img/gardening2.jpeg';
import woodworking from '../img/woodworking.jpeg';
import Back from '../img/back.png'
import axiosWithHeaders from './utils/headers';
import EditHowTo from './EditHowTo';


class Guide extends React.Component {
    constructor (props) {
        super(props)
        this.state={
            isFavorite: true,
            userID: props.userID,
            editingPost: [],
            isEditing: false,
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

        console.log(this.props.iqaaaaaaz2wwwwswawssd)
        axiosWithHeaders()
            .post(`https://how-to-lambda.herokuapp.com/api/how-to/${this.props.id}/favorite`, newSave)
            .then(res => {
                console.log(res);
            })
            .catch(err => console.log(err.response));
        
    }


    deletePost = () => {
        console.log("deleting post")

        axiosWithHeaders() 
            .delete(`https://how-to-lambda.herokuapp.com/api/how-to/${this.props.selectedId}`)
            .then(res => {
                console.log(res);
                this.setState();
                this.props.deselect();

                // if(status == '204') {
                //     this.props.history.push('/howTos');
                // }
            })
            .catch(err => console.log(err.response));
            
    }


    editPost = () => {
        console.log("editing post")
        
        axiosWithHeaders()
            .put(`https://how-to-lambda.herokuapp.com/api/how-to/${this.props.selectedId}`)
            .then(res => {
                console.log(res);
                this.setState({
                    editingPost: res.data,
                    isEditing: true,
                })
            })
            .catch(err => console.log(err.response));
    }
   

    render() {
        return (
            <div className="guide">      
                {!this.state.isEditing ? <div>
                <div className="secondary-header-guide">
                    <div className="title-back">
                        <img onClick={this.props.clearSelected} className="back" src={Back}/>
                        <div className="title">{this.props.name}</div>
                    </div>
                    <button onClick={this.deletePost}>delete</button>
                    <button onClick={this.editPost}>Edit</button>
                    <img className="heart-icon-guide"  onClick ={(e) => this.save(e, this.props.id)} src={!this.state.isSaved ? HeartIcon : RedHeart} />
                </div> 
                <div className="medicinePills-guide">{this.props.tags.map(tag => (<div className="pill-guide">{tag}</div>))}</div>
                <div className="image-wrapper"><img className="guide-cover" src={gardening}/></div>
                <div className="steps">{this.props.steps.map(step=> (
                    <div>{step.title}
                {step.text} </div>)
                )}
                    </div></div> :
                    <EditHowTo title={this.props.name} tags={this.props.tags} img={this.props.image}/>
                }
            </div> 
        )
    }
}

export default Guide;