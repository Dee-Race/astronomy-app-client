import React from "react";

const NotesForm = () => {
  const handleSubmit = event => {
    event.preventDefault();
    date.value = "";
    title.value = "";
    content.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="date" placeholder="Date..." />
      <input type="text" name="title" placeholder="Title..." />
      <input type="text" name="content" placeholder="Content..." />
      <button>Add AstroNote</button>
    </form>
  );
};

export default NotesForm;
