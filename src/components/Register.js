import React from "react";
import axios from "axios";
import '../css/login.css'
import {Route, Link} from "react-router-dom"


class Login extends React.Component {
    state = {
    firstName: '',
    lastName: '',
      username: "",
      password: ""
    };
  
    handleChange = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    }; 
    handleSubmit = e => {
      e.preventDefault();
      const credentials = this.state;
      console.log(this.state)
      axios

      .post("https://how-to-lambda.herokuapp.com/api/auth/register", credentials)

      .then(res => {
        // save it to localStorage
        const token = res.data.payload;
        localStorage.setItem("token", token);
        this.props.history.push("/howTos");
      })

      .catch(err => console.log(err.response));

    //   const credentials = this.state;
    //   console.log(this.props.history)
    //   return new Promise(() => {
    //       const token = "loggedIn";
    //       localStorage.setItem("token", token);
    //       this.props.history.push('/howTos')
    //   })
      };

    
    render() {
      return (
        <div className = "login-page">
          <div className= "design">
              <div className = "orange-rectangle">
                  <div className = "welcome">Register</div>
                  <div className = "description">We're excited to have you! Go ahead and sign up to begin creating and finding new guides every day.</div>
              </div>
              <div className = "pale-rectangle"/>
              <div className = "circle"/>
          </div>
          <div className = "login-input">
            <div className="spacing"></div>
              <form className = "user-form" action="" onSubmit={this.handleSubmit}>
                  <input
                      type="text"
                      name="firstName"
                      onChange={this.handleChange}
                      value={this.state.firstName}
                      placeholder = "first name"
                  />
                    <input
                      type="text"
                      name="lastName"
                      onChange={this.handleChange}
                      value={this.state.lastName}
                      placeholder = "last name"
                  />
                    <input
                      type="text"
                      name="username"
                      onChange={this.handleChange}
                      value={this.state.username}
                      placeholder = "username (display name)"
                  />
                  <input
                      type="password"
                      name="password"
                      onChange={this.handleChange}
                      value={this.state.password}
                      placeholder = "password"
                  />
              <button className="login">Register</button>
              <div className="register"><Link to = "/">Back to Login</Link></div>
              </form>
          </div>
        </div>
      );
    }
  }
  export default Login;
  