import React from 'react';
import { fromEventPattern } from 'rxjs';


class SearchBar extends React.Component { 
    constructor(props) {
    super(props);
    this.state = {
        search: "",
        filteredList: props.filteredList, 
        isFiltered: props.isFiltered,
        HowTo: props.HowTo,
    }
    }

    handleChange = e => {
        this.setState({
            search: e.target.value
        });
    }

    render(){
        return (
            <div>
            <input
            type="text"
            name="search"
            onChange={this.handleChange}
            value={this.state.search}
            />
            <button onClick={ (e) => {this.props.filterGuides(e, this.state.search)}}>Search</button>
            </div>
        )
    }
}

export default SearchBar;