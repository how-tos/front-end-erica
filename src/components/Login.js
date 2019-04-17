import React from "react";
import axios from "axios";
import '../css/login.css'
import {Route, Link} from "react-router-dom"
import LogoWhite from '../img/H2-Logo-White.png'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            isLoggedIn: props.isLoggedIn,
          };
    }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }; 
  handleSubmit = e => {
    e.preventDefault();
    // const credentials = this.state;
    // console.log(this.props.history)
    // return new Promise(() => {
    //     const token = "loggedIn";
    //     localStorage.setItem("token", token);
    //     this.props.history.push('/howTos')
    // })
    const credentials = this.state;
    axios
      .post("https://how-to-lambda.herokuapp.com/api/auth/login", credentials)
      .then(res => {
        // save it to localStorage
        const token = res.data.payload;
        localStorage.setItem("token", token);
        this.props.history.push("/howTos");
        this.setState ({
            isLoggedIn: true,
        })
      })
      .catch(err => console.log(err.response));
  };
  render() {
    return (
      <div className = "login-page">
        <div className= "design">
            <div className = "orange-rectangle">
                <div className = "welcome">Welcome to</div>
                <img className="logo" src={LogoWhite} />
                <div className = "description">Your go-to app for browsing a library of how-to guides and writing your own. Log in or sign up to begin your how-to journey today.Your go-to app for browsing a library of how-to guides and writing your own. Log in or sign up to begin your how-to journey today.</div>
            </div>
            <div className = "pale-rectangle"/>
            <div className = "circle"/>
        </div>
        <div className = "login-input">
            <h1 className = "header-text">Login</h1>
            <form className = "user-form" action="" onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="username"
                    onChange={this.handleChange}
                    value={this.state.username}
                    placeholder = "username"
                />
                <input
                    type="password"
                    name="password"
                    onChange={this.handleChange}
                    value={this.state.password}
                    placeholder = "password"
                />
            <button className="login" onSubmit={this.handleSubmit}>Log In</button>
            <Link to = "/register"><button className="register">Sign Up</button></Link>
            </form>
        </div>
      </div>
    );
  }
}
export default Login;
