import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptsearch: false,
    movieResults: null,
    movieNames: null,
  },
  reducers: {
    toggleGptsearchView: (state, action) => {
      state.showGptsearch = !state.showGptsearch;
    },
    addGptMovieResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;

      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
  },
});

export const { toggleGptsearchView, addGptMovieResult } = gptSlice.actions;

export default gptSlice.reducer;
