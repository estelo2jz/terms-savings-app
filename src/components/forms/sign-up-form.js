import React, { Component } from 'react'

export default class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      valu: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit(event) {
      alert('A form has been submitted: ' + this.state.value);
      event.preventDeafult();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
          <input 
            type="text"
            onChange={this.handleChange}
            name="username"
            placeholder="username"
            value={this.state.username}
          />

          <input
            type="text"
            onChange={this.handleChange}
            name="password"
            placeholder="password"
            value={this.state.password}
          />
          </div>
          
          <button>submit</button>
        </form>
      </div>
    )
  }
}
