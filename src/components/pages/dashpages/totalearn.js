import React from 'react'

const TotalEarn = () => {
  const date = "06/11/2020";
  const amount = 1225.99
  const prevamount = 800.63
  const account = "6789"
  return (
    <div className="dashboard-space-two">
      <div className="dashboard-heading">Next Payment</div>
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
              <h2 className="dashboard-account">Amount Total Earn: </h2>
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
              Your total earnings from this month was {amount}.
            </p>
          </div>
          <div>
            <p>
            Your total earnings from last month was {prevamount}.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TotalEarn;