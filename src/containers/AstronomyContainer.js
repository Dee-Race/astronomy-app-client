import React, { Component } from "react";
import AstronomyDescription from "../components/AstronomyDesc";

class AstronomyContainer extends Component {
  state = {
    astronomy: []
  };

  fetchAstronomy = () => {
    const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`;
    fetch(`${url}`)
      .then(resp => resp.json())
      .then(data => this.setState({ astronomy: data.results }));
    console.log(this.state.astronomy);
  };

  componentDidMount() {
    this.fetchAstronomy();
  }

  render() {
    return (
      <div>
        <AstronomyDescription />
      </div>
    );
  }
}

export default AstronomyContainer;
