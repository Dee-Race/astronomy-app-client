import { resetNoteForm } from "./noteForm";

const API_URL = process.env.REACT_APP_API_URL;

// Action Creators

const setNotes = notes => {
  return {
    type: "GET_NOTES_SUCCESS",
    notes
  };
};

const addNote = note => {
  return {
    type: "CREATE_NOTE_SUCCESS",
    note
  };
};

// Async Actions

export const getNotes = () => {
  return dispatch => {
    return fetch(`${API_URL}/notes`)
      .then(response => response.json())
      .then(notes => dispatch(setNotes(notes)))
      .catch(error => console.log(error));
  };
};

export const createNote = note => {
  return dispatch => {
    return fetch(`${API_URL}/notes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ note: note })
    })
      .then(response => response.json())
      .then(note => {
        dispatch(addNote(note));
        dispatch(resetNoteForm());
      })
      .catch(error => console.log(error));
  };
};
