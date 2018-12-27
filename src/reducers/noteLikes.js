initialState = {
  likesCount: 0,
  likes: []
};

export default function NoteLikesReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT_LIKES":
      return {
        likesCount: state.likesCount + 1
      };
    default:
      return state;
  }
}
