import React from 'react';
import Month from "./month";

const OneMonth = props => {

    return (
      <Month 
        numberOfMonths="1 month"
        numberOfPayments="1 month term with 2 payments"
      />
    )
}

export default OneMonth;