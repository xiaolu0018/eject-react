
// import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import fetch from '@src/api/ajax.js';
import apiURL from '@src/api/url.js';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </div>
    );
  }
  componentDidMount(){
    console.log("did mount")
    this.getData();
  }
  async getData(){
    let res = await fetch(apiURL.test2,{
      paras:123
    });
    if(res){
      console.log(res);
    }
  }
}

export default App;
