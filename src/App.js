import React, { Component } from 'react';
import Login from './Login.js';
import Signup from './Signup.js';
import TodoListPage from './TodoListPage.js';
import PrivateRoute from './PrivateRoute.js';
import Home from './Home.js';
import './App.css';
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
    Link,
} from "react-router-dom";


export default class App extends Component {
  state = { 
    token: localStorage.getItem('TOKEN') 
    }

  handleTokenChange = (token) => {
    this.setState({ token: token });
    localStorage.setItem('TOKEN', token);
  }

  render() {
    return (
      <div>
        <Router>
          <ul>
            { this.state.token && <div>Welcome, Homie!!!</div> }
            { this.state.token && <Link to="/todos"><div>Todo List</div></Link> }
            <Link to='/login'><div>Log In</div></Link>
            <Link to='/signup'><div>New User</div></Link>
          </ul>
          <Switch>
            <Route exact path='/' render={(routerProps) => <Home handleTokenChange={this.handleTokenChange} {...routerProps} />} />

            <Route exact path='/signup' render={(routerProps) => <Signup handleTokenChange={this.handleTokenChange} {...routerProps} />} />

            <Route exact path='/login' render={(routerProps) => <Login handleTokenChange={this.handleTokenChange} {...routerProps} />} />

            <PrivateRoute exact path='/todo-list' token={this.state.token} render={(routerProps) => <TodoListPage {...routerProps} />} />
          </Switch>
        </Router>  
      </div>
    )
  }
}
