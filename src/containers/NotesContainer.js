import React, { Component } from "react";
import Notes from "../components/Notes";
import NotesForm from "../components/NotesForm";
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
    fetch(`${API_URL}/notes`)
      .then(response => response.json())
      .then(notes => this.setState({ notes }));
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

export default NotesContainer;
