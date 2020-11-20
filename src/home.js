/* Firebase */
import { f as firebase } from "./firebase";

/* CSS (import as many CSS files as you need) */
import "./css/reset.css";
import "./css/home.css";

function logout(e) {
  firebase.auth().signOut();
  alert("Signing out...");
  window.location = "./login.html";
}

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log(user);
    alert("User is signed in");
    var uid = user.uid;
  } else {
    window.location = "./index.html";
  }
});

const button = document.querySelector("button");
button.addEventListener("click", logout);
