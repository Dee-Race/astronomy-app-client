initialState = {
  likesCount: 0,
  likes: []
};

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
