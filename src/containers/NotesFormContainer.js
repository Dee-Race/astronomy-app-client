import React, { Component } from "react";
import { connect } from "react-redux";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";
//import { updateNoteFormData } from "../actions/noteForm";
import { createNote } from "../actions/notes";
import "./Notes.css";

class NotesFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      date: "",
      content: "",
      submitted_by: ""
    };
  }

  // In React, it is a good idea to set up controlled forms
  // A controlled form is a form that derives its input values from state

  handleOnChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  // If we change state values, React will re-render and our input's will display the new state
  // We need setState in order to initiate a state change
  // This form displays whatever hanges a user makes - for this we need an event listener - onChange
  // onChange fires every time the value of an input changes.

  // We are invoking an anonymous function that accepts event as its argument(provided by the event listener)
  // and then calls this.handleOnChange(event)

  // The event contains data about the target, which is whatever the event was triggered on
  // That target, being an input, has a value attribute. This attribute is equal to whatever has been entered into input
  // event.target.value is whatever content is present when the event fired
  // We then are updating state based on the event.target.value
  // This in turn causes a re-render, and the cycle completes
  // The new state values we just set are used to set the value attributes of the forms inputs

  // From the user's perspective, the form behaves exactly how we'd expect, displaying the text that is typed

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.createNote(this.state);
    this.setState({
      title: "",
      date: "",
      content: "",
      submitted_by: ""
    });
  };

  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol>
            <form
              onSubmit={event => {
                this.handleOnSubmit(event);
              }}
            >
              <div className="form-group">
                <h3>Create an AstroNote</h3>
                <MDBInput
                  type="text"
                  onChange={event => {
                    this.handleOnChange(event);
                  }}
                  name="title"
                  value={this.state.title}
                  label="Title"
                  size="lg"
                />
                <MDBInput
                  type="text"
                  onChange={event => {
                    this.handleOnChange(event);
                  }}
                  name="date"
                  value={this.state.date}
                  label="Date"
                  size="lg"
                />
                <MDBInput
                  type="text"
                  onChange={event => {
                    this.handleOnChange(event);
                  }}
                  name="content"
                  value={this.state.content}
                  label="Content"
                  size="lg"
                />
                <MDBInput
                  type="text"
                  onChange={event => {
                    this.handleOnChange(event);
                  }}
                  name="submitted_by"
                  value={this.state.submitted_by}
                  label="Submitted By: "
                  size="sm"
                />
              </div>
              <MDBBtn color="white" type="submit">
                Submit
              </MDBBtn>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    noteFormData: state.noteFormData
  };
};

export default connect(
  mapStateToProps,
  { createNote }
)(NotesFormContainer);

/* <form>
<input type="text" name="date" placeholder="Date..." />
<input type="text" name="title" placeholder="Title..." />
<input type="text" name="content" placeholder="Content..." />
<button>Add AstroNote</button>
</form> */
