import React from "react";
import Stop from "./Stop";
import StopEnd from "./StopEnd";

const Navigation = ({ stops }) => {
  //const amt = amt + 1;
  const addLine = (index) => {
    if (stops.length !== index + 1) {
      if (index == stops.length - 2) {
        return <div className="v2"></div>;
      }
      return <div className="vl"></div>;
    }

    return null;
  };

  return (
    <>
      {stops.map((stop, index) => {
        console.log(index + " ");
        console.log(stops.length + "\n");
        if (index < stops.length - 1) {
          return (
            <React.Fragment key={stop.link}>
              <Stop name={stop.name} link={stop.link} />
              {addLine(index)}
            </React.Fragment>
          );
        }
        console.log("last!");
        return (
          <React.Fragment key={stop.link}>
            <StopEnd name={stop.name} link={stop.link} />
            {addLine(index)}
          </React.Fragment>
        );
      })}
    </>
  );
};

export default Navigation;
