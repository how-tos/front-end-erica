import '../css/newGuide.css'
import React from 'react';

class NewStep extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <input
            className = "step"
            type="text"
            name="steps"
            onChange={this.props.handleChange}
            value={this.props.step}
            placeholder="tags"
            />
        )
    }
}

export default NewStep;