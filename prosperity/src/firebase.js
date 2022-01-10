import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDx8A-8HalLLOyjwqrGDPlYDaFXFuod-Xg",
    authDomain: "prosperity-f1689.firebaseapp.com",
    databaseURL: "https://prosperity-f1689-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "prosperity-f1689",
    storageBucket: "prosperity-f1689.appspot.com",
    messagingSenderId: "1063606139651",
    appId: "1:1063606139651:web:0acec45e3a792d89990736",
    measurementId: "G-M79T7NXPQ3"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;
  
