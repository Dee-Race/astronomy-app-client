const API_URL = process.env.REACT_APP_API_URL;

// Async Actions //

// GET NOTES - FETCH REQUEST

export const getNotes = () => {
  let data = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  };

  return dispatch => {
    fetch(`${API_URL}/notes`, data)
      .then(response => response.json())
      .then(notes =>
        dispatch({
          type: "GET_NOTES_SUCCESS",
          payload: notes
        })
      )
      .catch(error => console.log(error));
  };
};

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
