import React from "react";

const NotesForm = () => {
  return (
    <form>
      <input type="text" name="date" placeholder="Date..." />
      <input type="text" name="title" placeholder="Title..." />
      <input type="text" name="content" placeholder="Content..." />
      <button>Add AstroNote</button>
    </form>
  );
};

export default NotesForm;
