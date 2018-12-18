import { resetNoteForm } from "./noteForm";

const API_URL = process.env.REACT_APP_API_URL;

// Async Actions //

export const getNotes = () => {
  return dispatch => {
    return fetch(`${API_URL}/notes`)
      .then(response => response.json())
      .then(notes => dispatch({ type: "GET_NOTES_SUCCESS", notes: notes }))
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
        dispatch({ type: "CREATE_NOTE_SUCCESS", payload: note });
        dispatch(resetNoteForm());
      })
      .catch(error => console.log(error));
  };
};

export const deleteNote = note => {
  return dispatch => {
    return fetch(`${API_URL}/notes/${note}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application.json"
      },
      body: JSON.stringify({ note: note })
    })
      .then(response => response.json())
      .then(note => {
        dispatch({ type: "DELETE_NOTE_SUCCESS", payload: note });
      })
      .catch(error => console.log(error));
  };
};
