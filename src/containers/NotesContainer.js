import React, { Component } from "react";
import { connect } from "react-redux";
import NoteCard from "../components/NoteCard";
// import NotesFormContainer from "./NotesFormContainer";
import { getNotes } from "../actions/notes";
import "./Notes.css";

class NotesContainer extends Component {
  componentDidMount() {
    this.props.getNotes();
  }

  render() {
    return (
      <div className="astronomy-note-container">
        <h1>Astro Notes</h1>
        {this.props.notes.map(note => (
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
  { getNotes }
)(NotesContainer);

// NotesFormContainer - removed from this page, can be added again
// NotesFormContainer will be added to the dropdown "new"
