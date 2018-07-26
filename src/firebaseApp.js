
import * as firebase from 'firebase'

  const config = {
    apiKey: "AIzaSyCspkWU_YewTfP9ReEqdJFKCBDvgf9_q7g",
    authDomain: "turnout-844c0.firebaseapp.com",
    databaseURL: "https://turnout-844c0.firebaseio.com",
    projectId: "turnout-844c0",
    storageBucket: "turnout-844c0.appspot.com",
    messagingSenderId: "585038853214"
  };
  
  export const firebaseApp = firebase.initializeApp(config)
  export const eventsRef = firebase.database().ref().child('events')
