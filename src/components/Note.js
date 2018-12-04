import React from "react";

const Note = ({ note }) => (
  <div className="astronomy-card" key={note.id}>
    <h3>{note.title}</h3>
    <p>{note.date}</p>
    <p>{note.content}</p>
  </div>
);

export default Note;
