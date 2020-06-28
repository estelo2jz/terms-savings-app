import React from 'react'

const AccountDetails = () => {
  const date = "06/28/2020";
  const amount = 1225.99
  const account = "6789"
  return (
    <div className="dashboard-space-two">
      <div className="dashboard-heading">Account Details</div>
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
              <h2 className="dashboard-account">Account Number: </h2>
            </div>
            <div>
              <h2>-{account}</h2>
            </div>
          </div>
          <div>
            <p>
              If you have any Questions about your account Please contact us.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountDetails;