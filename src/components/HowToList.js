import React from "react"; 
import HowTo from "./HowTo"; 
import SearchBar from './SearchBar'
import Navigation from './Navigation'
import '../css/howto.css'
import axiosWithHeaders from './utils/headers';
import gardening from '../img/gardening.jpeg';
import gardening2 from '../img/gardening2.jpeg';
import woodworking from '../img/woodworking.jpeg';
import {Link, Route} from 'react-router-dom';
import Guide from './Guide'

class HowToList extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            HowTos: [],
            isLoggedIn: true,
            filteredList: [],
            isFiltered: false,
            search: '',
            allTags: props.allTags,
            images: [gardening, gardening2, woodworking],
            selectedId: '',
            isSelected: false, 
        }
    }
    

    componentDidMount() {
        axiosWithHeaders()
            .get("https://how-to-lambda.herokuapp.com/api/how-to")
            .then(res => {
                this.setState({
                    HowTos: res.data, 
                });
            })
            .catch(err => console.log("failed to get data", err.response));
        }

    filterGuides = (e, search) => {
        if (e.key=== 'Enter') {
            let newArray = [];
            console.log(this.state.HowTos)
            this.state.HowTos.map(guide => {
                const LowerCase = guide.title.toLowerCase()
                // const LowerTags = guide.tag.map(tag=> tag.toLowerCase())
                const tags = guide.tags;
                
                if (LowerCase.indexOf(search) > -1) {
                    newArray.push(guide);
                }
                else {
                    for (let i = 0; i<guide.tags.length; i++) {
                        if (tags[i].toLowerCase().indexOf(search)> -1) {
                            newArray.push(guide);
                        }
                    }
                }
            }
            )
            this.getTags();            
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

    getTags = () => {
        let arrayTags = [];
        this.state.HowTos.map(guide => {
            let tags = guide.tags;
            arrayTags = arrayTags.concat(tags); 
            console.log([...new Set(arrayTags)]);
            console.log(this.state.allTags);
            this.setState({
                allTags: [...new Set(arrayTags)],
            })
        })

    }

    selected = (id) => {
        console.log(id);
        this.setState({
            selectedId: id,
            isSelected: true,
        })
    }

    clearSelected = () => {
        this.setState({
            selectedId: '',
            isSelected: false, 
        })
    }

render() {
    if(!localStorage.getItem("token")) {
        return <h1>You are not an authorized user. Please log in again</h1>;
    }

    return(
        <div>
             <Navigation />
             {!this.state.isSelected ? <div>
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
                    <div className = "listofGuides" onClick={this.selected(howTo._id)}><HowTo className="individualGuide"
                        key={howTo._id}
                        HowTo={howTo}
                        name={howTo.title}
                        tags={howTo.tags}
                    /></div>)) :
                    this.state.HowTos.map(howTo => 
                        <div className = "listofGuides" onClick={(e) => this.selected(howTo._id)}><HowTo className="individualGuide"
                    key={howTo._id}
                    HowTo={howTo}
                    name={howTo.title}
                    tags={howTo.tags}
                    steps={howTo.steps}
                /></div>)}
                
            </div>
            </div>
            : this.state.HowTos.filter(howTo => howTo._id === this.state.selectedId).map(object => 
                <Guide 
                clearSelected = {this.clearSelected}
                name = {object.title}
                tags = {object.tags}
                steps = {object.steps}
                />)

            } 
            
        </div>
    )
    }
}

export default HowToList;