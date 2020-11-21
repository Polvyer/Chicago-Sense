/* Firebase */
import { f as firebase, db } from "./firebase";

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
    db.collection("users")
      .where("email", "==", user.email)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
        });
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  } else {
    window.location = "./index.html";
  }
});

const button = document.querySelector("button");
button.addEventListener("click", logout);
