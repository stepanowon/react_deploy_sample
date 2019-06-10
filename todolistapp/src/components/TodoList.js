import React, { Component } from 'react'

export default class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            todos: []
        }
    }

    componentDidMount(){
        let todos = JSON.parse(localStorage.getItem('todos')) || [];
        this.setState({todos: todos})
    }

    addTodo(){
        this.props.history.push('/todos/add')
    }

    deleteTodo(i){
        let todos = this.state.todos;
        todos.splice(i, 1);
        this.setState({todos: todos});
        localStorage.setItem('todos', JSON.stringify(this.state.todos))
    }

    

    render() {
        let box = {width: '100px'}

        return (
            <div className="card-body">
                <h5>Todo List</h5>
                <table className='table'>
                    <thead>
                        <tr>
                            <td style={box}>No</td>
                            <td>Todo</td>
                            <td style={box}>DEL</td>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.todos.map((todo, i) => {
                            return (
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{todo}</td>
                                    <td><button className="btn btn-sm btn-danger" onClick={this.deleteTodo.bind(this, i)}>DEL</button></td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>

                <button className="btn btn-primary" onClick={this.addTodo.bind(this)}>ADD</button>
            </div>
        )
    }
}
