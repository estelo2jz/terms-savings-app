import React, { Component } from 'react';
import {
  BrowserRouter as Router, 
  Switch, 
  Route, 
} from 'react-router-dom';
import DashNav from './dashpages/dashnav';

import AccountDetails from './dashpages/accountdetails';
import Last from './dashpages/last';
import Next from './dashpages/next';
import Roster from './dashpages/roster';
import Settings from './dashpages/settings';
import TotalEarn from './dashpages/totalearn';

export default class Dashboard extends Component {
  render() {
    return (
      <Router>
        <div className="dashboard">
          <DashNav />
          {/* <div className="dashboard-space-one">
            <div className="dashboard-space-container">
              <div className="dashboard-space-two">
                <div className="dashboard-heading">Next Payment</div>
                <div className="dashboard-info">
                  <p>
                    taiyaki pinterest scenester fashion axe skateboard occupy hot chicken 
                    enamel pin mumblecore. Echo park hell of messenger bag 3 wolf moon. 
                  </p>
                </div>
              </div>
              <div className="dashboard-space-two">
                <div className="dashboard-heading">Last Payment</div>
                <div className="dashboard-info">
                  <p>
                    I'm baby unicorn hexagon palo santo man braid single-origin coffee 
                    taiyaki pinterest scenester fashion axe skateboard occupy hot chicken 
                  </p>
                </div>
              </div>
              
              <div className="dashboard-space-two">
                <div className="dashboard-heading">Roster</div>
                <div className="dashboard-info">
                  <p>
                    Coloring book echo park distillery, live-edge mustache taxidermy direct trade. 
                    Unicorn freegan DIY locavore offal taiyaki fixie kombucha banh mi synth marfa plaid poke food truck.
                  </p>
                </div>
              </div>
            </div>
            

            <div className="dashboard-space-container">
              <div className="dashboard-space-two">
                <div className="dashboard-heading">Account Details</div>
                <div className="dashboard-info">
                  <p>
                    taiyaki pinterest scenester fashion axe skateboard occupy hot chicken 
                    Coloring book echo park distillery, live-edge mustache taxidermy direct trade. 
                  </p>
                </div>
              </div>
              <div className="dashboard-space-two">
                <div className="dashboard-heading">Total Earnings</div>
                <div className="dashboard-info">
                  <p>
                    enamel pin mumblecore. Echo park hell of messenger bag 3 wolf moon. 
                    Unicorn freegan DIY locavore offal taiyaki fixie kombucha banh mi synth marfa plaid poke food truck.
                  </p>
                </div>
              </div>
              <div className="dashboard-space-two">
                <div className="dashboard-heading">Settings</div>
                <div className="dashboard-info">
                  <p>
                    I'm baby unicorn hexagon palo santo man braid single-origin coffee 
                    enamel pin mumblecore. Echo park hell of messenger bag 3 wolf moon. 
                  </p>
                </div>
              </div>
            </div>
          </div> */}

          <Switch>
            <Route exact path="/" />
            <Route path="/accountdetails" component={AccountDetails} />
            <Route path="/next" component={Next} />
            <Route path="/roster" component={Roster} />
            <Route path="/settings" component={Settings} />
            <Route path="/totalearn" component={TotalEarn} />
            <Route path="/last" component={Last} />
          </Switch>
        </div>
      </Router>
    )
  }
}
