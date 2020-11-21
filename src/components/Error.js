import React from "react";
import "../css/error.css";

const Error = ({ errorMessage, toggleError }) => {
  return (
    //"this.parentElement.style.display='none'"
    <div className="alert">
      <span className="closebtn" onClick={toggleError}>
        &times;
      </span>
      {errorMessage}
    </div>
  );
};

export default Error;
