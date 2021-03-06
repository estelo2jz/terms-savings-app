import React from 'react';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';
import Login from "../pages/login";

const Navigation = (props) => {
  return (
    <div className="nav">
      <h1 className="nav-title">Term's of Saving</h1>
      <div className="nav-links">  
        <div className="nav-single">
          <NavLink exact to="/" activeClassName="nav-link-active">Home</NavLink>
        </div>
        <div className="nav-single">
          <NavLink to="/dashboard" activeClassName="nav-link-active">Dashboard</NavLink>
        </div>
        <div className="nav-single">
          <NavLink to="/about" activeClassName="nav-link-active">About</NavLink>
        </div>
        <div className="nav-single">
          <NavLink to="/contact" activeClassName="nav-link-active">Contact</NavLink>
        </div>
        <NavLink to="/login" activeClassName="nav-link-active">Login</NavLink>
      </div>
    </div>
  )
}

export default withRouter(Navigation);