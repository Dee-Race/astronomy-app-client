import React, { Component } from "react";
import "./App.css";
import AstronomyContainer from "./containers/AstronomyContainer";
import Header from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Astronomy App</h1>
        <Header className="Header" />
        <div className="main-content">
          <AstronomyContainer />
        </div>
      </div>
    );
  }
}

export default App;
