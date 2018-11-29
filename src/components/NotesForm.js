import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";

const NotesForm = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form>
            <div className="form-group">
              <h3>Create an AstroNote</h3>
              <MDBInput label="Title" type="title" size="lg" />
              <MDBInput label="Date" type="date" size="lg" />
              <MDBInput label="Content" type="content" size="lg" />
              <MDBInput label="Submitted By: " type="submitted_by" size="sm" />
            </div>
            <MDBBtn color="indigo" type="submit">
              Submit
            </MDBBtn>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default NotesForm;

/* <form>
<input type="text" name="date" placeholder="Date..." />
<input type="text" name="title" placeholder="Title..." />
<input type="text" name="content" placeholder="Content..." />
<button>Add AstroNote</button>
</form> */
