import { createSlice } from "@reduxjs/toolkit";
const uiSlice = createSlice({
  name: "ui",
  initialState: {
    view: "homeClient",
    modalFail: false,
    nodalEditTeam: false,
    successModal: false,
    spinner: false,
    data: [],
    login: false,
  },
  reducers: {
    setView(state, action) {
      state.view = action.payload;
    },
    removeModalFail(state) {
      state.modalFail = false;
      state.data = "";
    },
    addModalFail(state, action) {
      state.modalFail = true;
      state.data = action.payload;
    },
    addSpinner(state) {
      state.spinner = true;
    },
    removeSpinner(state) {
      state.spinner = false;
    },
    addSuccessModal(state) {
      state.successModal = true;
    },
    removeSuccessModal(state) {
      state.successModal = false;
    },
  },
});

export const { setView, addModalFail, removeModalFail, addSpinner,removeSpinner, addSuccessModal, removeSuccessModal  } = uiSlice.actions;
export default uiSlice.reducer;
