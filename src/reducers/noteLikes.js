const initialState = {
  likesCount: 0
};

// never mutating the original state

// always returning state, never changing state

export default function noteLikesReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT_LIKES":
      return {
        likesCount: state.likesCount + 1
      };
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
