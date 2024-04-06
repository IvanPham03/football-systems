import { createSlice } from "@reduxjs/toolkit";
const uiSlice = createSlice({
  name: "ui",
  initialState: {
    view: "homeClient",
    modalFail: false,
    mode: "",
    login: false,
  },
  reducers: {
    setView(state, action) {
      console.log(action);
      state.view = action.payload;
    },
    setModalFail(state) {
      state.modalFail = !state.modalFail;
    },
  },
});

export const { setView, setModalFail } = uiSlice.actions;
export default uiSlice.reducer;
