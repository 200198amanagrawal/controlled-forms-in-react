import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
/* A general code to render the code
let el=<h1>Hello world!!</h1>/*changed babel as 
React.createElement("h1",null,"hello world");
*/
//rendering an element:ReactDOM.render(el,document.getElementById("root"));
ReactDOM.render(<App/>,document.getElementById("root"));