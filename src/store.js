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
