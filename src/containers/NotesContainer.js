import React, { Component } from "react";
import NotesForm from "../components/NotesForm";
import Note from "../components/Note";

class NotesContainer extends Component {
  state = {
    notes: []
  };

  componentDidMount() {
    fetch("http://localhost:3001/api/v1/notes.json").then(response => {
      console.log(response);
      this.setState({
        notes: response.data
      });
    });
  }

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
