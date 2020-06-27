import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';

class DashNav extends Component {
  render() {
    return (
      <div>
        <NavLink to="/last">Account Details</NavLink>
        <NavLink to="/totalearn">Total Earnings</NavLink>
        <NavLink to="/last">Last Payment</NavLink>
        <NavLink to="/next">Next Payment</NavLink>
        <NavLink to="/roster">Roster</NavLink>
        <NavLink to="/settings">Settings</NavLink>
      </div>
    )
  }
}

export default withRouter(DashNav);