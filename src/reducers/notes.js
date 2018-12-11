export default (state = [], action) => {
  switch (action.type) {
    case "GET_NOTES_SUCCESS":
      return action.notes;

    case "CREATE_NOTE_SUCCESS":
      return state.concast(action.note);

    default:
      return state;
  }
};

// reducers returns the state of what you want

// dispatch passes object to reducers - getting notesReducer and updating state
