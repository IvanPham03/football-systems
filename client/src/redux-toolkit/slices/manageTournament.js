
import { createSlice } from "@reduxjs/toolkit";
const manageSlice = createSlice({
  name: "manageTournament",
  initialState: {
    view: "schedule",
  },
  reducers: {
    setView(state, action) {
      state.view = action.payload;
    }
    
  },
});

export const { setView } = manageSlice.actions;
export default manageSlice.reducer;
