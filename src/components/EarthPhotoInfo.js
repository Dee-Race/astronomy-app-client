import React from "react";

const EarthPhotoInfo = props => {
  const { identifier, caption, image, date } = props.data;
  return (
    <div className="astronomy-info">
      <h6>DSCOVR's Earth Polychromatic Imaging Camera (EPIC)</h6>
      <span>
        <h6>{date}</h6>
      </span>

      <a href={image} className="earth-image-wrapper">
        <img src={image} alt={identifier} />
      </a>
      <p>{caption}</p>
    </div>
  );
};

export default EarthPhotoInfo;
