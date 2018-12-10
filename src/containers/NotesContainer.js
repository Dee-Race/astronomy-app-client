import React, { Component } from "react";
import { connect } from "react-redux";
import Notes from "../components/Notes";
import NotesForm from "../components/NotesForm";
import { getNotes } from "../actions/notes";
import "./Notes.css";

const API_URL = process.env.REACT_APP_API_URL;

class NotesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    };
  }

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
