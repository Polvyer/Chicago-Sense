/* Needed for Bootstrap (remove if you don't want to use bootstrap) */
//import "bootstrap";
//import "./scss/bootstrap.scss";

/* CSS (import as many CSS files as you need) */
import "./css/reset.css";
import "./css/register.css";

/* React */
import ReactDOM from "react-dom";
import React from "react";
import Form from "./components/Form.js";

ReactDOM.render(<Form />, document.getElementById("root"));
