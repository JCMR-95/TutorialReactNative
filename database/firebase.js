import firebase from 'firebase';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyDVRW9ApIxelfchVnOUZ82Egy3Z5Lg1TqA",
    authDomain: "aplicacionreactnative.firebaseapp.com",
    databaseURL: "https://aplicacionreactnative.firebaseio.com",
    projectId: "aplicacionreactnative",
    storageBucket: "aplicacionreactnative.appspot.com",
    messagingSenderId: "983861496117",
    appId: "1:983861496117:web:c0d4eb7f423908c47ee47c",
    measurementId: "G-F3LVLZCZRQ"
  };
  // Initialize Firebase

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  const db = firebase.firestore();

  export default {
      firebase,
      db
  }
