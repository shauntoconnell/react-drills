import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      array: ['apples', 'grapefruit', 'edamame', 'almond butter']
    }
  }
  render() {
    return (
      <div className="App">
        {this.state.array.map((e,i) => <h2 key={i}>{e}</h2>)}
      </div>
    );
  }
}

export default App;
