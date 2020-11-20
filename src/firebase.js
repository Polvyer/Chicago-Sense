// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbBLFWMfjWFqAzmRU8J5h7DHH0bDesYzU",
  authDomain: "chicago-sense.firebaseapp.com",
  databaseURL: "https://chicago-sense.firebaseio.com",
  projectId: "chicago-sense",
  storageBucket: "chicago-sense.appspot.com",
  messagingSenderId: "448695709527",
  appId: "1:448695709527:web:0317d5ce41565937311812",
  measurementId: "G-VRPVS0PHMV",
};

// Initialize Firebase
var f = firebase.initializeApp(firebaseConfig);

export { f };
