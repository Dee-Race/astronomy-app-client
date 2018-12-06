import React from "react";
import NoteCard from "./NoteCard";
import "../containers/Notes.css";

const Notes = props => (
  <div className="astronomy-note-container">
    <h1>Astro Notes</h1>
    {props.notes.map(note => (
      <NoteCard key={note.id} note={note} />
    ))}
  </div>
);

export default Notes;