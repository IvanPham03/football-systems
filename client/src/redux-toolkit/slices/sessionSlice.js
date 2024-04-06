import { createSlice } from "@reduxjs/toolkit";

const sessionSlice = createSlice({
  name: "session",
  initialState: {
    isAuthenticated: false,
    token: null,
    name: null,
    role: "",
  },
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.token = action.payload.token;
      state.name = action.payload.name;
      state.admin = action.payload.admin;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.token = null;
      state.name = null;
      state.admin = "";
    },
  },
});

export const { login, logout } = sessionSlice.actions;
export default sessionSlice.reducer;
