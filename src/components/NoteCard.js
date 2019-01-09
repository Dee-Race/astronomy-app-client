import React, { Component } from "react";
import { Button } from "reactstrap";

class NoteCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  // the count state is stored in the top level NoteCard component
  // when the user clicks "LIKE", the button's onClick handler is called, bound to the handleLikeCounter
  // the handleLikeCounter function updates the state with the new count
  // because state was changed, React re-renders the NoteCard component, and the new counter value is displayed

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
