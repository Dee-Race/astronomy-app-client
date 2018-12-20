import React, { Component } from "react";
import { connect } from "react-redux";

import { getNotes, deleteNote } from "../actions/notes";
import "./Notes.css";

import NoteCard from "../components/NoteCard";
import NotesFormContainer from "./NotesFormContainer";

class NotesContainer extends Component {
  componentDidMount() {
    this.props.getNotes();
  }

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

export default connect(
  mapStateToProps,
  { getNotes, deleteNote }
)(NotesContainer);

// NotesFormContainer - removed from this page, can be added again
// NotesFormContainer will be added to the dropdown "new"
