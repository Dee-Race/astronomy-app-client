import React, { Component } from "react";
import NotesForm from "../components/NotesForm";
import Note from "../components/Note";

class NotesContainer extends Component {
  state = {
    notes: []
  };

  componentDidMount() {
    fetch("http://localhost:3001/api/v1/notes.json")
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ notes: data });
      });
  }

  render() {
    return (
      <div>
        <Note notes={this.state.notes} />
        <NotesForm />
      </div>
    );
  }
}

export default NotesContainer;
