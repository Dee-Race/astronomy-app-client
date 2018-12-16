import React from "react";
import { connect } from "react-redux";
import { getNotes, deleteNote } from "../actions/notes";

const Note = props => {
  return (
    <div>
      <span>AstroNote: {props.note.text}</span>
      <button onClick={() => props.deleteNote(props.note.id)}>Destroy</button>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    deleteNote: note => {
      dispatch(deleteNote(note));
    },
    getNotes: () => {
      dispatch(getNotes());
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Note);
