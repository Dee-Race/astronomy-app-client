import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import notes from "./reducers/notes";
// applyMiddleware makes asynchronus calls

import thunk from "redux-thunk";

const reducers = combineReducers({
  notes
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
