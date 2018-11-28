import React from "react";

const NotesForm = () => {
  return (
    <div className="note-form">
      <form>
        <input type="text" name="date" placeholder="Date..." />
        <input type="text" name="title" placeholder="Title..." />
        <input type="text" name="content" placeholder="Content..." />
        <button>Add AstroNote</button>
      </form>
    </div>
  );
};

export default NotesForm;
