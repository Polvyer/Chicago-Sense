import React from "react";

const Stop = ({ name, link }) => {
  return (
    <div className="nav-stop" onClick={() => (window.location = link)}>
      <div className="nav-stop-outer-dot">
        <div className="nav-stop-inner-dot"></div>
      </div>
      <div className="nav-stop-text">{name}</div>
    </div>
  );
};

export default Stop;
