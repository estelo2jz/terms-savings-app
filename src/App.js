import React, { Component } from 'react';
import {
  BrowserRouter as Router, 
  Switch, 
  Route, 
} from 'react-router-dom';

import Home from "./components/pages/home";
import About from "./components/pages/about";
import Contact from "./components/pages/contact";
import Dashboard from "./components/pages/dashboard";
import Login from "./components/pages/login";
import Navigation from './components/navigation/navigation';
import NoMatch from "./components/pages/noMatch";
// import Month from "./components/months/month";
import OneMonth from './components/months/oneMonth';
import TwoMonth from './components/months/twoMonth';
import ThreeMonth from './components/months/threeMonth';

import AccountDetails from './components/pages/dashpages/accountdetails';
import Last from './components/pages/dashpages/last';
import Next from './components/pages/dashpages/next';
import Roster from './components/pages/dashpages/roster';
import Settings from './components/pages/dashpages/settings';
import TotalEarn from './components/pages/dashpages/totalearn';

import './App.scss';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Router>
            <Navigation />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/dashboard" component={Dashboard} />
              
              <Route path="/login" component={Login} />
              {/* <Route path="/month" component={Month} /> */}


              <Route path="/oneMonth" component={OneMonth} />
              <Route path="/twoMonth" component={TwoMonth} />
              <Route path="/threeMonth" component={ThreeMonth} />

              <Route path="/accountdetails" component={AccountDetails} />
              <Route path="/next" component={Next} />
              <Route path="/roster" component={Roster} />
              <Route path="/settings" component={Settings} />
              <Route path="/totalearn" component={TotalEarn} />
              <Route path="/last" component={Last} />

              <Route component={NoMatch} />
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}