/* Firebase */
import { f as firebase, db, firebase as f } from "./firebase";

/* CSS */
import "./css/reset.css";
import "./css/index.css";
import "./css/error.css";

/* React */
import ReactDOM from "react-dom";
import React, { useState } from "react";
import Error from "./components/Error";

const toggleError = () => {
  ReactDOM.unmountComponentAtNode(error);
};

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    window.location = "./home.html";
  }
});

function signIn(e) {
  e.preventDefault();
  const input = document.querySelectorAll("input");
  const email = input[0].value;
  const password = input[1].value;
  const checked = input[2].checked;
  console.log(firebase.auth);

  if (!checked) {
    firebase
      .auth()
      .setPersistence(f.auth.Auth.Persistence.SESSION)
      .then(() => firebase.auth().signInWithEmailAndPassword(email, password))
      .then((user) => {
        window.location = "./home.html";
      })
      .catch((error) => {
        console.log(error.message);
        ReactDOM.render(
          <Error errorMessage={error.message} toggleError={toggleError} />,
          document.getElementById("root")
        );
      });
    return;
  }

  firebase
    .auth()
    .setPersistence(f.auth.Auth.Persistence.LOCAL)
    .then(() => firebase.auth().signInWithEmailAndPassword(email, password))
    .then((user) => {
      window.location = "./home.html";
    })
    .catch((error) => {
      console.log(error.message);
      ReactDOM.render(
        <Error errorMessage={error.message} toggleError={toggleError} />,
        document.getElementById("root")
      );
    });
}

const form = document.querySelector("form");
form.addEventListener("submit", signIn);

const error = document.getElementById("root");
