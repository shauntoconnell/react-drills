import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      userInput: ''
    }
    
    // this.handleChange = this.handleChange.bind(this);
  }

  // handleChange(event) {
  //   this.setState({
  //     userInput: event.target.value
  //   })
  // }

  handleChange(val) {
    this.setState({
      userInput: val
    })
  }

  render() {
    return (
      <div className='App'>
        {/* <input onChange={this.handleChange} /> */}
        <input onChange={event => this.handleChange(event.target.value)} />
        <p>{this.state.userInput}</p>
      </div>
    );
  }
}

export default App;
