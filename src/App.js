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
import OneMonth from './components/months/oneMonth';
import TwoMonth from './components/months/twoMonth';
import ThreeMonth from './components/months/threeMonth';

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
              <Route path="/oneMonth" component={OneMonth} />
              <Route path="/twoMonth" component={TwoMonth} />
              <Route path="/threeMonth" component={ThreeMonth} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}