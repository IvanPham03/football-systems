import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./slices/uiSlice";
import sessionReducer  from './slices/sessionSlice'
import uiAdminReducer from './slices/uiAdminSlice'
const store = configureStore({
  reducer: {
    ui: uiReducer,
    session: sessionReducer,
    uiAdmin: uiAdminReducer
  },
});

export default store

