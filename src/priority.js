/* CSS */
import "./css/reset.css";
import "./css/activity.css";
import "./css/navigation.css";
import "./css/error.css";
/* Images */
import Group from "./images/group-icon.png";
import Star from "./images/star.png";
import Train from "./images/train.png";
import Dollar from "./images/dollar.png";

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
];

//ReactDOM.render(<Navigation stops={stops} />, document.getElementById("root"));

/* SAVE FOR LATER FOR WHEN IMPLEMENTING POP UP BUBBLES
//Add function to each main menu for show/hide sub menus
var main1selected = true;
wheel1.navItems[0].navigateFunction = function () {
  if (!main1selected) {
    wheel2.navItems[0].navItem.hide();
    wheel2.navItems[1].navItem.hide();
  } else {
    wheel2.navItems[0].navItem.show();
    wheel2.navItems[1].navItem.show();
  }
  main1selected = !main1selected;
};

var main2selected = true;
wheel1.navItems[1].navigateFunction = function () {
  if (!main2selected) {
    wheel2.navItems[2].navItem.hide();
    wheel2.navItems[3].navItem.hide();
  } else {
    wheel2.navItems[2].navItem.show();
    wheel2.navItems[3].navItem.show();
  }
  main2selected = !main2selected;
};
*/
// var main3selected = true;
// wheel1.navItems[2].navigateFunction = function () {
//   if (!main3selected) {
//     wheel2.navItems[4].navItem.hide();
//     wheel2.navItems[5].navItem.hide();
//   } else {
//     wheel2.navItems[4].navItem.show();
//     wheel2.navItems[5].navItem.show();
//   }
//   main3selected = !main3selected;
// };

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
wheel.sliceSelectedAttr = { stroke: "#9CF", "stroke-width": 4 };
wheel.lineSelectedAttr = { stroke: "#9CF", "stroke-width": 4 };
wheel.titleSelectedAttr = { fill: "#9CF" };

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
