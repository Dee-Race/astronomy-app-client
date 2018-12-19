import React, { Component } from "react";

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
          <button onClick={event => this.handleOnClick(event)}>Delete</button>
        </p>
      </div>
    );
  }
}

export default NoteCard;
