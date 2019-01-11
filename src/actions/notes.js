const API_URL = process.env.REACT_APP_API_URL;

// Async Actions //

// GET NOTES - FETCH REQUEST

// The Fetch API is a promise-based mechanism and calling fetch() is equivalent to defining our own promise

// Below I am calling fetch() to get a list of NOTES from notes.json

// Running fetch() returns a response - a response also has a json() method, which returns a promise
// that will resolve with the content of the body processed and transformed in JSON

export const getNotes = () => {
  let data = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  };

  return dispatch => {
    fetch(`${API_URL}/notes`, data) // get notes
      .then(response => response.json()) // parse JSON
      .then(notes =>
        dispatch({
          type: "GET_NOTES_SUCCESS",
          payload: notes
        })
      )
      .catch(error => console.log(error));
  };
};

// Steps for the above API Fetch Call
// 1. Invoke getNotes()
// 2. After invoking getNotes(), we dispatch an action that we are loading data
// 3. Then we call the fetch() method, which runs, and returns a promise that we are waiting to resolve
// 4. When the promise resolves, we dispatch another action with a type and notes that gets sent to the reducer

// POST - CREATE NOTES

export const createNote = note => {
  let data = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ note })
  };

  return dispatch => {
    fetch(`${API_URL}/notes`, data)
      .then(response => response.json())
      .then(note =>
        dispatch({
          type: "CREATE_NOTE_SUCCESS",
          payload: note
        })
      )
      .catch(error => console.log(error));
  };
};

// DELETE NOTE

export const deleteNote = id => {
  let data = {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  };

  return dispatch => {
    fetch(`${API_URL}/notes/${id}`, data)
      .then(response => response.json())
      .then(note =>
        dispatch({
          type: "DELETE_NOTE_SUCCESS",
          payload: note
        })
      )
      .catch(error => console.log(error));
  };
};

// The dispatch method is how we send actions to the store.

// Do similar action as createnote with persistance to backend

export const incrementLikes = (note, id) => {
  let data = {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ note: note.id })
  };

  return dispatch => {
    fetch(`${API_URL}/notes/${id}`, data)
      .then(response => response.json())
      .then(note =>
        dispatch({
          type: "INCREMENT_LIKES",
          payload: note
        })
      )
      .catch(error => console.log(error));
  };
};
