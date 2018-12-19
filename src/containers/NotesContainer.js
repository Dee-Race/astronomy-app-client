import React, { Component } from "react";
import { connect } from "react-redux";

import { getNotes } from "../actions/notes";
import { deleteNote } from "../actions/notes";
import "./Notes.css";

import NoteCard from "../components/NoteCard";
import NotesFormContainer from "./NotesFormContainer";

class NotesContainer extends Component {
  componentWillMount() {
    this.props.getNotes();
  }

  render() {
    const { notes } = this.props;
    return (
      <div className="astronomy-note-container">
        <h1>Astro Notes</h1>
        <NotesFormContainer />
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
