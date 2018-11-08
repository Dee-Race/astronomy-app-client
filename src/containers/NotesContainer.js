import React, { Component } from "react";
import NotesForm from "../components/NotesForm";
import Note from "../components/Note";

class NotesContainer extends Component {
  state = {
    notes: []
  };

  render() {
    return (
      <div className="Notes-Container">
        {this.state.notes.map(note => {
          return <Note note={note} key={note.id} />;
        })}
        <NotesForm />
      </div>
    );
  }
}

export default NotesContainer;
