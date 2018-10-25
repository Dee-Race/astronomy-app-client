import React, { Component } from "react";
import EarthPhotoInfo from "../components/EarthPhotoInfo";

const URL = `https://api.nasa.gov/EPIC/api/natural/images?api_key=${
  process.env.REACT_APP_NASA_API_KEY
}`;

class EarthContainer extends Component {
  state = {
    fetchingData: true,
    earthPhotoData: []
  };

  componentDidMount() {
    fetch(`${URL}`)
      .then(response => response.json())
      .then(earthPhotoData =>
        this.setState({
          fetchingData: false,
          earthPhotoData
        })
      );
  }

  render() {
    const { fetchingData, earthPhotoData } = this.state;
    console.log("Earth photo data: ", earthPhotoData);
    return (
      <div>
        <EarthPhotoInfo data={earthPhotoData} />
      </div>
    );
  }
}

export default EarthContainer;
