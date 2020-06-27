import React from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';

import Month from '../months/month';

const Home = (props) => {
  return (
    <div className="home-container">
      <h1 className="home-title">Explore our Product's</h1>
      
      <div className="links-container">
        <div className="single-link">
          <Month
            numberOfMonths="1 month"
            numberOfPayments="1 month term with 2 payments"
          />
          <div>
            <NavLink to="/oneMonth" activeClassName="nav-link-active">
                <button className="btn-page">
                  Go to Page
                </button>
            </NavLink>
          </div>
        </div>

        <div className="single-link">
          <Month
            numberOfMonths="2 month's"
            numberOfPayments="2 month's term with 6 payments"
          />
          <div>
            <NavLink to="/twoMonth" activeClassName="nav-link-active">
              <button className="btn-page">
                Go to Page
              </button>
            </NavLink>
          </div>
        </div>
        
        <div className="single-link">
          <Month
            numberOfMonths="3 month's"
            numberOfPayments="3 month's term with 6 payments"
          />
          <div>
            <NavLink to="/threeMonth" activeClassName="nav-link-active">
              <button className="btn-page">
                Go to Page
              </button>
            </NavLink>
        </div>
        </div>
      </div>
    </div>
  )
}

export default withRouter(Home);