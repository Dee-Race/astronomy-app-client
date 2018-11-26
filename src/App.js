import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavbarFeatures from "./components/Navbar";
import AstronomyContainer from "./containers/AstronomyContainer";
import AboutPage from "./components/About";
//import EarthContainer from "./containers/EarthContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <NavbarFeatures className="Navbar" />
            <Route exact path="/" component={AstronomyContainer} />
            <Route exact path="/about" component={AboutPage} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
