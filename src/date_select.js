/* Needed for Bootstrap (remove if you don't want to use bootstrap) */
import "bootstrap";
import "./scss/bootstrap.scss";

/* CSS (import as many CSS files as you need) */
import "./css/reset.css";
import "./css/date_select.css";

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
const arrow = document.querySelector("arrow");
arrow.addEventListener("click", logout);

$(document).ready(function () {
  console.log("before datepicker");
});
