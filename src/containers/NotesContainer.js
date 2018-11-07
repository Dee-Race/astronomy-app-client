import React, { Component } from "react";
import NotesForm from "../components/NotesForm";

class NotesContainer extends Component {
  state = {
    notes: []
  };

  render() {
    return (
      <div className="Notes-Container">
        <NotesForm />
      </div>
    );
  }
}

export default NotesContainer;
