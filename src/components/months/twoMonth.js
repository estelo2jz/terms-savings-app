import React from 'react';
import Month from "./month";

const TwoMonth = props => {

    return (
      <div>
        <Month 
          numberOfMonths="2 month's"
          numberOfPayments="2 month's term with 4 payments"
        />
      </div>
    )
}

export default TwoMonth;