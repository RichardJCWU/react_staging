import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {

  clickAllHandler = (event) => {
    this.props.chooseAllTodo(event.target.checked);
  }

  clearAlldoneHandler = () => {
    this.props.clearAllDoneTodo();
  }
  
  render() {
    const {todos} = this.props;
    const done = todos.reduce((prev, todo) => {return prev + (todo.done ? 1 : 0)}, 0);
    const totalCount = todos.length;
    return (
      <div className="todo-footer">
          <label>
          <input checked={done === totalCount && totalCount !== 0 ? true:false} onChange={this.clickAllHandler}  type="checkbox"/>
          </label>
          <span>
          <span>已完成{done}</span> / 全部{totalCount}
          </span>
          <button onClick={this.clearAlldoneHandler} className="btn btn-danger">清除已完成任务</button>
      </div>
    )
  }
}
