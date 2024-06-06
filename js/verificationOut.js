import app from "./firebasInit.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      console.log(uid);
    window.location.assign("../pages/home.html");

      // ...
    } else {
      // User is signed out
      // ...
    }
  });