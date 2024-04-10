import { createSlice } from "@reduxjs/toolkit";

const uiAdmin = createSlice({
  name: "uiAdmin",
  initialState: {
    view: "dashboard",
  },
  reducers: {
    setView(state, action) {
      state.view = action.payload;
    },
  },
});

export const { setView } = uiAdmin.actions;
export default uiAdmin.reducer;
