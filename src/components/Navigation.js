import React from "react";
import Stop from "./Stop";

const Navigation = ({ stops }) => {
  const addLine = (index) => {
    if (stops.length !== index + 1) {
      return <div className="vl"></div>;
    }
    return null;
  };

  return (
    <>
      {stops.map((stop, index) => {
        return (
          <React.Fragment key={stop.link}>
            <Stop name={stop.name} link={stop.link} />
            {addLine(index)}
          </React.Fragment>
        );
      })}
    </>
  );
};

export default Navigation;
