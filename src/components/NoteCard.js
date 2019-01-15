import React, { Component } from "react";
import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
import { Button } from "reactstrap";

import { incrementLikes, deleteNote } from "../actions/notes";

// import NoteCounterContainer from "../containers/NoteCounterContainer";

// const API_URL = process.env.REACT_APP_API_URL;

class NoteCard extends Component {
  handleOnClick(event) {
    this.props.deleteNote(this.props.note.id);
  }

  handleOnLike(event) {
    const { note } = this.props;

    this.props.incrementLikes(note);
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
          {note.likes}
          <span>{this.props.likes}</span>
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

const mapStateToProps = state => {
  return {
    likes: state.likes
  };
};

// mapStateToProps transforms the Redux state into an object containing props

//const mapDispatchToProps = dispatch =>
// bindActionCreators(
//{
//  incrementLikes
// },
// dispatch
//);

// Turns an object whose values are ACTION creators, into an object with the same keys,
// but with every action creator wrapped into a dispatch call so they may be invoked directly

// The only use case for bindActionCreators is when you want to pass some action creators down to a component

export default connect(
  mapStateToProps,
  { incrementLikes, deleteNote }
)(NoteCard);

// connect is a higher-order function - it returns a function when you call it
// and then calling that function with a component returns a new (wrapped) component.
// connect hooks into Redux, pulls out the entire state, and passes it through the mapStateToProps function
// the object you return from mapStateToProps gets fed into your component as props
