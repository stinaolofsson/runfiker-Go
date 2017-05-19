import React, { Component } from 'react';
import './App.css';
import { NavItem, Navbar } from 'react-materialize';
import fire from './fire';
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

  constructor(props) {
    super(props);
    this.state = { messages: [] }; // <- set up react state
  }

  componentWillMount(){
    /* Create reference to messages in Firebase Database */
    let messagesRef = fire.database().ref('messages').orderByKey().limitToLast(100);
    messagesRef.on('child_added', snapshot => {
      /* Update React state when message is added at Firebase Database */
      let message = { text: snapshot.val(), id: snapshot.key };
      this.setState({ messages: [message].concat(this.state.messages) });
    })
  }

  addMessage(e){
    e.preventDefault(); // <- prevent form submit from reloading the page
    /* Send the message to Firebase */
    fire.database().ref('messages').push( this.inputEl.value );
    this.inputEl.value = ''; // <- clear the input
  }
}

export default App;
