import React, { Component } from 'react'

export default class Test extends Component {
  render() {
    return (
      <div>
        Hello, {this.props.month}
      </div>
    )
  }
}
