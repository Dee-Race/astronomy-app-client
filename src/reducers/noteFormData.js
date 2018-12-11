const initialState = {
  title: "",
  date: "",
  content: "",
  submitted_by: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "UPDATED_DATA":
      return action.noteFormData;

    case "RESET_NOTE_FORM":
      return initialState;

    default:
      return state;
  }
};
