import React, { Component } from 'react';
import './updown.css';

class Updown extends Component {
    render() {
        const message = "now loading";
        return(
            <div>
                <div className="loader"></div>
                <p>{message}</p>
            </div>

        );
    }
        
}

export default Updown;