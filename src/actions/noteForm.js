// Action Creators

export const updateNoteFormData = noteFormData => {
  return {
    type: "UPDATED_DATA",
    noteFormData
  };
};

export const resetNoteForm = () => {
  return {
    type: "RESET_NOTE_FORM"
  };
};
