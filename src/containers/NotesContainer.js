import React, { Component } from "react";
import { connect } from "react-redux";

import { getNotes, deleteNote } from "../actions/notes";
import "./Notes.css";

import NoteCard from "../components/NoteCard";
import NotesFormContainer from "./NotesFormContainer";

// A component class implements a render method, which returns a child component

class NotesContainer extends Component {
  componentDidMount() {
    this.props.getNotes();
  }

  // ComponentDidMount is invoked once, after the initial rendering occurs

  render() {
    const { notes } = this.props;
    return (
      <div className="astronomy-note-container">
        <NotesFormContainer />
        <h1>AstroNotes</h1>
        {notes.map(note => (
          <NoteCard
            key={note.id}
            note={note}
            deleteNote={this.props.deleteNote}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes.all
  };
};

// The connect function is taking care of task 1, it is synced with the store
// listening to each change in the state that occurs - when a change occurs, it calls a function
// that we write, which is the mapStateToProps() function, in this function
// we specify exactly which slice of the state we want to provide to our component

export default connect(
  mapStateToProps,
  { getNotes, deleteNote }
)(NotesContainer);

// mapStateToProps extracts the notes from Redux's store and maps it to the notes prop.

// connect function is what actually feeds the data from Redux through mapStateToProps
