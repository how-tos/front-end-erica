import React from "react";
import axios from "axios";
import '../css/login.css'



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
    //   const credentials = this.state;
    //   axios
    //   .post("http://localhost:5000/auth/register", credentials)
    //   .then(res => {
    //     // save it to localStorage
    //     const token = res.data.payload;
    //     localStorage.setItem("token", token);
    //     this.props.history.push("/HowToList");
    //   })
    //   .catch(err => console.log(err.response));
      const credentials = this.state;
      console.log(this.props.history)
      return new Promise(() => {
          const token = "loggedIn";
          localStorage.setItem("token", token);
          this.props.history.push('/howTos')
      })
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
                      name="firstname"
                      onChange={this.handleChange}
                      value={this.state.firstname}
                      placeholder = "first name"
                  />
                    <input
                      type="text"
                      name="lastname"
                      onChange={this.handleChange}
                      value={this.state.lastname}
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
              </form>
          </div>
        </div>
      );
    }
  }
  export default Login;
  