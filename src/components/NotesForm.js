import React from "react";

const NotesForm = () => {
  const submit = event => {
    event.preventDefault();
    date.value = "";
    title.value = "";
    content.value = "";
  };

  return (
    <form onSubmit={submit}>
      <input type="text" placeholder="Date..." />
      <input type="text" placeholder="Title..." />
      <input type="text" placeholder="Content..." />
      <button>Add AstroNote</button>
    </form>
  );
};

export default NotesForm;
