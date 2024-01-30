import React, { Component } from "react";
import "./App.css";
import CounterCont from "./components/CounterCont";
export default class App extends Component {
  state = {
    
    count: 0,
    memory :null ,
  };
  handleGreet = () => {
    this.setState({
      greet: !this.state.greet,
    });
  };

  handleshow = () => {
    this.setState({ isVisible: !this.state.isVisible });
  };
  
  render() {
    return (
      <div className="App">
        <h1>{this.state.greet ? "hello f1 group" : "bye f1 group"}</h1>
        <button onClick={() => this.handleGreet()}>Greet</button>
        <hr />
        {this.state.isVisible ? <CounterCont /> : null}
        <hr />
        <button onClick={() => this.handleshow()}>
          {this.state.isVisible ? "hide" : "show"}
        </button>
      </div>
    );
  }
}
