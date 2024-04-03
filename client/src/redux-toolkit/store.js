import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./slices/uiSlice";
import sessionReducer  from './slices/sessionSlice'
const store = configureStore({
  reducer: {
    ui: uiReducer,
    session: sessionReducer
  },
});

export default store

