import { createSlice } from "@reduxjs/toolkit";


const gptSlice = createSlice({
    name:'gpt',
    initialState:{
         showGptsearch:false
    },
    reducers:{
        toggleGptsearchView:(state,action)=>{
            state.showGptsearch=!state.showGptsearch;
        }
    }
})

export const {toggleGptsearchView}=gptSlice.actions;

export default gptSlice.reducer;