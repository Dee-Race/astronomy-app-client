import React from "react";
import AstronomyImg from "./AstronomyImg";

const AstronomyDescription = props => {
  return (
    <div className="astronomy-info">
      <h3 className="astronomy-title">{props.data.title}</h3>
      <AstronomyImg astronomy={props.astronomy} />
      <p>{props.data.explanation}</p>
    </div>
  );
};

export default AstronomyDescription;
