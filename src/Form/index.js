import React, { Component } from "react";
import "./index.css";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      isAgree: false,
      role: "manager"
    };
  }

  handleInputChange = event => {
    const target = event.target;
    const name = target.id;
    let value;
    if (
      target.id === "email" ||
      target.id === "password" ||
      target.id === "confirmPassword"
    ) {
      value = target.value;
    } else {
      value = target.checked;
    }

    this.setState({
      [name]: value
    });
  };

  handleSelectChange = event => {
    this.setState({ role: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>Sign Up</p>
        <div className="wrapper">
          <label htmlFor="email">
            Email
            <input required type="email" id="email" onChange={this.handleInputChange} />
          </label>
          <label htmlFor="password">
            Password
            <input required
              type="password"
              id="password"
              onChange={this.handleInputChange}
            />
          </label>
          <label htmlFor="confirmPassword">
            Confirm Password
            <input required
              type="password"
              id="confirmPassword"
              onChange={this.handleInputChange}
            />
          </label>
          <select required
            name="role"
            id="role"
            value={this.state.role}
            onChange={this.handleSelectChange}
          >
            <option value="designer">Designer</option>
            <option value="analyst">Analyst</option>
            <option selected value="manager">
              Manager
            </option>
            <option value="administrator">Administrator</option>
          </select>
          <div className="checkWrap">
            <input required
              type="checkbox"
              id="isAgree"
              onChange={this.handleInputChange}
            />
            <label htmlFor="isAgree">I agree to the terms of service</label>
          </div>
          {this.state.isAgree ? <button>OK</button> : null}
        </div>
      </form>
    );
  }
}

export default Form;
