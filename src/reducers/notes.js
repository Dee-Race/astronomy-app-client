const initialState = {
  current: {},
  all: []
};

export default function notesReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_NOTES_SUCCESS":
      return { ...state, all: action.payload };

    case "CREATE_NOTE_SUCCESS":
      return { ...state, all: [...state.all, action.payload] };

    case "DELETE_NOTE_SUCCESS":
      return {
        ...state,
        all: state.all.filter(note => note.id !== action.payload.id)
      };

    default:
      return state;
  }
}

// reducers returns the state of what you want

// dispatch passes object to reducers - getting notesReducer and updating state
