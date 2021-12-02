import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyAH0cN2Qqe0pdN3uN2iwJAQEPRxrCjSpzQ",
  authDomain: "myfinance-cff2a.firebaseapp.com",
  projectId: "myfinance-cff2a",
  storageBucket: "myfinance-cff2a.appspot.com",
  messagingSenderId: "516438316183",
  appId: "1:516438316183:web:6fb6fa6ce4a9842763c5d2",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firebase Services
const fbFirestore = firebase.firestore();
const fbAuth = firebase.auth();

export { fbFirestore, fbAuth };
