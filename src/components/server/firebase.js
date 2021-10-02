import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyB0nRMKrspHc6vHBNcM9uAVQLr18dlkW0I",
    authDomain: "instagram-clone-dfa0b.firebaseapp.com",
    projectId: "instagram-clone-dfa0b",
    storageBucket: "instagram-clone-dfa0b.appspot.com",
    messagingSenderId: "1077110270100",
    appId: "1:1077110270100:web:4f61c6f612cb119078ec81",
    measurementId: "G-1VHS5CTTWR"
  };


  const server = firebase.initializeApp(firebaseConfig);
  const auth  = server.auth();
  const database = server.firestore();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, database, provider } ;