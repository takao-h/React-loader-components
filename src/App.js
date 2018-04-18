import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BoxSlide from './loading';

class App extends Component {
<<<<<<< HEAD
    render() {
        return(
            <div className = "App" >

                <div>
                    <div className="cp_loading17">
                        <div className="cp_item"></div>
                        <div className="cp_item"></div>
                        <div className="cp_item"></div>
                        <div className="cp_item"></div>
                        <div className="cp_item"></div>
                        <p>now loading!!!!!!!</p>
                    </div>
                </div>
            </div>
        );
    }
=======
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
>>>>>>> 9e4d47d8fe1e83e322ceda90b29bddee25635f5c
}

export default App;
