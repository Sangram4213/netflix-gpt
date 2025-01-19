import { createSlice } from "@reduxjs/toolkit";
import { actions } from "react-table";


const movieSlice = createSlice({
    name:"movies",
    initialState:{
       nowPlayingMovies:null,
       trailerVideo:null,
       popularMovies:null,
       upcomingMovies:null
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo=action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies=action.payload;
        },
        addUpComingMovies:(state,action)=>{
            state.upcomingMovies=action.payload;
        }
    }
})

export const {addNowPlayingMovies,addTrailerVideo,addPopularMovies,addUpComingMovies} = movieSlice.actions;
export default movieSlice.reducer;