import React from 'react';
import Month from "./month";

const ThreeMonth = props => {

  return (
    <div>
      <Month 
        numberOfMonths="3 month's"
        numberOfPayments="3 month's term with 6 payments"
      />
    </div>
  )
}

export default ThreeMonth