import React from 'react';
import { NavLink } from 'react-router-dom';

import Month from "./month";

const TwoMonth = props => {
  return (
    <div>
      <NavLink to="/" 
        activeClassName="nav-link-active"
        style={{paddingLeft: 13,textDecoration: 'none'}}
      >
        <button className="btn-back">
          Go Back
        </button>
      </NavLink>
      <Month 
        numberOfMonths="2 month's"
        numberOfPayments="2 month's term with 4 payments"
      />
    </div>
  )
}

export default TwoMonth;