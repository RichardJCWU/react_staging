//import react library
import React from "react";
//import react DOM
import { createRoot } from "react-dom/client";
import App from "./App";

//render app
// 使用 createRoot 替代 ReactDOM.render
const root = createRoot(document.getElementById('root'));

// 使用 root.render 代替 ReactDOM.render
root.render(<App />);