import React, { Component } from 'react'
export default class App extends Component {
    state={
        name:"",
        password:""
    }
    handleclick=(e)=>
    {
        if(e.target.name==="password")
        {
            const value=e.target.value.toUpperCase().substr(0,10);
            this.setState({[e.target.name]:value});
        }
        else{
            const value=e.target.value;
            this.setState({[e.target.name]:value});
        }
    }
    render() {
        return (
            <div>
                <form>
                <label>
                    Name:    <input type="text" value={this.state.name} name="name" onChange={this.handleclick}></input>
                </label>
                <br/><br/>
                <label>
                    Password:<input type="text" value={this.state.password} name="password" onChange={this.handleclick}></input>
                </label>
                </form>
            </div>
        )
    }
}