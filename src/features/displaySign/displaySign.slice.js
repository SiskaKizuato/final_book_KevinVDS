import { createSlice } from "@reduxjs/toolkit";

export const displaySignSlice = createSlice({
    name: "displaySign",
    initialState: {
        value: 0
    },
    reducers: {
        displayChoice: (state) => {
            state.value = 0
        },
        displayUp: (state) => {
            state.value = 1
        },
        displayIn: (state) => {
            state.value = 2
        }
    }
})

export const { displayChoice, displayUp, displayIn } = displaySignSlice.actions;
export default displaySignSlice.reducer;

