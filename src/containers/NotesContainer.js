import React, { Component } from "react";
import { connect } from "react-redux";
import Notes from "../components/Notes";
import NotesForm from "./NotesFormContainer";
import { getNotes } from "../actions/notes";
import "./Notes.css";

class NotesContainer extends Component {
  componentDidMount() {
    this.props.getNotes();
  }

  render() {
    return (
      <div className="notes-container">
        <Notes notes={this.state.notes} />
        <NotesForm />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes
  };
};

export default connect(
  mapStateToProps,
  { getNotes }
)(NotesContainer);
