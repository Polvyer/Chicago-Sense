/* Firebase */
import { f as firebase, db } from "./firebase";

/* CSS */
import "./css/reset.css";
import "./css/results.css";
import "./css/error.css";
import "./css/navigation.css";
import "./css/signout.css";

/* React */
import ReactDOM from "react-dom";
import React from "react";
import Navigation from "./components/Navigation";
import Error from "./components/Error";
import Display from "./components/Display";

/* Data */
import { restaurants } from "./data/restaurants";

ReactDOM.render(
  <Display restaurants={restaurants} />,
  document.getElementById("contain")
);

const stops = [
  {
    name: "Home",
    link: "./home.html",
  },
  {
    name: "Plan Trip",
    link: "./date_select.html",
  },
  {
    name: "Activity",
    link: "./activity.html",
  },
  {
    name: "Priority",
    link: "./priority.html",
  },
  {
    name: "Food",
    link: "./food.html",
  },
  {
    name: "Results",
    link: "./results.html",
  },
];

ReactDOM.render(<Navigation stops={stops} />, document.getElementById("root"));

const toggleError = () => {
  ReactDOM.unmountComponentAtNode(error);
};

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

const signOut = document.getElementById("signOut");
signOut.addEventListener("click", logout);
