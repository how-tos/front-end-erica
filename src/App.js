import React, { Component } from 'react';
import './css/App.css';
import Login from './components/Login'
import {Route, Link} from "react-router-dom"
import HowToList from "./components/HowToList"
import AddHowTo from './components/AddHowTo'
import Register from './components/Register'
class App extends Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: false,
    }
  }

  render() {
    console.log(this.state.isLoggedIn)
    return (
      <div className="App">
      {/* {!this.state.isLoggedIn ? <nav>
          <Link to = "/howTos"><img className="logoBlue" src={LogoBlue} /></Link>
          <Link to = "/addHowTo">Add Guide</Link>

        </nav> : <div>hello</div>} */}
  

    <Route path="/" render={props => <Login {...props} /> } />
    <Route path="/howTos" render={props => <HowToList {...props} /> } />
    <Route path="/addHowTo" render = {props => <AddHowTo {...props} /> } /> 
    <Route path = "/register" render = {props => <Register {...props} /> } />
      </div>
    );
  }
}

export default App;
