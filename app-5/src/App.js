import React, { Component } from 'react';
import './App.css';

import Image from './Image';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image imageUrl='https://http.cat/204' />
      </div>
    );
  }
}

export default App;
