export default function NoteReducer(state = { notes: [] }, action) {
  switch (action.type) {
    case "GET_NOTES_SUCCESS":
      return action.notes;

    case "CREATE_NOTE_SUCCESS":
      return state.concat(action.payload);

    case "DELETE_NOTE_SUCCESS":
      return Object.assign([{}], {
        ...state.filter(note => note.id !== action.payload.id)
      });

    default:
      return state;
  }
}

// reducers returns the state of what you want

// dispatch passes object to reducers - getting notesReducer and updating state
