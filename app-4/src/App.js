import React, { Component } from 'react';
import './App.css';

import Login from './Login';

class App extends Component {
  constructor() {
    super();

    this.state = {
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(prop, val) {
    this.setState({
      [prop]: val
    })
  }


  render() {
    console.log(this.state);
    const {username, password} = this.state;

    return (
      <div className="App">
        <Login username={username} password={password}
          handleChange={this.handleChange}/>
      </div>
    );
  }
}

export default App;
