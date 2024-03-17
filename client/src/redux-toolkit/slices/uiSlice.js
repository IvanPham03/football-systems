import { createSlice } from '@reduxjs/toolkit';
const uiSlice = createSlice({
    name: 'ui', 
    initialState: {
        view: "homeClient", 
        modal: false,
        mode: "",
        login: false
    },
    reducers: {
        setView(state, action) {
            console.log(action);
            state.view = action.payload
        },
        setModal (state, action) {
            state.modal = action.payload
        }
    }
})

export const {setView, setModal} = uiSlice.actions
export default uiSlice.reducer