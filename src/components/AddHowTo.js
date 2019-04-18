import React from 'react';
import Navigation from './Navigation'
import '../css/newGuide.css'
import NewStep from './NewStep'
import axiosWithHeaders from "./utils/headers";

class AddHowTo extends React.Component {
    state={
        authorID: localStorage.getItem("token"),
        title: "",
        tags: [],
        steps: [], 
        step: '',
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log("submitted")
        const newHowTo = this.state; 

        axiosWithHeaders()
            .post("https://how-to-lambda.herokuapp.com/api/how-to/", newHowTo)
            .then(res => {
                this.props.history.push("/how-to");
            })
            .catch(err=>console.log(err.response));

    }

    newStep = e =>{
        e.preventDefault();
        console.log("New Step")
        const item = this.state.steps;
        item.push('hello')
        this.setState({steps:item});
        
    }


render() {
    return ( 
        <div>
            <Navigation />
            <div className="secondary-header">
                    <div className="title">Create Guide</div>
            </div> 
            
            <div className="guideForm">
                <form className="guideForm" onSubmit={this.handleSubmit}>
                <input 
                    className = "newGuide"
                    type="text"
                    name="title"
                    onChange={this.handleChange}
                    value={this.state.title}
                    placeholder="title"
                />
                <input
                    className = "newGuide"
                    type="text"
                    name="tags"
                    onChange={this.handleChange}
                    value={this.state.tags}
                    placeholder="tags"
                />
                {this.state.steps.map (step => (
                    <NewStep step={step} />
                ))}
                <NewStep handleChange = {this.handleChange} step={this.state.step}/>
                <button onClick={this.newStep}>New Step</button>
                <button onClick={this.handleSubmit}>Add</button>
                </form>
            </div>
      </div>
    )
    }
}

export default AddHowTo;