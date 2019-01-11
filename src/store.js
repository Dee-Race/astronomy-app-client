import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";

import notesReducer from "./reducers/notes";
import astronomyReducer from "./reducers/astronomy";
// import noteLikesReducer from "./reducers/noteLikes";

// applyMiddleware makes asynchronus calls, extends Redux with custom functionality by wrapping the store's dispatch method

// this.props.store.dispatch - passes the object to the reducers,
// then updates state from reducer function - notes reducer

const reducers = combineReducers({
  notes: notesReducer,
  astronomy: astronomyReducer
  //likesCount: noteLikesReducer
});

// Combines multiple reducers into a single reducing function with each reducer as a key/value pait
// Then can be passed to createStore()

const middleware = [thunk];

// Redux thunk allows us to return a function inside of our action creator

// With Redux you have ONE big STORE which is a JS object
// Never mutating the data in the store, only creating new versions of this object
// You have a full history of where the store started when the app initially started and every change along the way

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
