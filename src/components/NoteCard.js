import React, { Component } from "react";
import { Button } from "reactstrap";

import NoteCounterContainer from "../containers/NoteCounterContainer";

const API_URL = process.env.REACT_APP_API_URL;

class NoteCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      likes: props.note.likes
    };
  }

  handleOnClick(event) {
    this.props.deleteNote(this.props.note.id);
  }

  handleOnLike(event) {
    this.state = { likes: this.state.likes + 1 };

    const noteLikesInfo = {
      title: this.props.note.title,
      date: this.props.note.date,
      content: this.props.note.content,
      submitted_by: this.props.note.submitted_by,
      likes: this.state.likes
    };
    fetch(`${API_URL}/notes/${this.props.note.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ note: noteLikesInfo })
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ likes: data.likes });
      });
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
            onClick={event => this.handleOnLike(event)}
          >
            LIKE
          </Button>
          {this.state.likes}
          <span>{this.props.likesCount}</span>
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
