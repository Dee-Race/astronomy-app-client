import React, { Component } from "react";
import { connect } from "react-redux";
import AstronomyDescription from "../components/AstronomyDesc";
import { fetchAstronomyData } from "../actions/fetchAstronomy";
import "../App.css";

class AstronomyContainer extends Component {
  componentWillMount() {
    this.props.fetchAstronomyData();
  }

  render() {
    return (
      <div>
        <AstronomyDescription data={this.props.astronomy} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    astronomy: state.astronomy.data
  };
};

export default connect(
  mapStateToProps,
  { fetchAstronomyData }
)(AstronomyContainer);
