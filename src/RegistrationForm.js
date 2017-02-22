import React, { Component } from 'react';

import './RegistrationForm.css'

class RegistrationForm extends Component {
  // для заполнения в локальном стейте нужно значение по-умолчанию для мейла
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('form is submited. Email value is ', this.state.email);
  }

  handleEmailChange(event) {
    console.log('emails was changed', event.target.value);
    this.setState({email: event.target.value}); // меняем значение в стейте
  }

  render() {
    return (
      <form onSubmit= {this.handleSubmit} >
      <input
        type="text"
        placeholder="E-mail"
        value={this.state.email}
        onChange={this.handleEmailChange} //.bind(this)
        className="emailField"
      />
      <button className="submitBtn">Save</button>
      </form>
    );
  }
}

export default RegistrationForm;
