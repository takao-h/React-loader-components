import React, { Component } from 'react';
import './App.css';
import BoxSlide from './loading';
import Updown from './Updown';

class App extends Component {
    render() {
        return(
            <div className = "App" >
               <Updown />
            </div>
        );
    }
}

export default App;
