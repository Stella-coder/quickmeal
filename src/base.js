// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app"
import { initializeApp } from "firebase/app";
import "firebase/compat/storage"
import "firebase/compat/firestore";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const app =  firebase.initializeApp({
  apiKey: "AIzaSyCP-27ohuqw0HA9uS8fTaC45FHopU1FAyk",
  authDomain: "foodorderingsystem-588ca.firebaseapp.com",
  projectId: "foodorderingsystem-588ca",
  storageBucket: "foodorderingsystem-588ca.appspot.com",
  messagingSenderId: "479395973516",
  appId: "1:479395973516:web:2384fe307d8bc5264caea9"
});

// Initialize Firebase
