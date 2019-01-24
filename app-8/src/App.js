import React, { Component } from 'react';
import './App.css';

import axios from 'axios';

class App extends Component {
  constructor() {
    super();

    this.state = {
      lukeSkywalker: ''
    }
  }

  componentDidMount() {
    axios.get('https://swapi.co/api/people/1').then( response => {
      this.setState({
        lukeSkywalker: response.data
      })
    })
  }

  render() {
    const {name, birth_year, height, eye_color} = this.state.lukeSkywalker;

    return (
      <div className="App">
        <h1>Name: {name} </h1>
        <h1>Birth Year: {birth_year}</h1>
        <h1>Height: {height}</h1>
        <h1>Color: {eye_color}</h1>
      </div>
    );
  }
}

export default App;
