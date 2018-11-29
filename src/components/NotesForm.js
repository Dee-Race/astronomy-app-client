import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput } from "mdbreact";

const NotesForm = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <div className="form-group">
            <h3>Create an AstroNote</h3>
            <MDBInput label="Title" size="lg" />
            <MDBInput label="Date" />
            <MDBInput label="Content" size="lg" />
          </div>
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
