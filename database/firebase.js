import firebase from 'firebase';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyCwRmQNEkugu_lN2AZduAkzD6Judb_vdtQ",
  authDomain: "aplicacionjc-33b74.firebaseapp.com",
  databaseURL: "https://aplicacionjc-33b74.firebaseio.com",
  projectId: "aplicacionjc-33b74",
  storageBucket: "aplicacionjc-33b74.appspot.com",
  messagingSenderId: "166324019217",
  appId: "1:166324019217:web:7339d1758d42c2b7a2d1b0"
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
