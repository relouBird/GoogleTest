import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAQ5Uv4lnOoYYNHtKUWzlwom5B96dhNpS4",
    authDomain: "voted-web-app-9e54c.firebaseapp.com",
    projectId: "voted-web-app-9e54c",
    storageBucket: "voted-web-app-9e54c.appspot.com",
    messagingSenderId: "213625233671",
    appId: "1:213625233671:web:bdee62afcb0bc157f725a2"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;