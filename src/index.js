/* Firebase */
import { f as firebase } from "./firebase";

/* CSS */
import "./css/reset.css";
import "./css/index.css";

function signIn(e) {
  e.preventDefault();
  const input = document.querySelectorAll("input");
  const email = input[0].value;
  const password = input[1].value;

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((user) => {
      console.log(user);
      window.location = "./home.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });

  console.log(name, password);
  // action="./home.html"
}

const form = document.querySelector("form");
form.addEventListener("submit", signIn);
