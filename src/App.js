import React, { Component } from "react";
import "./App.css";
import "./containers/Notes.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavbarFeatures from "./components/Navbar";
import AstronomyContainer from "./containers/AstronomyContainer";
import AboutPage from "./components/About";
import NotesContainer from "./containers/NotesContainer";
import NotesFormContainer from "./containers/NotesFormContainer";
//import EarthContainer from "./containers/EarthContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Router>
            <React.Fragment>
              <NavbarFeatures className="Navbar" />
              <Route exact path="/" component={AstronomyContainer} />
              <Route exact path="/" component={NotesFormContainer} />
              <Route exact path="/about" component={AboutPage} />
              <Route exact path="/notes" component={NotesContainer} />
              <Route exact path="/new" component={NotesFormContainer} />
            </React.Fragment>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
