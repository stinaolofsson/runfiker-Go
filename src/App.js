import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'react-materialize';
// var Map = require('./Map');
import Map from 'google-maps-react'

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to RunFiker Go!</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button waves='light'>button</Button>
        <Map google={window.google} zoom={14}></Map>
      </div>
    );
  }
}

export default App;
