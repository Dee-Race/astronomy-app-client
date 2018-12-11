import React, { Component } from "react";
import { connect } from "react-redux";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";

class NotesForm extends Component {
  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <form>
              <div className="form-group">
                <h3>Create an AstroNote</h3>
                <MDBInput label="Title" size="lg" />
                <MDBInput label="Date" size="lg" />
                <MDBInput label="Content" size="lg" />
                <MDBInput label="Submitted By: " size="sm" />
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
    noteFormData: state.surfboardFormData
  };
};

export default connect(mapStateToProps)(NotesForm);

/* <form>
<input type="text" name="date" placeholder="Date..." />
<input type="text" name="title" placeholder="Title..." />
<input type="text" name="content" placeholder="Content..." />
<button>Add AstroNote</button>
</form> */
