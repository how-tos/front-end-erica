import React from 'react';


class SearchBar extends React.Component { 
    state = {
        search: "",
        filteredList: [], 
    }

    handleChange = e => {
        this.setState({
            search: e.target.value
        });
    }

    filterGuides = (e, search) => {
        e.preventDefault(); 
        console.log(search)
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
            <button onClick={ () => {this.filterGuides(this.state.search)}}>Search</button>
            </div>
        )
    }
}

export default SearchBar;