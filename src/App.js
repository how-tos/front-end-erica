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

class App extends Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: false,
      userID: '', 
      allTags: [],
      savedGuides: [],
    }
  }

  setId = (id) => {
    this.setState({
      userID: id,
    })
    console.log(this.state.userID)
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

  render() {
    console.log(this.state.userID);
    console.log(this.state.isLoggedIn)
    return (
      <div className="App">
      {/* {!this.state.isLoggedIn ? <nav>
          <Link to = "/howTos"><img className="logoBlue" src={LogoBlue} /></Link>
          <Link to = "/addHowTo">Add Guide</Link>

        </nav> : <div>hello</div>} */}
  

    <Route exact path="/" render={props => <Login {...props} setId = {this.setId}/> } />
    <Route path="/howTos" render={props => <HowToList {...props} userID = {this.state.userID} allTags={this.state.allTags} getSavedId={this.getSavedId} savedGuides={this.state.savedGuides} /> } />
    <Route path="/addHowTo" render = {props => <AddHowTo {...props} userID = {this.state.userID} /> } /> 
    <Route path = "/register" render = {props => <Register {...props} /> } />
    <Route path ="/savedGuides" render = {props => <SavedGuides {...props} savedGuides={this.state.savedGuides} /> } />    
    <Route path ="/myGuides" render = {props => <MyGuides {...props} /> } />
      </div>
    );
  }
}

export default App;
