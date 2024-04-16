import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./slices/uiSlice";
import sessionReducer  from './slices/sessionSlice'
import uiAdminReducer from './slices/uiAdminSlice'
import modalEditTeamReducer from './slices/modalEditTeamSlice'
import manageTournamentReducer from "./slices/manageTournament";
const store = configureStore({
  reducer: {
    ui: uiReducer,
    session: sessionReducer,
    uiAdmin: uiAdminReducer,
    modalEditTeam: modalEditTeamReducer,
    manageTournament: manageTournamentReducer
  },
});

export default store

