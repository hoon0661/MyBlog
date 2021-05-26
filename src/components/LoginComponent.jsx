import React, { Component } from "react";

class LoginComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      loginFailed: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleLogin = (e) => {
    if (
      this.state.username === "username" &&
      this.state.password === "password"
    ) {
      sessionStorage.setItem("Authenticated", this.state.username);
      this.setState({ loginFailed: false });
    } else {
      this.setState({ loginFailed: true });
    }
    e.preventDefault();
  };
  render() {
    return (
      <>
        <h1>Login</h1>
        <div className="container">
          {this.state.loginFailed && (
            <p className="alert alert-warning">Invalid Account</p>
          )}
          <form>
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              id="username"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />

            <label htmlFor="password">Password: </label>
            <input
              type="text"
              id="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <button className="btn btn-success" onClick={this.handleLogin}>
              Login
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default LoginComponent;
