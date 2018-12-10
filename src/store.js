import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import notes from "./reducers/notes";
import noteFormData from "./reducers/noteFormData";
// applyMiddleware makes asynchronus calls

import thunk from "redux-thunk";

// this.props.store.dispatch - passes the object to the reducers,
// then updates state from reducer function - notes reducer

const reducers = combineReducers({
  notes,
  noteFormData
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
