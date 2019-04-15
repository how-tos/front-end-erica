import React from 'react';


class SearchBar extends React.Component { 
    constructor(props) {
    super(props);
    this.state = {
        search: props.search,
        filteredList: props.filteredList, 
        isFiltered: props.isFiltered,
        HowTo: props.HowTo,
    }
    }

    // handleChange = e => {
    //     this.setState({
    //         search: e.target.value
    //     });
    // }

    // clearSearch = e => {
    //     e.preventDefault();
    //     console.log("Clear search")
    //     this.setState({
    //         isFiltered: false,
    //     })
    // }

    render(){
        return (
            <div>
            <input
            type="text"
            name="search"
            onChange={ (e) => {this.props.handleChange(e, this.target.value)}}
            value={this.state.search}
            />
            <button onClick={ (e) => {this.props.filterGuides(e, this.state.search)}}>Search</button>
            <button onClick={this.props.clearSearch} style={!this.props.isFiltered ? {display: 'none'} : {display: "block"}} >clear search</button>
            </div>
        )
    }
}

export default SearchBar;