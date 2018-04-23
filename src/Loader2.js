import React,{Component} from 'react';
import './loader.css'
import App from "./App";

class Loader2 extends Component {
  render() {
    const message ="now loading!";
    return(
      <div>
        <div className="loader2"></div>
        <p>{message}</p>
      </div>
    )
  }
}
export default Loader2;