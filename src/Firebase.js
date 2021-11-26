import firebase from "./Firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDFnW-G5vxW4cP7mIIhCe1-v_CDV77Ew_I",
    authDomain: "ttok-cce0f.firebaseapp.com",
    databaseURL: "https://ttok-cce0f-default-rtdb.firebaseio.com",
    projectId: "ttok-cce0f",
    storageBucket: "ttok-cce0f.appspot.com",
    messagingSenderId: "576101910995",
    appId: "1:576101910995:web:d03caba4cf8ae698d18726"
  };
  
// this initializes the firebase app instance, firebaseConfig is from what we've put there
// const firebaseApp = firebase.initializeApp(firebaseConfig);
const app = firebase.initializeApp(firebaseConfig);

// we are creating database
const db = app.firestore();

// export the db and allow us to use the database
export default db();