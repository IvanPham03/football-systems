import { createSlice } from "@reduxjs/toolkit";

const sessionSlice = createSlice({
  name: "session",
  initialState: {
    isAuthenticated: false,
    token: null,
    name: null
  },
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.token = action.payload.token;
      state.name = action.payload.name
    },
    logout(state) {
      state.isAuthenticated = false;
      state.token = null;
      state.name = null;
    },
  },
});

export const { login, logout } = sessionSlice.actions;
export default sessionSlice.reducer;