/* Firebase */
import { f as firebase, db } from "./firebase";

/* CSS */
import "./css/reset.css";
import "./css/home.css";
import "./css/error.css";
import "./css/navigation.css";

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
  if (user) {
    db.collection("users")
      .where("email", "==", user.email)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          const user = document.getElementById("user");
          user.textContent = `Howdy ${doc.data().firstName},`;
        });
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
        const user = document.getElementById("user");
        user.textContent = `Howdy Stranger,`;
      });
  } else {
    window.location = "./index.html";
  }
});

const signOut = document.getElementById("signOut");
signOut.addEventListener("click", logout);

const error = document.getElementById("error");
