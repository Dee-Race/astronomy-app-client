const initialState = {
  current: {},
  data: []
};

export default function astronomyReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_ASTRONOMY_DATA":
      return { ...state, data: action.payload };

    default:
      return state;
  }
}
