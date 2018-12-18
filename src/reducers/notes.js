const initialState = {
  all: [],
  current: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "GET_NOTES_SUCCESS":
      return { ...state, current: action.notes };

    case "CREATE_NOTE_SUCCESS":
      return { ...state, all: [...state.all, action.note] };

    case "DELETE_NOTE":
      debugger;
      return {
        ...state,
        all: state.filter(note => note.id !== action.note.id)
      };

    default:
      return state;
  }
};

// reducers returns the state of what you want

// dispatch passes object to reducers - getting notesReducer and updating state
