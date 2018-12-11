import React, { Component } from "react";
import { connect } from "react-redux";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";
import { updateNoteFormData } from "../actions/noteForm";

class NotesForm extends Component {
  handleOnChange = event => {
    const { name, value } = event.target;
    const currentNoteFormData = Object.assign({}, this.props.noteFormData, {
      [name]: value
    });
    this.props.updateNoteFormData(currentNoteFormData);
  };

  render() {
    const { title, date, content, submitted_by } = this.props.noteFormData;

    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <form>
              <div className="form-group">
                <h3>Create an AstroNote</h3>
                <MDBInput
                  type="text"
                  onChange={this.handleOnChange}
                  name="title"
                  value={title}
                  label="Title"
                  size="lg"
                />
                <MDBInput
                  type="text"
                  onChange={this.handleOnChange}
                  name="date"
                  value={date}
                  label="Date"
                  size="lg"
                />
                <MDBInput
                  type="text"
                  onChange={this.handleOnChange}
                  name="content"
                  value={content}
                  label="Content"
                  size="lg"
                />
                <MDBInput
                  type="text"
                  onChange={this.handleOnChange}
                  name="submitted_by"
                  value={submitted_by}
                  label="Submitted By: "
                  size="sm"
                />
              </div>
              <MDBBtn color="indigo" type="submit">
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
  { updateNoteFormData }
)(NotesForm);

/* <form>
<input type="text" name="date" placeholder="Date..." />
<input type="text" name="title" placeholder="Title..." />
<input type="text" name="content" placeholder="Content..." />
<button>Add AstroNote</button>
</form> */