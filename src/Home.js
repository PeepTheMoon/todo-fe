import React, { Component } from 'react';
import Login from './Login.js';
import Signup from './Signup.js';
import './App.css';
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
    Link,
} from "react-router-dom";

export default class Home extends Component {
    render() {
        return (
            <div>
                <h1>Mom Says DO YOUR CHORES!</h1>
                <h2>The "I Promise I'm an Adult" Todo List App</h2>
            </div>
        )
    }
}
