import React from "react";

const Note = props => (
  <div className="astronomy-note-container">
    <h1>Astro Notes</h1>
    {props.notes.map(note => (
      <div key={note.id} className="astronomy-note-card">
        <h3>{note.title}</h3>
        <p>Date: {note.date}</p>
        <p>{note.content}</p>
      </div>
    ))}
  </div>
);

export default Note;
