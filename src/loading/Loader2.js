import React, {Component} from 'react';
import './stylesheet/loader2.css';

class Loader2 extends Component {
  render() {
    const message = "now loading!";
    return (
      <div>
        <div className="loader"></div>
        <p>{message}</p>
      </div>
    );
  }
}
export default Loader2;