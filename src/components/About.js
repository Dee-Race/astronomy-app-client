import React from "react";
import "../App.css";

const AboutPage = () => {
  const image_url = "https://unsplash.com/photos/2pUz1VSINsA.jpg";
  const url = "https://apod.nasa.gov/apod/archivepix.html";
  return (
    <div className="about-page">
      <p>
        Get inspired by NASA's Astronomy Picture of the Day to save and record
        information on locations, dates, and content. Are you inspired by an
        image and it's location to plan a trip? Are you fascinated by the new
        astronomy information and want to further research a concept? Visit the
        AstronomyApp daily to view outstanding images and create a new
        AstroNote!
      </p>
      <p>
        Browse previous AstroNotes submission to learn more about the preceding
        astronomical daily photos. And don't forget to create a new AstroNote to
        add to the collection!
      </p>
      <p>
        Interested in viewing previous daily photos and videos from NASA? Click{" "}
        <a href={url}>HERE!</a>
      </p>
      <img src={image_url} alt="astronomy" />
    </div>
  );
};

export default AboutPage;
