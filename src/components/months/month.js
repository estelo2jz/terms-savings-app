import React, { Component } from 'react';

export default class Months extends Component {
  render() {
    return (
      <div className="month-container">
        <div className="month-title">
          <div className="month-heading">
            <h3>{this.props.numberOfMonths} Contract</h3>
          </div>
        </div>
        <div className="month-summary-container">
          <div className="month-summary">
            <h4>
              {this.props.numberOfPayments}
            </h4>
            <p>
              Cronut migas plaid helvetica marfa. Fingerstache keytar literally activated charcoal. 
              Dreamcatcher fam bespoke la croix. Keffiyeh paleo intelligentsia, 
              letterpress kogi pabst la croix tote bag godard aesthetic copper mug.
            </p>
          </div>
        </div>
      </div>
    )
  }
}


{/* <h1 className="nav-title">Term's of Saving</h1>
<div className="nav-links">  
  <div className="nav-single">
    <NavLink exact to="/oneMonth" activeClassName="nav-link-active">Go To Page</NavLink>
  </div>
  <div className="nav-single">
    <NavLink to="/dashboard" activeClassName="nav-link-active">Dashboard</NavLink>
  </div>
  <div className="nav-single">
    <NavLink to="/about" activeClassName="nav-link-active">About</NavLink>
  </div>
  <div className="nav-single">
    <NavLink to="/contact" activeClassName="nav-link-active">Contact</NavLink>
  </div>
</div> */}
// withRouter(Month)