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

// Reducer function accepts two arugments, state and action - and returns the
// next version of the state. When the reducer recieves the INCREMENT_LIKES action, it
// should return state + 1

// An ACTION is a JavaScript object that describes a change that we want to make.
// type property: "INCREMENT_LIKES", and the value needs to be a string
// always returns state as the fallback case

// action -> reducer -> new state
// reducer function must be "pure" - cannot modify its arguments

// using spread operator to return state

// reducers returns the state of what you want

// dispatch passes object to reducers - getting notesReducer and updating state
