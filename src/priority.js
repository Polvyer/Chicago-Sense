/* Firebase */
import { f as firebase, db } from "./firebase";

/* CSS */
import "./css/reset.css";
import "./css/activity.css";
import "./css/error.css";
import "./css/navigation.css";
import "./css/signout.css";
import "./css/dropdown.css";

/* Images */
import Group from "./images/group-icon.png";
import Star from "./images/star.png";
import Train from "./images/train.png";
import Dollar from "./images/dollar.png";

/* React */
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
  {
    name: "Priority",
    link: "./Priority.html",
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

const wheel = new wheelnav("wheelDiv");

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
  `imgsrc:${Group}`,
  `imgsrc:${Dollar}`,
  `imgsrc:${Star}`,
  `imgsrc:${Train}`,
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
//wheel.sliceSelectedAttr = { stroke: "#9CF", "stroke-width": 4 };
//wheel.lineSelectedAttr = { stroke: "#9CF", "stroke-width": 4 };
//wheel.titleSelectedAttr = { fill: "#9CF" };

//Add function to each main menu for show/hide sub menus
const menu1 = document.querySelector(".content-0");
const menu2 = document.querySelector(".content-1");
const menu3 = document.querySelector(".content-2");
const menu4 = document.querySelector(".content-3");

wheel.navItems[0].navigateFunction = function () {
  menu1.style.display = "inline-block";
  menu2.style.display = "none";
  menu3.style.display = "none";
  menu4.style.display = "none";
};

wheel.navItems[1].navigateFunction = function () {
  menu1.style.display = "none";
  menu2.style.display = "inline-block";
  menu3.style.display = "none";
  menu4.style.display = "none";
};

wheel.navItems[2].navigateFunction = function () {
  menu1.style.display = "none";
  menu2.style.display = "none";
  menu3.style.display = "inline-block";
  menu4.style.display = "none";
};

wheel.navItems[3].navigateFunction = function () {
  menu1.style.display = "none";
  menu2.style.display = "none";
  menu3.style.display = "none";
  menu4.style.display = "inline-block";
};

wheel.refreshWheel();

// Give radial menu images a cursor pointer when hovered over
const images = document.querySelectorAll("image");
Array.from(images).forEach((image) => {
  image.style.cursor = "pointer";
});

// Hide sub menus
const hide = () => {
  menu1.style.display = "none";
  menu2.style.display = "none";
  menu3.style.display = "none";
  menu4.style.display = "none";
};

document.body.addEventListener("click", hide, true);
