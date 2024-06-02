import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDlo9AyTEkgZcKv2Iz71fRJC_86hlOsICU",
    authDomain: "voted-web-app.firebaseapp.com",
    projectId: "voted-web-app",
    storageBucket: "voted-web-app.appspot.com",
    messagingSenderId: "408819279527",
    appId: "1:408819279527:web:9afdbd2dd82f72059f5d82",
    measurementId: "G-GY91LC26CJ",
  };

  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;