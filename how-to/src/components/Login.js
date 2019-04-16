import React from "react";
import axios from "axios";
import './login.css'


class Login extends React.Component {
  state = {
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
    console.log(this.props.history)
    return new Promise(() => {
        const token = "loggedIn";
        localStorage.setItem("token", token);
        this.props.history.push('/howTos')
    })
    // axios
    //   .post("http://localhost:5000/api/login", credentials)
    //   .then(res => {
    //     // save it to localStorage
    //     const token = res.data.payload;
    //     localStorage.setItem("token", token);
    //     this.props.history.push("/friends");
    //   })
    //   .catch(err => console.log(err.response));
  };
  render() {
    return (
      <div className = "login-page">
        <div className= "design">
            <div className = "orange-rectangle"/>
            <div className = "pale-rectangle"/>
        </div>
        <div className = "login-input">
            <h1 className = "header-text">Login</h1>
            <form className = "user-form" action="" onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="username"
                    onChange={this.handleChange}
                    value={this.state.username}
                />
                <input
                    type="password"
                    name="password"
                    onChange={this.handleChange}
                    value={this.state.password}
                />
            <button>Log in</button>
            </form>
        </div>
      </div>
    );
  }
}
export default Login;
