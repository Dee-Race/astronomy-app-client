import React from "react";
import AstronomyImg from "./AstronomyImg";

const AstronomyDescription = props => {
  return (
    <div className="astronomy-info">
      <h3 className="astronomy-title">{props.data.title}</h3>
      <a href={props.data.hdurl} className="astronomy-image-wrapper">
        <img src={props.data.url} alt={props.data.title} />
      </a>
      <p>{props.data.explanation}</p>

      <span>
        {props.data.date}, {props.data.copyright}
      </span>
    </div>
  );
};

export default AstronomyDescription;
