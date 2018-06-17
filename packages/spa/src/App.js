import React, { Component } from 'react';
import { Header, Input } from './universal-components';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Header title="test" subtitle="!" />
        <Input placeholder="1" />
        <Input placeholder="2" />
        <Input placeholder="3" />
        <Input placeholder="4" />
        <Input placeholder="5" />
        <Input placeholder="6" />
        <Input placeholder="7" />
        <Input placeholder="8" />
        <Input placeholder="9" />
        <Input placeholder="10" />
        <Input placeholder="11" />
        <Input placeholder="12" />
      </div>
    );
  }
}

export default App;
