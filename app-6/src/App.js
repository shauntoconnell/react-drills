import React, { Component } from 'react';
import './App.css';

import Todo from './Todo';

class App extends Component {
  constructor() {
    super();

    this.state = {
      task: '',
      list: []
    }
    this.delete = this.delete.bind(this);
  }

  handleChange(val) {
    this.setState({
      task: val
    })
  }

  addToList(val) {
    this.state.list.push(val);
    this.setState({
      list: this.state.list,
      task: ''
    })
  }

  delete(index) {
    this.state.list.splice(index, 1);
    this.setState({
      list: this.state.list
    })
  }

  render() {
    return (
      <div className="App">
        <h2>To-Do List</h2>

        <input
          placeholder='what do?' value = {this.state.task} style={{textAlign:'center'}} 
          onChange={e => this.handleChange(e.target.value)}
          onKeyPress={e => e.key === 'Enter' ? this.addToList(this.state.task) : null}/>

        <Todo list={this.state.list} delete={this.delete}/>
      </div>
    );
  }
}

export default App;
