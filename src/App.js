import React, { Component } from 'react';
import './App.css';
import {MessageList} from './components/MessageList';
import { createStore, applyMiddleware } from 'redux';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <MessageList/>
        </p>
      </div>
    );
  }
}

export default App;



