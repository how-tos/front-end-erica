import React, { Component } from 'react';
import './App.css';
import Login from './components/Login'
import {Route, Link} from "react-router-dom"
import HowToList from "./components/HowToList"
import AddHowTo from './components/AddHowTo'
class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Link to = "/login">Log In</Link>
          <Link to = "/addHowTo">Add Guide</Link>
          <Link to = "/howTos">Home</Link>
        </nav>

    <Route path="/login" render={props => <Login {...props} /> } />
    <Route path="/howTos" render={props => <HowToList {...props} /> } />
    <Route path="/addHowTo" render = {props => <AddHowTo {...props} /> } /> 
      </div>
    );
  }
}

export default App;
