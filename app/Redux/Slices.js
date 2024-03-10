import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export let getData=createAsyncThunk('data',async()=>{
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const response = await fetch('https://moviesverse1.p.rapidapi.com/get-trending-trailers', {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '59ce7549f1msh1bf76645d09c620p17b35fjsnc0704afee4f9',
		'X-RapidAPI-Host': 'moviesverse1.p.rapidapi.com'
      }
    });
    const {trailers} = await response.json();
    console.log(trailers);
    return trailers
 })

 export const Slices=createSlice({
    name:'data',
    initialState:{
        data:[],
    }
    ,
    extraReducers:(builder)=>{
        builder.addCase('fulfilled', (state,action)=>{
            state.data=action.payload
        }
    )}
 })
 