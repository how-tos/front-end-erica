import React from "react"; 
import HowTo from "./HowTo"; 
import SearchBar from './SearchBar'
import Navigation from './Navigation'
import '../css/howto.css'
import axiosWithHeaders from './utils/headers';


class HowToList extends React.Component {
    state = {
        HowTos: [
            // {name: "Guide 1",
            // tag: ["Home", "garden"],
            // id: 1}, 
            // {name: "Guide 2",
            // tag: ["baking", "cooking"],
            // id: 2}, 
            // {name: "Guide 3: home cooking",
            // tag: ["home", "Cooking"],
            // id: 3},
            // {name: "Guide 4: home cooking",
            // tag: ["home", "Cooking"],
            // id: 4},
            // {name: "Guide 4: home cooking",
            // tag: ["home", "Cooking"],
            // id: 5},
            // {name: "Guide 4: home cooking",
            // tag: ["home", "Cooking"],
            // id: 6}
        ],
        isLoggedIn: true,
        filteredList: [],
        isFiltered: false,
        search: '',
    }

    componentDidMount() {
        axiosWithHeaders()
            .get("https://how-to-lambda.herokuapp.com/api/how-to")
            .then(res => {
                this.setState({
                    HowTos:res.data
                });
            })
            .catch(err => console.log("failed to get data", err.response));
        }

    filterGuides = (e, search) => {
        if (e.key=== 'Enter') {
            let newArray = [];
            console.log(this.state.HowTos)
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
            console.log(this.state.filteredList);  
            return false;
        }
        return true;
    }

    clearSearch = e => {
        e.preventDefault();

        console.log("Clear search")
        console.log(this.state.filteredList)
        console.log(this.state.HowTos)
        this.setState({
            isFiltered: false,
            search: '',
            filteredList: [],
        })
    }


    handleChange = (e, text) => {
        this.setState({
            search: text
        });
    }


render() {
    if(!localStorage.getItem("token")) {
        return <h1>You are not an authorized user. Please log in again</h1>;
    }

    return(
        <div>
             <Navigation />
        <div className="secondary-header">
            <div className="title">Browse Guides</div>
            <SearchBar 
                HowTo={this.state.HowTos} 
                filterGuides = {this.filterGuides} 
                filteredList={this.state.filteredList} 
                isFiltered={this.state.isFiltered}
                clearSearch = {this.clearSearch}
                search = {this.state.search}
                handleChange = {this.handleChange}
            />
        </div> 
            <div className="list">
            {this.state.isFiltered ? this.state.filteredList.map(howTo => (
                    <HowTo className="individualGuide"
                        key={howTo.id}
                        HowTo={howTo}
                        name={howTo.name}
                    />)) :
                    this.state.HowTos.map(howTo => (
                <HowTo className="individualGuide"
                    key={howTo.id}
                    HowTo={howTo}
                    name={howTo.name}
                />))}
            </div>

        </div>
    )
    }
}

export default HowToList;