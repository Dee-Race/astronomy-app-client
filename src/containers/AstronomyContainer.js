import React, { Component } from "react";
import AstronomyDescription from "../components/AstronomyDesc";

class AstronomyContainer extends Component {
  state = {
    astronomy: []
  };

  componentDidMount() {
    const URL = `https://api.nasa.gov/planetary/apod?api_key=${
      process.env.REACT_APP_NASA_API_KEY
    }`;

    fetch(URL)
      .then(response => response.json())
      .then(response => this.setState({ astronomy: response.data }));
  }

  render() {
    const { astronomy } = this.state;
    return (
      <div>
        <AstronomyDescription data={astronomy} />
      </div>
    );
  }
}

export default AstronomyContainer;
