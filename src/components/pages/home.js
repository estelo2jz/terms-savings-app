import React from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';

const Home = (props) => {
  return (
    <div className="home-container">
      <h3 className="home-title">Expore our Term's</h3>
      
      <div className="links-container">
        <div className="single-link">
          <div className="month-container">
            <h3>One Month's Contract</h3>
            <div className="month-summary">
              <p>1 month term with 2 payments.</p>
            </div>
          </div>
        
          <div>
            <NavLink to="./oneMonth" activeClassName="nav-link-active">
                <button className="btn-page">
                  Go to Page
                </button>
            </NavLink>
          </div>
        </div>

        <div className="single-link">
          <div className="month-container">
            <h3>One Month's Contract</h3>
            <div className="month-summary">
              <p>1 month term with 2 payments.</p>
            </div>
          </div>
          <div>
            <NavLink to="/twoMonth" activeClassName="nav-link-active">
              <button className="btn-page">
                Go to Page
              </button>
            </NavLink>
          </div>
        </div>
        
        <div className="single-link">
         <div className="month-container">
            <h3>One Month's Contract</h3>
            <div className="month-summary">
              <p>1 month term with 2 payments.</p>
            </div>
          </div>
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