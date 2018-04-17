import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BoxSlide from './loading';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div>
          <BoxSlide />
        </div>
      </div>
    );
  }
}

export default App;
