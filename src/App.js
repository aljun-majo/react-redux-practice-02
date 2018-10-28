import React, { Component } from 'react';
import './App.css';
import InputMirror from './InputMirror';
import store from './store/';

class App extends Component {
  render() {
    return (
        <div className="App">
          <h1>Input Redux Example:</h1>
          <InputMirror store={store} />
        </div>
    );
  }
}

export default App;
