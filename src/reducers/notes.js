const initialState = {
  current: {},
  notes: []
};

export default function notesReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_NOTES_SUCCESS":
      return { ...state, notes: action.payload };

    case "CREATE_NOTE_SUCCESS":
      return { ...state, notes: [...state.notes, action.payload] };

    case "DELETE_NOTE_SUCCESS":
      return {
        ...state,
        notes: state.notes.filter(note => note.id !== action.payload.id)
      };
    case "INCREMENT_LIKES":
      const updatedState = {
        ...state,
        notes: state.notes.map(note => {
          if (note.id === action.payload.id) {
            return { ...note, likes: action.payload.likes };
          } else {
            return note;
          }
        })
      };
      return updatedState;

    default:
      return state;
  }
}

// using spread operator to return state

// reducers returns the state of what you want

// dispatch passes object to reducers - getting notesReducer and updating state
