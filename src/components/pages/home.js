import React from 'react';
import {
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Link
} from 'react-router-dom';
import OneMonth from '../months/oneMonth';
import TwoMonth from '../months/twoMonth';
import ThreeMonth from '../months/threeMonth';

const home = () => {
  return (
    <div className="home-container">
      <Router>
        <div className="links-container">
          <div className="single-link">
           <OneMonth />
          </div>
          <div className="single-link">
            <TwoMonth />
          </div>
          <div className="single-link">
            <ThreeMonth />
          </div>
        </div>

        <Switch>
          {/* <Route path="/oneMonth"><OneMonth /></Route>
          <Route path="/twoMonth"><TwoMonth /></Route>
          <Route path="/threeMonth"><ThreeMonth /></Route> */}
        </Switch>
      </Router>
    </div>
  )
}

export default home;