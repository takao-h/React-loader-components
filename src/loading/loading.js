import React, { Component } from 'react';
import './stylesheet/loader.css';

class BoxSlide extends Component {
    render() {
        const message = "now loading";
        return (
            <div className="cp_loading17">
                <div className="cp_item"></div>
                <div className="cp_item"></div>
                <div className="cp_item"></div>
                <div className="cp_item"></div>
                <div className="cp_item"></div>
                <p>{message}</p>
            </div>
        );
    }
}

export default BoxSlide;
