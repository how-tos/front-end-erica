import React from 'react';
import Navigation from './Navigation'
import '../css/newGuide.css'
import NewStep from './NewStep'
import axiosWithHeaders from "./utils/headers";
import ImageUploader from './ImageUploader';

// import { FilePond, registerPlugin } from "react-filepond";

class AddHowTo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            authorID: props.userID,
            title: "",
            tags: [],
            steps: {
                title: '',
                text: '',
                id: '',
            }, 
            step: '',
        }
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        const { authorID, title, tags } = this.state;
        e.preventDefault();
        console.log("submitted", this.props.userID);
        const newHowTo = {
            authorID,
            title,
            tags,
        };

        axiosWithHeaders()
            .post("https://how-to-lambda.herokuapp.com/api/how-to/", newHowTo)
            .then(res => {
                this.props.history.push("/howTos");
            })
            .catch(err=>console.log(err.response));

    }

    newStep = (e, step) =>{
        const newStep = this.state.steps; 
        e.preventDefault();
        console.log("New Step")
        this.setState({
            steps: (newStep, step),
        })
        // const item = this.state.steps;
        // item.push('hello')
        // this.setState({steps:item});

        axiosWithHeaders()
            .post("https://how-to-lambda.herokuapp.com/api/how-to/:howToID/steps", step)
            .then(res => {console.log(res)})
            .catch(err => console.log(err.response));
    }



render() {
    return ( 
        <div>
            <Navigation />
            <div className="secondary-header">
                    <div className="title">Create Guide</div>
            </div> 
            <div className="label">Cover Image</div>
            <div className="uploader"><ImageUploader /></div>
            <div className="guideForm">
                <form className="guideForm" onSubmit={this.handleSubmit}>
                <div className="label">Guide Title</div>
                <input 
                    className = "newGuide"
                    type="text"
                    name="title"
                    onChange={this.handleChange}
                    value={this.state.title}
                    placeholder="title"
                />
                <div className="tags">
                    <div className="label">Tags</div>
                    <input
                        className = "tag-input"
                        type="text"
                        name="tags"
                        onChange={this.handleChange}
                        value={this.state.tags}
                        placeholder="tags"
                    />
                </div>
                <div className="label">Steps</div>
                {/* {this.state.steps.map (step => (
                    <div>{step.title}</div>
                ))} */}
                <input
                    type="text"
                    name="step"
                    onChange={this.handleChange}
                    value={this.state.step}
                    placeholder="New Step"
                />
                <NewStep newStep={this.newStep} step={this.state.step}/>
                
                {/* <button onClick={this.newStep}>New Step</button> */}
                <button onClick={this.handleSubmit}>Add</button>
                </form>
               
            </div>
            
      </div>
    )
    }
}

export default AddHowTo;