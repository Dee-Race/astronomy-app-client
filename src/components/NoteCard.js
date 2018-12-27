import React, { Component } from "react";
import { Button } from "reactstrap";

class NoteCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  handleOnClick(event) {
    this.props.deleteNote(this.props.note.id);
  }

  handleLikeCounter = () => {
    const newCount = this.state.count + 1;
    this.setState({
      count: newCount
    });
  };

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
          <Button sz="sm" color="black" onClick={this.handleLikeCounter}>
            LIKE {this.state.count}
          </Button>
        </p>
      </div>
    );
  }
}

export default NoteCard;
