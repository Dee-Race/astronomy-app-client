export default (
  state = {
    title: "",
    date: "",
    content: "",
    submitted_by: ""
  },
  action
) => {
  switch (action.type) {
    case "UPDATED_DATA":
      return action.noteFormData;

    default:
      return state;
  }
};
