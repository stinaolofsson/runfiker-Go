import firebase from 'firebase'
var config = {
    apiKey: "AIzaSyDKo4WAcvG_laNanv2HIa2Dd2r5S-3UByw",
    authDomain: "runfiker-go.firebaseapp.com",
    databaseURL: "https://runfiker-go.firebaseio.com",
    projectId: "runfiker-go",
    storageBucket: "runfiker-go.appspot.com",
    messagingSenderId: "296976805575"
  };
var fire = firebase.initializeApp(config);

const preObject = document.getElementById('object');

const dbRefObject = firebase.database().ref().child('object');

dbRefObject.on('value', snap => console.log(snap.val()));

export default fire;
