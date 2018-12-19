import React, { Component } from "react";
import AstronomyDescription from "../components/AstronomyDesc";
import "../App.css";

const URL = `https://api.nasa.gov/planetary/apod?api_key=${
  process.env.REACT_APP_NASA_API_KEY
}`;

class AstronomyContainer extends Component {
  state = {
    fetchingData: true,
    astronomy: []
  };

  componentDidMount() {
    fetch(`${URL}`)
      .then(response => response.json())
      .then(astronomy =>
        this.setState({
          fetchingData: false,
          astronomy
        })
      );
  }

  render() {
    const { fetchingData, astronomy } = this.state;
    console.log("Astronomy data: ", astronomy);
    return (
      <div>
        <AstronomyDescription data={astronomy} />
      </div>
    );
  }
}

export default AstronomyContainer;
