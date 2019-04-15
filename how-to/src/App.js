import React, { Component } from 'react';
import './App.css';
import Login from './components/Login'
import {Route, Link} from "react-router-dom"

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          {/* <Link to = "/login">Log In</Link> */}
        </nav>

    <Route path="/login" render={props => <Login {...props} /> } />
      </div>
    );
  }
}

export default App;
