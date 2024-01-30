import React, { Component } from "react";

export default class CounterCont extends Component {
  state = {
    count: 0,
  };
  inc = () => {
    this.setState({ count: this.state.count + 1 });
  };
  dec = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };
  componentDidMount() {
    this.setState({ memory: setInterval(() => this.inc(), 1000) });
  }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
      </div>
    );
  }
}
