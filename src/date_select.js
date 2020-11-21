/* Needed for Bootstrap (remove if you don't want to use bootstrap) */
import "bootstrap";
import "./scss/bootstrap.scss";

/* CSS (import as many CSS files as you need) */
//import "./css/reset.css";
import "./css/date_select.css";

/* Images (import as many images as you need) */
//import Chicago from "./images/chicago.png";

$(document).ready(function () {
  $("#js-date").datepicker();
});
