/* Needed for Bootstrap (remove if you don't want to use bootstrap) */
//import "bootstrap";
//import "./scss/bootstrap.scss";

/* CSS (import as many CSS files as you need) */
//import "./css/reset.css";

/* Images (import as many images as you need) */
//import Chicago from "./images/chicago.png";

import { f as firebase, db } from "./firebase";

/* CSS */
import "./css/reset.css";
import "./css/activity.css";
import "./css/signout.css";
import "./css/navigation.css";
import "./css/error.css";
/* Images */
import Food from "./images/Food.png";
import Hotels from "./images/Hotels.png";
import Tourism from "./images/Tourism.png";
import Entertain from "./images/Entertain.png";

import ReactDOM from "react-dom";
import React from "react";
import Navigation from "./components/Navigation";
import Error from "./components/Error";

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

const signOut = document.getElementById("signOut");
signOut.addEventListener("click", logout);

const wheel = new wheelnav("wheelDiv");

// DropMarker
/*
wheel.markerPathFunction = markerPath().DropMarker;
wheel.markerAttr = { fill: "#333", stroke: "#333" };
wheel.markerEnable = true;
*/

// Start wheelnav with no selection
wheel.selectedNavItemIndex = null;

// The colors of wheel defined by string array
wheel.colors = ["#FFF"];

// Enable keyboard navigation
wheel.keynavigateEnabled = true;

// The angle of wheel
wheel.navAngle = 225;

// The default wheelRadius is the half of the width of div
wheel.wheelRadius = 180;

// You can set the center of wheelnav
wheel.centerX = 180;
wheel.centerY = 180;

// The default mode is rotation
wheel.clickModeRotate = false;

// Scale the icon size of SVGs
wheel.sliceTransformFunction = sliceTransform().CustomTitleTransform;
wheel.sliceTransformCustom = new sliceTransformCustomization();
wheel.sliceTransformCustom.scaleString = "s3.50";

// Scale the icon size of the SVG selected
wheel.sliceSelectedTransformFunction = sliceTransform().CustomTitleTransform;
wheel.sliceSelectedTransformCustom = new sliceTransformCustomization();
wheel.sliceSelectedTransformCustom.scaleString = "s4.00";

// The title of navItem can be text and icon. The icon can be svg or image.
wheel.createWheel([
  `imgsrc:${Food}`,
  `imgsrc:${Hotels}`,
  `imgsrc:${Tourism}`,
  `imgsrc:${Entertain}`,
]);

// Every navItem element has an Attr property.
wheel.slicePathAttr = { stroke: "#800000", "stroke-width": 3 };
wheel.linePathAttr = { stroke: "#800000", "stroke-width": 2 };
wheel.titleAttr = { fill: "#800000", stroke: "none" };

// You can set attributes over hovered state.
wheel.sliceHoverAttr = { stroke: "#00a1de", "stroke-width": 4 };
wheel.lineHoverAttr = { stroke: "#00a1de", "stroke-width": 3 };
wheel.titleHoverAttr = { fill: "#00a1de", stroke: "none" };

// You can set attributes over selected state.
wheel.sliceSelectedAttr = { stroke: "#9CF", "stroke-width": 4 };
wheel.lineSelectedAttr = { stroke: "#9CF", "stroke-width": 4 };
wheel.titleSelectedAttr = { fill: "#9CF" };

wheel.navItems[0].navigateFunction = function () {
  setTimeout("window.open('./food.html', '_top')", 2000);
};
wheel.navItems[1].navigateFunction = function () {
  setTimeout("window.open('./404.html', '_top')", 2000);
};
wheel.navItems[2].navigateFunction = function () {
  setTimeout("window.open('./404.html', '_top')", 2000);
};
wheel.navItems[3].navigateFunction = function () {
  setTimeout("window.open('musical.html', '_top')", 2000);
};
wheel.refreshWheel();

/* FAILED TEXT ATTEMPTS
const path = document.querySelectorAll("path");
console.log(path);

//const span = document.createElement("span");
//span.classList.add("tooltiptext");
//span.textContent = "Hi";
path[0].setAttribute("title", "hi");
//path[0].appendChild(span);

const images = document.querySelectorAll("image");
console.log(images);
images[0].setAttribute("title", "hi");

images.forEach((image) => {
  const span = document.createElement("span");
  span.classList.add("tooltiptext");
  span.textContent = "Hi";
  image.classList.add("tooltip");
  image.appendChild(span);
});
*/
