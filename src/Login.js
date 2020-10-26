import React, { Component } from 'react';
import request from 'superagent';

export default class Login extends Component {

    state = {
        email: '',
        password: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();
        //help in getting user token from back end, or it in state at this point?  I feel like it's in state but I'm a little unsure as backend token doesn't gave an endpoint to fetch from.  
    
    }

    render() {
        console.log()
        return (
            <div>
                <h1>Mom Says DO YOUR CHORES!</h1>
                <h2>The "I Promise I'm an Adult" Todo List App</h2>
                <form>
                    <label> Enter Email:
                        <input onChange={(e) => this.setState({ email: e.target.value })} value={this.state.email} /> 
                    </label>

                    <label>Enter Password:
                        <input onChange={(e) => this.setState({ password: e.target.value })} value={this.state.password} />
                    </label>

                    <button>Log In</button>
                </form>
            </div>
        )
    }
}
