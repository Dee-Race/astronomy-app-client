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

  // State allows React components to change their output over time in response to user actions

  componentDidMount() {
    this.props.getNotes();
  }

  // ComponentDidMount is invoked once, after the initial rendering occurs

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.notes) {
  //     this.setState({
  //       notes: nextProps.notes
  //     });
  //   }
  // }

  // This lifecyle method will continue until version 17
  // unsafe to unconditionally override state using either of these lifecycles ( componentWillRecieveProps and getDerivedStateFromProps)
  // This method is invoked before a mounted component recieves new props.

  handleOnSortButton = () => {
    function compare(a, b) {
      if (a.likes > b.likes) return -1;
      if (a.likes < b.likes) return 1;
      return 0;
    }

    let sorted = [...this.props.notes].sort(compare); //this.props.notes.sort(compare)};

    console.log(sorted);

    this.setState({ notes: sorted });
  };

  // When the sort() function compares two values, it sends the values to the compare function
  // and sorts the values according to the returned (negative, zero, positive) value.

  // comparison function based on amount of likes per note
  // DESC order

  // UI update by calling setState() with an object containing the sorted notes,
  // calls render() method again to learn what should be on the screen

  // if this.state.notes !== [] return this.state
  // or else if this.props return .....

  render() {
    const notes =
      this.state.notes == [].length > 0 ? this.props.notes : this.state.notes;

    // if this.state.notes is equal to an array with a length greater than 0, return this.props.notes, or else return this.state.notes

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
