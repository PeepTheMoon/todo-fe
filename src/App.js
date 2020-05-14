import React, { Component } from 'react';
import './App.css';
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
    Link,
} from "react-router-dom";
import PrivateRoute from './PrivateRoute.js';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <ul>
          </ul>
          <Switch>
            <Route />
            <Route />
            <PrivateRoute />
          </Switch>
        </Router>  
      </div>
    )
  }
}
