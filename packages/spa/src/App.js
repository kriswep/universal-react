import React, { Component } from 'react';
import { Header, Input } from './universal-components';

class App extends Component {
  render() {
    return (
      <div>
        <Header title="test" subtitle="!" />
        <Input placeholder="1" />
      </div>
    );
  }
}

export default App;
