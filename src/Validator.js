import React, { Component } from 'react';
import "./Validator.css";

class Validator extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: '',
      confirmPassword: ''
    }
  }
  handleEmail(e) {
    this.setState({email: e.target.value})
  }

  handlePassword(e) {
    this.setState({password: e.target.value})
  }

  handleConfirmPassword(e) {
    this.setState({confirmPassword: e.target.value})
  }

  handleClick(e){
    if (this.state.password !== this.state.confirmPassword) {
      alert("Passwords do not match!")
    }else {
      alert("Valid Password!")
    }
  }
  render() {
    return (
      <div className="form">
        <h1>Sign Up</h1>
        <input type="text" placeholder="email" onChange={(e) => this.handleEmail(e)}/>
        <input type="password" placeholder="password" onChange={(e) => this.handlePassword(e)}/>
        <input type="password" placeholder="confirm password" onChange={(e) => this.handleConfirmPassword(e)}/>
        <input onClick={(e) => this.handleClick(e)} type="submit" value="Submit" />
      </div>
    );
  }
}

export default Validator;
