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
  handleOnChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.createNote(this.state);
    this.setState({
      title: "",
      date: "",
      content: "",
      submitted_by: ""
    });
  }

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
