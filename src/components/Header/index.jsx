import React, { Component } from 'react'
import './index.css'
import {nanoid} from 'nanoid'
import PropTypes from 'prop-types'

// console.log(nanoid());

export default class Header extends Component {

  static apropTypes = {
    addTodo: PropTypes.func.isRequired
  }

  handleKeyUp= (event) => {
    const {key, target} = event;
    if (key !== 'Enter') return;
    if (target.value.trim() === '') {
      alert("不得為空");
      return;
    }
    const todoObj = {id:nanoid(), name:target.value, done:false}
    this.props.addTodo(todoObj);
    target.value = '';
  }
  
  render() {
    return (
      <div className="todo-header">
          <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
      </div>
    )
  }
}
