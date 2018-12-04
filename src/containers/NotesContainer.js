import React, { Component } from "react";
import Note from "../components/Note";
import NotesForm from "../components/NotesForm";

class NotesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:3001/api/v1/notes.json").then(response => {
      console.log(response);
      this.setState({ notes: response.data });
    });
  }

  render() {
    return <div className="notes-container">Notes</div>;
  }
}

export default NotesContainer;
