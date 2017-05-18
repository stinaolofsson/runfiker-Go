import React, { Component } from 'react';
import './App.css';
import { NavItem, Navbar } from 'react-materialize';
// var Map = require('./Map');
import Map from 'google-maps-react'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar brand='Runfiker Go!' right>
          <NavItem href='index.html'>Map</NavItem>
          <NavItem href='offers.html'>My Offers</NavItem>
        </Navbar>
        <Map google={window.google} zoom={14}></Map>
      </div>
    );
  }
}

export default App;
