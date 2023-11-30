import React, { Component } from 'react'
import './index.css'
import Item from "../Item";
import PropTypes from 'prop-types'

export default class List extends Component {

  static propTypes = {
    todos: PropTypes.array.isRequired,
    updateTodo: PropTypes.func.isRequired
  }

  render() {
    const {updateTodo, deleteTodo, todos} = this.props;
    return (
      <ul className="todo-main">
        {
          todos.map( todo => {
            return <Item key={todo.id} {...todo} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
          })
        }
      </ul>
    )
  }
}
