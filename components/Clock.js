import React, { Component, PropTypes } from 'react'
import Time from 'react-time'
import require from 'moment';

class Clock extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let today = new Date();
      return (
        <h3>
           <Time value={today} format="MMMM DD, YYYY" />
        </h3>
      );
  }
}

export default Clock