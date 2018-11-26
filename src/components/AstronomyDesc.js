import React from "react";
import AstronomyImg from "./AstronomyImg";

const AstronomyDescription = props => {
  const {
    title,
    hdurl,
    url,
    explanation,
    date,
    copyright,
    media_type
  } = props.data;

  function renderMediaType() {
    switch (media_type) {
      case "video":
        return (
          <iframe
            allowFullScreen
            frameBorder="0"
            height="520"
            width="720"
            src={url}
          />
        );

      case "image":
        return (
          <a href={hdurl} className="astronomy-image-wrapper">
            <img src={url} alt={title} />
          </a>
        );

      default:
        return null;
    }
  }

  return (
    <div className="astronomy-info">
      <h6>NASA PHOTO OF THE DAY</h6>
      <span>
        <h6>{date}</h6>
      </span>
      <h3 className="astronomy-title">{title}</h3>

      {renderMediaType()}
      <p>{explanation}</p>

      <span>{copyright}</span>
    </div>
  );
};

export default AstronomyDescription;
