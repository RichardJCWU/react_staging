import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {

  state = {mouse:false};

  // mouse 移入移出回調
  mouseHandler = (flag) => {
    return() => {
      this.setState({mouse:flag});
    }
  }

  checkHandler = (id) => {
    return (event) => {
      console.log(id)
      this.props.updateTodo(id);
    }
  }

  clickHandler = (id) => {
    if(window.confirm("確定刪除?")) this.props.deleteTodo(id);
  }

  render() {
    const {mouse} = this.state;
    const {id, name, done} = this.props;
    return (
      <li style={{backgroundColor: mouse ? "#ddd" : "white"}} onMouseEnter={this.mouseHandler(true)} onMouseLeave={this.mouseHandler(false)}>
          <label>
              <input type="checkbox" checked={done} onChange={this.checkHandler(id)}/>
              <span>{name}</span>
          </label>
          <button onClick={()=>{this.clickHandler(id)}} className="btn btn-danger" style={{display: mouse ? "block" : "none"}}>删除</button>
      </li>
    )
  }
}
