// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     value: [],
// };
// export const panierSlice = createSlice({
//     name: "panier",
//     initialState,
//     reducers: {
//         ajouter: (state, action) => {
//             state.value.push(action.payload);
//         },
//         remove: (state, action) => {
//             let booking;
//             for (let index = 0; index < state.value.length; index++) {
//                 if (action.payload.id == state.value[index].id) {
//                     booking = index;
//                 }
//             }
//             state.value.splice(booking, 1);
//         },
//         removeall: (state) => {
//             state.value.splice(0);
//         },
//     },
// });

// // Action creators are generated for each case reducer function
// export const { ajouter, remove, removeall } = panierSlice.actions;

// export default panierSlice.reducer;