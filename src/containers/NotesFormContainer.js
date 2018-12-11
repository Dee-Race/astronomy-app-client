import React, { Component } from "react";
import { connect } from "react-redux";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";

class NotesForm extends Component {
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
                  name="title"
                  value={title}
                  label="Title"
                  size="lg"
                />
                <MDBInput
                  type="text"
                  name="date"
                  value={date}
                  label="Date"
                  size="lg"
                />
                <MDBInput
                  type="text"
                  name="content"
                  value={content}
                  label="Content"
                  size="lg"
                />
                <MDBInput
                  type="text"
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

export default connect(mapStateToProps)(NotesForm);

/* <form>
<input type="text" name="date" placeholder="Date..." />
<input type="text" name="title" placeholder="Title..." />
<input type="text" name="content" placeholder="Content..." />
<button>Add AstroNote</button>
</form> */
