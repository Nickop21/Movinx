import { createSlice } from "@reduxjs/toolkit";

 const homeSlice = createSlice({
    name: "home",
    initialState: {
        url: {},
        genres: {}
    },
    reducers: {
        getApiConfigration: (state, action) => {  //property:function
            state.url = action.payload;
        },
        getGenres: (state, action) => {
            state.genres = action.payload
        },
    }
});

export const { getApiConfigration, getGenres } = homeSlice.actions

export default homeSlice.reducer