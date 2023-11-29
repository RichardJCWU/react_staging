import React, {Component} from "react";
import Hello from "./components/Hello";
import Welcome from "./components/Welcome";
// const {Component} = React;

//craete並暴露組件APP
export default class App extends Component {
    render() {
        return(
            <div>  
                <Hello/>
                <Welcome/>
            </div>
        )
    }
}