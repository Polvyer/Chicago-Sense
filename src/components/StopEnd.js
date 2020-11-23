import React from "react";

const StopEnd = ({ name, link }) => {
  return (
    <div className="nav-stop-end">
      <div className="nav-stop-outer-dot-end">
        <div className="nav-stop-inner-dot-end"></div>
      </div>
      <div className="nav-stop-text-end">{name}</div>
    </div>
  );
};

export default StopEnd;
