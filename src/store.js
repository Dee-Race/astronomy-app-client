import { createStore, applyMiddleware, combineReducers, compose } from "redux";
// applyMiddleware makes asynchronus calls

import thunk from "redux-thunk";

const notesReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_NOTES":
      return action.notes;

    default:
      return state;
  }
};

// reducers returns the state of what you want

const reducers = combineReducers({
  notes: notes
});

const middleware = [thunk];

export default createStore(
  reducers,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : a => a
  )
);
