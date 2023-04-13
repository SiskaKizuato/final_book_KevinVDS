import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: ""
}

export const searchSlice = createSlice({
    name: "searchVal",
    initialState,
    reducers: {
        setSearchVal: (state, action) => {
            state.value = action.payload;
        }
    }
})


export const { setSearchVal } = searchSlice.actions;
export default searchSlice.reducer;