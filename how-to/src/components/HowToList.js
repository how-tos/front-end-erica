import React from "react"; 
import HowTo from "./HowTo"; 
import SearchBar from './SearchBar'

class HowToList extends React.Component {
    state = {
        HowTos: [
            {name: "Guide 1",
            tag: ["home", "garden"]}, 
            {name: "Guide 2",
            tag: ["baking", "cooking"]}, 
            {name: "Guide 3",
            tag: ["home", "cooking"]}
        ],
        isLoggedIn: true,
    }

render() {
    if(!localStorage.getItem("token")) {
        return <h1>You are not an authorized user. Please log in again</h1>;
    }

    return(
        <div>
            <SearchBar />
            hello
            {this.state.HowTos.map(howTo => (
                <HowTo 
                    key={howTo.id}
                    HowTo={howTo}
                    name={howTo.name}
                />
            ))}
        </div>
    )
    }
}

export default HowToList;