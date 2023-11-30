import React, {Component} from "react";
import './App.css';
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
// const {Component} = React;

//craete並暴露組件APP
export default class App extends Component {
    state = {todos:[
        {id:"001", name:"吃飯", done:false},
        {id:"002", name:"睡覺", done:false},
        {id:"004", name:"逛街", done:false},
        {id:"003", name:"上班", done:true}
    ]}

    addTodo = (name) => {
        const {todos} = this.state;
        const newTodo = [name,...todos]
        this.setState({todos:newTodo});
    }

    // 由孫 Component(Item) 的 CheckedBox 觸發 updateTodo
    updateTodo = (id) => {
        const {todos} = this.state;
        const newTodos = todos.map((todo) => {
            const flag = !todo.done;
            if(todo.id === id) return {...todo, done:flag}
            else return todo
        })
        this.setState({todos:newTodos});
    }

    deleteTodo = (id) => {
        console.log("App delete: ", id);
        const {todos} = this.state;
        const newTodos = todos.filter((todo) => {
            return todo.id !== id;
        })
        this.setState({todos:newTodos});
    }

    chooseAllTodo = (done) => {
        const {todos} = this.state;
        const newTodos = todos.map((todo) => {
            return {...todo, done}
        })
        this.setState({todos:newTodos});
    }

    clearAllDoneTodo = () => {
        const {todos} = this.state;
        const newTodos = todos.filter((todo) => {
            return !todo.done;
        })
        this.setState({todos:newTodos});
    }

    render() {
        const {todos} = this.state;
        return(
            <div className="todo-container">
                <div className="todo-wrap">
                <Header addTodo={this.addTodo}/>
                <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
                <Footer todos={todos} chooseAllTodo={this.chooseAllTodo} clearAllDoneTodo={this.clearAllDoneTodo}/>
                </div>
            </div>
        )
    }
}