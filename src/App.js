import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render(){
  return (
    <div>
    {/* <div className="header">
      Phone Directory
      </div>
      <button> Add </button>
      <div>
        <span> Name </span><br/>
        <span> Phone </span>
      </div>*/}
    <label for="name">Name: </label>
    <input id="name" type="text" placeholder="Type Here" defaultValue="Mamta"/>
    </div>
  );
}
}

export default App;
