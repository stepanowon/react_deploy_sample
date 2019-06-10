import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
export default class App extends Component {
  render() {

    return (
      <div className="card-body">
        <h3>My Todo</h3>
        <Router basename="/react">
          <Switch>
            <Route path="/" component={TodoList} exact={true} />
            <Route path="/todos/add" component={TodoForm} />
          </Switch>
        </Router>
      </div>
    )
  }
}
