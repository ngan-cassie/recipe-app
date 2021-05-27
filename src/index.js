import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import firebase from "firebase/app";
// calling firebase utility library belongs to firebase/app

// Initialize Firebase
const config = {
  apiKey: "AIzaSyApFBx-w7ZkpBbUKJymJRUdLtXR40AdwYQ",
  authDomain: "sewanee-dining.firebaseapp.com",
  projectId: "sewanee-dining",
  storageBucket: "sewanee-dining.appspot.com",
  messagingSenderId: "1015872019906",
  appId: "1:1015872019906:web:1933e70dbcee21282c4a5b",
  measurementId: "G-YYDRPWPEW4",
};
firebase.initializeApp(config);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
