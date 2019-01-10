/* import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "reactstrap";

import { incrementLikes } from "../actions/notesCounter";

class NoteCounterContainer extends Component {
  incrementLikes = event => {
    const { name, value } = event.target;
    const noteLikesInfo = Object.assign({}, this.props.likesCount, {
      [name]: value
    });
    this.props.incrementLikes({
      likesCount: noteLikesInfo,
      noteId: this.props.noteId
    });
  };

  render() {
    const likes_count_array = Object.values(this.props.likesCount);
    return (
      <div>
        <Button onClick={event => this.incrementLikes(event)}>LIKE</Button>
        <span>{likes_count_array}</span>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    likesCount: state.likesCount
  };
};

// mapStateToProps transforms the Redux state into an object containing props

export default connect(
  mapStateToProps,
  { incrementLikes }
)(NoteCounterContainer);

// connect is a higher-order function - it returns a function when you call it
// and then calling that function with a component returns a new (wrapped) component.
// connect hooks into Redux, pulls out the entire state, and passes it through the mapStateToProps function
// the object you return from mapStateToProps gets fed into your component as props */
