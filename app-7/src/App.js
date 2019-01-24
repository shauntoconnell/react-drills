import React, { Component } from 'react';
import './App.css';

import NewTask from './NewTask';
import Todo from './Todo';
import List from './List';

class App extends Component {
  constructor() {
    super();

    this.state = {
      userInput: '',
      list: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.addToList = this.addToList.bind(this);
  }
  handleChange(val) {
    this.setState({
      userInput: val
    })
  }

  addToList(val) {
    this.state.list.push(val);
    this.setState({
      list: this.state.list,
      userInput: ''
    })
  }

  render() {
    console.log(this.state);
    const {userInput, list} = this.state;

    return (
      <div className="App">
        <h1>To-Do List:</h1>
          <NewTask
            handleChange={this.handleChange}
            addToList={this.addToList}
            userInput={userInput} />
          <List list={list} />
          <Todo />
      </div>
    );
  }
}

export default App;
