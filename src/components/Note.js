import React from "react";

const Note = props => {
  var notes = props.notes.map(note => {
    return (
      <div key={note.id}>
        <h3>{note.title}</h3>
        <p>{note.date}</p>
        <p>{note.content}</p>
      </div>
    );
  });
  return <div>{notes}</div>;
};

export default Note;
