// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  getRedirectResult,
  signInWithRedirect,
  signOut,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
const auth = getAuth(app);

var provider = new GoogleAuthProvider();

function SignInMobile() {
  signInWithRedirect(auth,provider);
  getRedirectResult(auth)
  .then((result) => {
    if (result.credential) {
      window.location.assign("./pages/home.html");
    }
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}


async function signInPc (){
  await signInWithPopup(auth,provider).then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // IdP data available in result.additionalUserInfo.profile.
      // ...
      window.location.assign("./pages/home.html");
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  })
}

var googleButton = document.querySelector(".but.but1");
var appleButton = document.querySelector(".but.but2");

googleButton.addEventListener("click", ()=>{
  window.screen.width < 500 ? SignInMobile() : signInPc();
});


appleButton.addEventListener("click", async ()=>{
  await signOut(auth);
  console.log("sign out successfuly.")
});