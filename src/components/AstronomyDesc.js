import React from "react";
import AstronomyImg from "./AstronomyImg";
import "./App.css";

const AstronomyDescription = props => {
  const { title, hdurl, url, explanation, date, copyright } = props.data;
  return (
    <div className="astronomy-info">
      <h6>NASA PHOTO OF THE DAY</h6>
      <span>
        <h6>{date}</h6>
      </span>
      <h3 className="astronomy-title">{title}</h3>

      <a href={hdurl} className="astronomy-image-wrapper">
        <img src={url} alt={title} />
      </a>
      <p>{explanation}</p>

      <span>{copyright}</span>
    </div>
  );
};

export default AstronomyDescription;
