// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCP-27ohuqw0HA9uS8fTaC45FHopU1FAyk",
  authDomain: "foodorderingsystem-588ca.firebaseapp.com",
  projectId: "foodorderingsystem-588ca",
  storageBucket: "foodorderingsystem-588ca.appspot.com",
  messagingSenderId: "479395973516",
  appId: "1:479395973516:web:2384fe307d8bc5264caea9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app