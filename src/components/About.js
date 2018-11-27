import React from "react";

const AboutPage = () => {
  const url = "https://apod.nasa.gov/apod/archivepix.html";
  return (
    <div>
      <p>
        Get inspired by NASA's Astronomy Picture of the Day to save and record
        information on locations, dates, and content. Are you inspired by an
        image and it's location to plan a trip? Are you fascinated by the new
        astronomy information and want to further research a concept? Visit the
        AstroApp daily to view outstanding images and create a new AstroNote!
      </p>
      <p>
        Interested in viewing previous daily photos and videos from NASA? Click{" "}
        <a href={url}>HERE!</a>
      </p>
    </div>
  );
};

export default AboutPage;
