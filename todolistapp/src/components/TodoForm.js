import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newTodo: ''
        }
    }

    changeHandler(evt) {
        this.setState({ newTodo: evt.target.value })
    }

    addTodo() {
        if (this.state.newTodo === '') return;
        let todos = JSON.parse(localStorage.getItem('todos')) || [];
        todos.push(this.state.newTodo);

        localStorage.setItem('todos', JSON.stringify(todos));
        this.setState({ newTodo: '' });

        this.props.history.push("/")
    }

    render() {
        return (
            <div className="card-body">
                <h5>Add Todo</h5>

                <div className="input-group">
                    <input className="form-control" onChange={this.changeHandler.bind(this)} />
                    <div className="input-group-append">
                        <button className="btn btn-primary" onClick={this.addTodo.bind(this)}>ADD</button>
                    </div>
                </div>
                <br />

                <Link to="/">BACK</Link>

            </div>
        )
    }
}
