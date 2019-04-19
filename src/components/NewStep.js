import '../css/newGuide.css'
import React from 'react';

class NewStep extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            text: '',
            id: '',
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };


    render() {
        return (
            <div className ="step-input">
                <input
                className = "step"
                type="text"
                name="title"
                onChange={this.handleChange}
                value={this.state.title}
                placeholder="title"
                />

                <input
                className = "step-description"
                type="text"
                name="text"
                onChange={this.handleChange}
                value={this.state.text}
                placeholder="description"
                />

                <button onClick={ (e) => {this.props.newStep(e, this.state)}}>New Step</button>
            </div>
        )
    }
}

export default NewStep;