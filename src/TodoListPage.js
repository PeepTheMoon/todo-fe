import React, { Component } from 'react';
import './App.css';
import request from 'superagent';

export default class TodoListPage extends Component {

    state = {
        todos: [],
        newTask: '',
        token: localStorage.getItem('TOKEN')
    }

    componenetDidMount = async () => { 
        const fetchedData = await request.get(`https://infinite-fortress-66382.herokuapp.com/api/todos`);

        this.setState({ todos: fetchedData.body });
    }

    handleChange = async (e) => {
        await this.setState({ newTodo: e.target.value });
    }

    handleTokenChange = (token) => {
        this.setState({ token: token });
        localStorage.setItem('TOKEN', token);
    }

    getClassName = (task) => {
        if (task.completed) return 'complete';
        if (!task.completed) return 'incomplete';
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        const newTodo = { todo: '', completed: false }
//not sure if this is correct- could use some help with .set params
        const fetchedTodos = await request.post(`https://infinite-fortress-66382.herokuapp.com/api/todos`, newTodo).set('authorization', this.state.token);
        
        // const newTodoList = this.state.todo.slice();
        // const newTodoList = this.setState.fetchedTodos.slice();

        this.setState({ todos: fetchedTodos.body });
    }

    handleClick = async (id) => {
        const completedTask = await request.put(`https://infinite-fortress-66382.herokuapp.com/api/todos/:id`).set(completed=true);

        const freshTodos = await request.get(`https://infinite-fortress-66382.herokuapp.com/api/todos`);

        this.setState({ todos: freshTodos.body });

    }

    render() {
        return (
            <div>
            <button onClick={() =>this.handleTokenChange('')}>Logout</button>
                <form onSubmit={this.handleSubmit}>
                    <input value = {this.state.newTask} onChange={this.handleChange} />
                    <button>Add Task</button>
                </form>

                <ul>
                    { 
                    this.state.todos.map(task => <li onClick={() => this.handleClick(task.id)} className={this.getClassName(task)} key={JSON.stringify(task)}>{task.todo}</li>)
                    }
                </ul>
            </div>
        )
    }
}
