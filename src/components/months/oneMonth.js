import React from 'react';
import { Link } from 'react-router-dom';

import Month from "./month";

const OneMonth = props => {

    return (
      <div>
        <Link to="/">
          <div className="btn-back">Go Back</div>
        </Link>
        <Month 
          numberOfMonths="1 month"
          numberOfPayments="1 month term with 2 payments"
        />
      </div>
    )
}

export default OneMonth;