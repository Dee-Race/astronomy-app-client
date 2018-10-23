import React, { Component } from "react";
import "./App.css";
import AstronomyContainer from "./containers/AstronomyContainer";
import NavbarFeatures from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarFeatures className="Navbar" />
        <div className="main-content">
          <AstronomyContainer />
        </div>
      </div>
    );
  }
}

export default App;
