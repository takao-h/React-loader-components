import React, { Component } from 'react';
import './App.css';
import BoxSlide from './loading/loading';
import Loader2 from './loading/Loader2';
 

class App extends Component {
    render() {
        return(
            <div className = "App" >
               <Loader2 />
            </div>
        );
    }
}
export default App;
