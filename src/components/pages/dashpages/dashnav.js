import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';

class DashNav extends Component {
  render() {
    return (
      <div className="dashboard-container">
        <div className="dashboard-links">
          <NavLink to="/accountdetails" activeClassName="nav-link-active">Account Details</NavLink>
        </div>
        <div className="dashboard-links">  
          <NavLink to="/totalearn" activeClassName="nav-link-active">Total Earnings</NavLink>
        </div>
        <div className="dashboard-links">  
          <NavLink to="/last" activeClassName="nav-link-active">Last Payment</NavLink>
        </div>
        <div className="dashboard-links">  
          <NavLink to="/next" activeClassName="nav-link-active">Next Payment</NavLink>
        </div>
        <div className="dashboard-links">  
          <NavLink to="/roster" activeClassName="nav-link-active">Roster</NavLink>
        </div>
        <div className="dashboard-links">  
          <NavLink to="/settings" activeClassName="nav-link-active">Settings</NavLink>
        </div>
      </div>
    )
  }
}

export default withRouter(DashNav);