import React, { Component } from 'react';
import './App.css';
import AddTask from './AddTask';
import Filter from './Filter';
import Table from './Table';


class App extends Component {
  render() {
    return (
      <div className="App">
        <AddTask />
        <Filter/>
        <Table/>
      </div>
    );
  }
}

export default App;
