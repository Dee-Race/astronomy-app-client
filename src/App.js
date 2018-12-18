import React, { Component } from "react";
import "./App.css";
import "./containers/Notes.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import AstronomyContainer from "./containers/AstronomyContainer";
import AboutPage from "./components/About";
import NotesContainer from "./containers/NotesContainer";
import NotesFormContainer from "./containers/NotesFormContainer";
import NoteContainer from "./containers/NoteContainer";
//import EarthContainer from "./containers/EarthContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Router>
            <React.Fragment>
              <Navbar />
              <Route exact path="/" component={AstronomyContainer} />
              <Route exact path="/" component={NotesFormContainer} />
              <Route exact path="/about" component={AboutPage} />
              <Route exact path="/notes" component={NotesContainer} />
              <Route exact path="/new" component={NotesFormContainer} />
              <Route exact path="/notes/:note_id" component={NoteContainer} />
            </React.Fragment>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
