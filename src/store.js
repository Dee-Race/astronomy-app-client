import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";

import notesReducer from "./reducers/notes";
import astronomyReducer from "./reducers/astronomy";
import noteLikesReducer from "./reducers/noteLikes";

// applyMiddleware makes asynchronus calls

// this.props.store.dispatch - passes the object to the reducers,
// then updates state from reducer function - notes reducer

const reducers = combineReducers({
  notes: notesReducer,
  astronomy: astronomyReducer,
  likesCount: noteLikesReducer
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

// The store is responsible for both maintaining the state and accepting actions from the view
// Only the store has access to the reducer
// All of the application's data is in a single data structure called the state which is held in the store.

// The app reads the state from the store
// State is never mutated directly outside the store
// The View's display the actions that describe what happened
// Use Dispatch to send the actions to the store
// A new state is created by combining old state and the action by a function called the reducer
