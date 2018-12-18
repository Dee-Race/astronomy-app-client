const initialState = {
  title: "",
  date: "",
  content: "",
  submitted_by: ""
};

export default function NoteFormReducer(
  state = { initialState, noteFormData: [] },
  action
) {
  switch (action.type) {
    case "UPDATED_NOTEFORM_DATA":
      const noteFormData = action.payload;
      return {
        ...state,
        noteFormData: [...state.noteFormData, action.payload]
      };

    default:
      return state;
  }
}
