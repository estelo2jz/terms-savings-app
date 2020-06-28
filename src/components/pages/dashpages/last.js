import React from 'react'

const Last = () => {
  const date = "06/28/2020";
  const amount = 50.99
  const account = "6789"
  return (
    <div className="dashboard-space-two">
      <div className="dashboard-heading">Last Payment</div>
      <div className="dashboard-info">
        <div className="dashboard-flex">
          <div>
            <div>
              <h2 className="dashboard-date">Date: </h2>
            </div>
            <div>
              <h2>{date}</h2>
            </div>
          </div>
          <div>
            <div>
              <h2 className="dashboard-account">Amount: </h2>
            </div>
            <div>
              <h2>${amount}</h2>
            </div>
          </div>
          <div>
            <div>
              <h2 className="dashboard-account">Account Number: </h2>
            </div>
            <div>
              <h2>-{account}</h2>
            </div>
          </div>
          <div>
            <p>
              Your payment of ${amount} was posted on 06/28/2020, Account Number -{account}.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Last;