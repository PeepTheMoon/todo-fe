import React, { Component } from 'react';
import request from 'superagent';

export default class Signup extends Component {

    state = {
        email: '',
        password: ''
    }

    // handleSubmit = aysnc (e) => {
    //     e.preventDefault();
    //     const userToken = await request
    //         .get('https://infinite-fortress-66382.herokuapp.com'),
            

    //     this.props.handleTokenChange(userToken);
    //     this.props.history.push('/todos');
    //     }

    render() {

        return (
            <div>
                <h1>Mom Says DO YOUR CHORES!</h1>
                <h2>The "I Promise I'm an Adult" Todo List App</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Enter email:
                        <input onChange={(e) => this.setState({ email: e.target.value })} value={this.state.email} />
                    </label>
                
                    <label>
                        Enter Password:
                        <input onChange={(e) => this.setState({ password: e.target.value })} value={this.state.password} />
                    </label>
                    
                    <button>Become an Adult!</button>
                </form>
            </div>
        )
    }
}
