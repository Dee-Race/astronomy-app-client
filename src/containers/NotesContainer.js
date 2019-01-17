import React, { Component } from "react";
import { connect } from "react-redux";

import { getNotes, deleteNote } from "../actions/notes";
import "./Notes.css";

import NoteCard from "../components/NoteCard";
import NotesFormContainer from "./NotesFormContainer";

import { Button } from "reactstrap";

// A component class implements a render method, which returns a child component

class NotesContainer extends Component {
  state = {
    notes: []
  };

  componentDidMount() {
    this.props.getNotes();
  }

  // ComponentDidMount is invoked once, after the initial rendering occurs

  componentWillReceiveProps(nextProps) {
    if (nextProps.notes) {
      this.setState({
        notes: nextProps.notes
      });
    }
  }

  // This lifecyle method will continue until version 17
  // unsafe to unconditionally override state using either of these lifecycles ( componentWillRecieveProps and getDerivedStateFromProps)
  // This method is invoked before a mounted component recieves new props.

  handleOnSortButton = () => {
    function compare(a, b) {
      if (a.likes > b.likes) return -1;
      if (a.likes < b.likes) return 1;
      return 0;
    }

    let sorted = this.props.notes.sort(compare);

    this.setState({ notes: sorted });
  };

  // comparison function based on amount of likes per note
  // DESC order

  render() {
    const { notes } = this.state;

    return (
      <div className="astronomy-note-container">
        <NotesFormContainer />
        <Button size="sm" color="white" onClick={this.handleOnSortButton}>
          SORT NOTES BY LIKES
        </Button>
        <h1>AstroNotes</h1>

        {notes.map(note => (
          <NoteCard
            key={note.id}
            note={note}
            deleteNote={this.props.deleteNote}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes.notes
  };
};

// mapStateToProps transforms the Redux state into an object containing props

// The connect function is taking care of task 1, it is synced with the store
// listening to each change in the state that occurs - when a change occurs, it calls a function
// that we write, which is the mapStateToProps() function, in this function
// we specify exactly which slice of the state we want to provide to our component

export default connect(
  mapStateToProps,
  { getNotes, deleteNote }
)(NotesContainer);

// mapStateToProps extracts the notes from Redux's store and maps it to the notes prop.

// connect function is what actually feeds the data from Redux through mapStateToProps
