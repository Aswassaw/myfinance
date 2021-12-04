import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAH0cN2Qqe0pdN3uN2iwJAQEPRxrCjSpzQ",
  authDomain: "myfinance-cff2a.firebaseapp.com",
  projectId: "myfinance-cff2a",
  storageBucket: "myfinance-cff2a.appspot.com",
  messagingSenderId: "516438316183",
  appId: "1:516438316183:web:6fb6fa6ce4a9842763c5d2",
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// initialize firebase services
const fbFirestore = firebase.firestore();
const fbAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { fbFirestore, fbAuth, timestamp };
