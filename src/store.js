import { createStore, applyMiddleware, combineReducers } from "redux";

import thunk from "redux-thunk";

const notesReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_NOTE":
      return action.notes;

    default:
      return state;
  }
};

const reducers = combineReducers({
  notes: notes
});

const middleware = [thunk];

export default createStore(
  reducers,
  applyMiddleware(...middleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
