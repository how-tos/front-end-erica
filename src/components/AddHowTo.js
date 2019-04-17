import React from 'react';
import Navigation from './Navigation'
class AddHowTo extends React.Component {
    state={
        title: "",
        tags: [],
        steps: [], 
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

    }


render() {
    return (
        <div>
            <Navigation />
            <h1>New Guide</h1>
            <form action="" onSubmit={this.handleSubmit}>
            <input
                type="text"
                name="title"
                onChange={this.handleChange}
                value={this.state.title}
                placeholder="title"
            />
            <input
                type="text"
                name="tags"
                onChange={this.handleChange}
                value={this.state.tags}
                placeholder="tags"
            />
            <button onClick={this.handleSubmit}>Add</button>
            </form>
      </div>
    )
    }
}

export default AddHowTo;