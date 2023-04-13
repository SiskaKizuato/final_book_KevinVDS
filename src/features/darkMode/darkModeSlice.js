import { createSlice } from "@reduxjs/toolkit";

export const darkModeSlice = createSlice({
    name: "darkMode",
    initialState: {
        value: false
    },
    reducers: {
        switchDarkMode: (state) => {
            state.value = !state.value
        }
    }
})

export const { switchDarkMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;