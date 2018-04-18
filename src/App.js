import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './loader.css';

class App extends Component {
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
}

export default App;
