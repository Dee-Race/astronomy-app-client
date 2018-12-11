import React from "react";

const NoteCard = ({ note }) => (
  <div key={note.id} className="astronomy-note-card">
    <h3>{note.title}</h3>
    <p>Date: {note.date}</p>
    <p>{note.content}</p>
    <p>Submitted By: {note.submitted_by}</p>
  </div>
);

export default NoteCard;
