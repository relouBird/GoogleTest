import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBf4Z-5S7VhFmIACU0o2G2qCd5BOqj_03o",
    authDomain: "voted-app.firebaseapp.com",
    projectId: "voted-app",
    storageBucket: "voted-app.appspot.com",
    messagingSenderId: "594677514204",
    appId: "1:594677514204:web:666c10c0d7ea3f71fe1919",
    measurementId: "G-2R6BPTNJB3"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;