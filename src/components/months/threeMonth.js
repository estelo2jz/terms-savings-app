import React from 'react';
import { NavLink } from 'react-router-dom';

import Month from "./month";

const ThreeMonth = props => {
  return (
    <div>
      <NavLink to="/" 
        activeClassName="nav-link-active"
        style={{paddingLeft: 13, textDecoration: 'none'}}
      >
        <button className="btn-back">
          Go Back
        </button>
      </NavLink>
      <Month 
        numberOfMonths="3 month's"
        numberOfPayments="3 month's term with 6 payments"
      />
    </div>
  )
}

export default ThreeMonth