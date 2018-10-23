import React from "react";
import AstronomyImg from "./AstronomyImg";

const AstronomyDescription = props => {
  const { title, hdurl, url, explanation, date, copyright } = props.data;
  return (
    <div className="astronomy-info">
      <h3 className="astronomy-title">{title}</h3>
      <a href={hdurl} className="astronomy-image-wrapper">
        <img src={url} alt={title} />
      </a>
      <p>{explanation}</p>

      <span>
        {date}, {copyright}
      </span>
    </div>
  );
};

export default AstronomyDescription;
