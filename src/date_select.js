/* Firebase */
import { f as firebase, db } from "./firebase";

/* CSS */
import "./css/reset.css";
import "./css/signout.css";
import "./css/error.css";
import "./css/navigation.css";
import "./css/date_select.css";

/* React */
import ReactDOM from "react-dom";
import React from "react";
import Navigation from "./components/Navigation";
import Error from "./components/Error";

const toggleError = () => {
  ReactDOM.unmountComponentAtNode(error);
};

const stops = [
  {
    name: "Home",
    link: "./home.html",
  },
  {
    name: "Plan Trip",
    link: "./date_select.html",
  },
];

ReactDOM.render(<Navigation stops={stops} />, document.getElementById("root"));

function logout(e) {
  ReactDOM.render(
    <Error errorMessage="Signing out" toggleError={toggleError} />,
    document.getElementById("error")
  );
  firebase.auth().signOut();
}

firebase.auth().onAuthStateChanged((user) => {
  if (!user) {
    window.location = "./index.html";
  }
});

let value = document.getElementById("value");
let number = 1;

document.getElementById("arrowR").onclick = function () {
  incrementNumber();
};

document.getElementById("arrowL").onclick = function () {
  decrementNumber();
};

function incrementNumber() {
  number < 10 ? number++ : (number = number);

  switch (number) {
    case 1:
      value.innerHTML = "Just a day";
      break;
    case 7:
      value.innerHTML = "A week";
      break;
    case 8:
      value.innerHTML = "A fortnight";
      break;
    case 9:
      value.innerHTML = "A month";
      break;
    case 10:
      value.innerHTML = "A really long time";
      break;
    default:
      value.innerHTML = number + " days";
  }
}

function decrementNumber() {
  number != 1 ? number-- : (number = number);

  switch (number) {
    case 1:
      value.innerHTML = "Just a day";
      break;
    case 7:
      value.innerHTML = "A week";
      break;
    case 8:
      value.innerHTML = "A fortnight";
      break;
    case 9:
      value.innerHTML = "A month";
      break;
    case 10:
      value.innerHTML = "A really long time";
      break;
    default:
      value.innerHTML = number + " days";
  }
}

const advance = () => {
  window.location = "./activity.html";
};

const signOut = document.getElementById("signOut");
signOut.addEventListener("click", logout);

const checkmark = document.querySelector(".continueButton");
checkmark.addEventListener("click", advance);
