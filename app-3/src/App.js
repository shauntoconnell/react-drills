import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      listInput: '',
      searchInput: '',
      list: [],
      displayList: []
    }
  }

  handleListInput(val) {
    this.setState({
      listInput: val
    })
  }

  addToList(val) {
    this.state.list.push(val);
    this.setState({
      listInput: '',
      list: this.state.list,
      displayList: this.state.list
    })
  }

  filterList(val) {
    this.setState({
      displayList: this.state.list.filter(e => e.includes(val))
    })
  }

  render() {
    console.log(this.state);

    const {listInput, displayList} = this.state;

    return (
      <div className="App">
        <input onChange={event => this.handleListInput(event.target.value)}
          onKeyPress={event => {if(event.key === 'Enter') this.addToList(listInput)}}
          value={listInput} placeholder='add to list...'/>
        
        <input onChange={event => this.filterList(event.target.value)}
          // onKeyPress={event => {if(event.key === 'Enter') this.filterList()}}
          placeholder='search list...'/>

        {displayList.map((e,i) => <h2 key={i}>{e}</h2>)}
      </div>
    );
  }
}

export default App;
