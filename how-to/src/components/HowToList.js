import React from "react"; 
import HowTo from "./HowTo"; 
import SearchBar from './SearchBar'

class HowToList extends React.Component {
    state = {
        HowTos: [
            {name: "Guide 1",
            tag: ["Home", "garden"],
            id: 1}, 
            {name: "Guide 2",
            tag: ["baking", "cooking"],
            id: 2}, 
            {name: "Guide 3: home cooking",
            tag: ["home", "Cooking"],
            id: 3}
        ],
        isLoggedIn: true,
        filteredList: [],
        isFiltered: false,
    }

    filterGuides = (e, search) => {
        e.preventDefault(); 
        let newArray = [];
        console.log(this.props.HowTo)
        this.state.HowTos.map(guide => {
            const LowerCase = guide.name.toLowerCase()
            // const LowerTags = guide.tag.map(tag=> tag.toLowerCase())
            const tags = guide.tag;

            if (LowerCase.indexOf(search) > -1) {
                newArray.push(guide);
            }
            else {
                for (let i = 0; i<guide.tag.length; i++) {
                    if (tags[i].toLowerCase().indexOf(search)> -1) {
                        newArray.push(guide);
                    }
                }
            }
        }
        )
        this.setState({
            filteredList: newArray,
            isFiltered: true,
         })
        console.log(newArray);  
    }

render() {
    if(!localStorage.getItem("token")) {
        return <h1>You are not an authorized user. Please log in again</h1>;
    }

    return(
        <div>
            <SearchBar 
                HowTo={this.state.HowTos} 
                filterGuides = {this.filterGuides} 
                filteredList={this.state.filteredList} 
                isFiltered={this.state.isFiltered}
            />
            {this.state.isFiltered ? this.state.filteredList.map(howTo => (
                    <HowTo 
                        key={howTo.id}
                        HowTo={howTo}
                        name={howTo.name}
                    />)) :
                    this.state.HowTos.map(howTo => (
                <HowTo 
                    key={howTo.id}
                    HowTo={howTo}
                    name={howTo.name}
                />))}
        </div>
    )
    }
}

export default HowToList;