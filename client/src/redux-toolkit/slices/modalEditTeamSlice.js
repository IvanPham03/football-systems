import { createSlice } from "@reduxjs/toolkit";
const editTeamSlice = createSlice({
  name: "modalEditTeam",
  initialState: {
    modal: false,
    name: "",
    players: [],
    email: "",
    contact: "",
    phoneNumber: "",
    age: "",
    index: "",
    updateClick: false
  },
  reducers: {
    setModalEditTeam(state) {
      state.modal = !state.modal;
    },
    update(state, action) {
      state.name = action.payload.name;
      state.players = action.payload.players;
      state.contact = action.payload.contact;
      state.phoneNumber = action.payload.phoneNumber;
      state.email = action.payload.email;
      state.age = action.payload.age;
      state.index = action.payload.index;
    },
    setUpdate(state, action){
      state.updateClick = action.payload // nếu true thì thực hiện update
    }
  },
});

export const { setModalEditTeam, update, setUpdate } = editTeamSlice.actions;
export default editTeamSlice.reducer;
