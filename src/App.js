import React, { Component } from 'react'
import './App.css'
import { TodoApp } from './TodoApp'
import 'semantic-ui-css/semantic.min.css'


class App extends Component {
  render() {
    return (
      <div className='App'>
        <TodoApp />
      </div>
    )
  }
}

export default App
