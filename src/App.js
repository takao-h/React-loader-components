import React, { Component } from 'react';
import './App.css';
import BoxSlide from './loading';
import Updown from './Updown';

import Loader2 from './Loader2';
class App extends Component {
    render() {
        return(
            <div className = "App" >
               {/* <BoxSlide /> */}
               {/*<Updown />*/}
               <Loader2/>
            </div>
        );
    }
}

export default App;
