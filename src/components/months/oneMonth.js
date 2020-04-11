import React from 'react';
import { NavLink } from 'react-router-dom';

import Month from "./month";

const OneMonth = props => {
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
        numberOfMonths="1 month"
        numberOfPayments="1 month term with 2 payments"
      />
    </div>
  )
}

export default OneMonth;