import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './loader.css'

class App extends Component {
  render() {
  //   const loader = (message) => {
  //     <div>
  //       <div class="cp_loading17">
  //         <div class="cp_item"></div>
  //         <div class="cp_item"></div>
  //         <div class="cp_item"></div>
  //         <div class="cp_item"></div>
  //         <div class="cp_item"></div>
  //       </div>
  //       <p>{message}</p>
  //   </div>
  // }

  return(
      <div className = "App" >
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <div className="cp_loading17">
            <div className="cp_item"></div>
            <div className="cp_item"></div>
            <div className="cp_item"></div>
            <div className="cp_item"></div>
            <div className="cp_item"></div>
          </div>
          <p>hello!!</p>
        </div>
      </div>
    );
  }
}

export default App;
