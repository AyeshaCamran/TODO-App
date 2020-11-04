
  
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDZdKEaq-Y1TCc8KIb2aG9sQY6qM2R9HK0",
    authDomain: "todo-app-dfd1a.firebaseapp.com",
    databaseURL: "https://todo-app-dfd1a.firebaseio.com",
    projectId: "todo-app-dfd1a",
    storageBucket: "todo-app-dfd1a.appspot.com",
    messagingSenderId: "361811383397",
    appId: "1:361811383397:web:08ec4f060105ec467de28c",
    measurementId: "G-001TYEXFCF"
});

const db = firebaseApp.firestore();

export default db ;