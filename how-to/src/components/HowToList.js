import React from "react"; 
import HowTo from "./HowTo"; 


class HowToList extends React.Component {
    state = {
        HowTos: [
            {name: "Guide 1"}, 
            {name: "Guide 2"}, 
            {name: "Guide 3"}
        ],
        isLoggedIn: true,
    }

render() {
    if(!localStorage.getItem("token")) {
        return <h1>You are not an authorized user. Please log in again</h1>;
    }

    return(
        <div>
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