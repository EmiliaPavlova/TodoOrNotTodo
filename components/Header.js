import React, { Component, PropTypes } from 'react'
import Clock from './Clock.js'

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let now = new Date();
      return (
        <div>
            <h2>TODO List</h2>
            <Clock />
        </div>
      );
  }
}

export default Header