import React, { Component } from "react";
import AstronomyDescription from "../components/AstronomyDesc";

class AstronomyContainer extends Component {
  state = {
    astronomy: []
  };

  getAstronomy = () => {
    const url = `https://api.nasa.gov/planetary/apod?api_key=${
      process.env.REACT_APP_NASA_API_KEY
    }`;

    fetch(`${url}`)
      .then(response => response.json())
      .then(data => this.setState({ astronomy: data.results }));
  };

  render() {
    return (
      <div>
        <AstronomyDescription data={this.state.astronomy} />
      </div>
    );
  }
}

export default AstronomyContainer;
