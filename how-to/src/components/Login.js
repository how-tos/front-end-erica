import React from "react";
import axios from "axios";
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
      <div>
        <h1>Login</h1>
        <form action="" onSubmit={this.handleSubmit}>
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
    );
  }
}
export default Login;
