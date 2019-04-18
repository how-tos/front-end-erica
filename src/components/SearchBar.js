import React from 'react';
import Search from '../img/search.png';
import '../css/Search.css';
import cross from '../img/cross_icon.png'

class SearchBar extends React.Component { 
    constructor(props) {
    super(props);
    this.state = {
        search: props.search,
        filteredList: props.filteredList, 
        isFiltered: props.isFiltered,
        HowTo: props.HowTo,
        searching: false,
        }
    }

    handleChange = e => {
        this.setState({
            search: e.target.value
        });
    }

    // clearSearch = e => {
    //     e.preventDefault();
    //     console.log("Clear search")
    //     this.setState({
    //         isFiltered: false,
    //     })
    // }

    search = () => {
        console.log("Searching")
        console.log(this.state.searching)
        this.setState({
            searching: !this.state.searching,
        })
    }

    render(){
        return (
            <div className="search">
                    <img onClick={this.search} className="search-icon" src={Search} />
                    {this.state.searching ?<div className="searchInput">
                    <input className="searchbar" onKeyPress={ (e) => {this.props.filterGuides(e, this.state.search)}}
                    type="text"
                    name="search"
                    onChange={ (e) => {this.handleChange(e)}}
                    value={this.state.search}
                    />
                    <img src={cross} className="clear" onClick={this.props.clearSearch} style={!this.props.isFiltered ? {display: 'none'} : {display: "block"}} />
                    </div> : ' '}
            </div>
        )
    }
}

export default SearchBar;