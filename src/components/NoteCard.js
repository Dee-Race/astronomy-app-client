import React, { Component } from "react";
import { Button } from "reactstrap";

class NoteCard extends Component {
  handleOnClick(event) {
    this.props.deleteNote(this.props.note.id);
  }

  render() {
    const { note } = this.props;
    return (
      <div key={note.id} className="astronomy-note-card">
        <h3>{note.title}</h3>
        <p>Date: {note.date}</p>
        <p>{note.content}</p>
        <p>
          Submitted By: {note.submitted_by} <br />
          <Button
            size="sm"
            color="white"
            onClick={event => this.handleOnClick(event)}
          >
            Delete
          </Button>
        </p>
      </div>
    );
  }
}

export default NoteCard;
