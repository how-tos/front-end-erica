import React, { Component } from 'react';
import './css/App.css';
import Login from './components/Login'
import {Route, Link} from "react-router-dom"
import HowToList from "./components/HowToList"
import AddHowTo from './components/AddHowTo'
import Register from './components/Register'
import SavedGuides from './components/SavedGuides'
import MyGuides from './components/MyGuides';
import HowTo from './components/HowTo';
import axiosWithHeaders from './components/utils/headers'
class App extends Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: false,
      authorID: '', 
      allTags: [],
      savedGuides: [],
      newHowTo: [],
    }
  }

  setId = (id) => {
    this.setState({
      authorID: id,
    })
    console.log(this.state.authorID)
  }

  getSavedId = (id) => {
    let newSave = this.state.savedGuides;
    newSave.push(id);
    this.setState({
      savedGuides: newSave,
    })
    console.log(this.state.savedGuides)
  }
  // getTags = ([tags]) => {
  //   this.setState({
  //     allTags: tags,
  //   })
  // }

  createPost = () => {
    console.log("post created")
    console.log(this.state.authorID)
    const id = {authorID: this.state.authorID};
    axiosWithHeaders()
    .post("https://how-to-lambda.herokuapp.com/api/how-to/", id)
    .then(res => {
        console.log(res.data);
        this.setState({
          newHowTo: res.data,
        })
    })
    .catch(err =>console.log(err.response));

  }

  render() {
    console.log(this.state.isLoggedIn)
    return (
      <div className="App">
      {/* {!this.state.isLoggedIn ? <nav>
          <Link to = "/howTos"><img className="logoBlue" src={LogoBlue} /></Link>
          <Link to = "/addHowTo">Add Guide</Link>

        </nav> : <div>hello</div>} */}
  

    <Route exact path="/" render={props => <Login {...props} setId = {this.setId} /> } />
    
    <Route path="/howTos" render={props => <HowToList {...props} 
      createPost = {this.createPost}
      userID = {this.state.authorID} 
      allTags={this.state.allTags} 
      getSavedId={this.getSavedId} 
      savedGuides={this.state.savedGuides} 
    /> } />

    <Route path="/addHowTo" render = {props => <AddHowTo {...props} 
      userID = {this.state.authorID}
      newHowTo = {this.state.newHowTo}
    /> } /> 

    <Route path = "/register" render = {props => <Register {...props} /> } />
    
    <Route path ="/savedGuides" render = {props => <SavedGuides {...props} 
      createPost = {this.createPost}
      savedGuides={this.state.savedGuides} /> } />    
    
    <Route path ="/myGuides" render = {props => <MyGuides {...props} 
      createPost = {this.createPost}/> } />
      </div>
    );
  }
}

export default App;
