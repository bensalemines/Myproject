import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const getEventList = createAsyncThunk('/events/getEventList',async(info,{rejectWithValue})=>{
    try{
     const res =await axios.get('/api/v1/events/')
    return res.data
    }catch (error){
         console.log(error)
        return rejectWithValue(
            error.response.data.msg ?  error.response.data.msg :  error.response.data.errors
        )
    }
    });
const eventSlice =createSlice({ 
    name:'event',
    initialState:{
    eventList:[],
    loading:false,
    errors:null,
},
extraReducers:{
    [getEventList.pending]:(state) => {
        state.loading= true;
    },
    [getEventList.fulfilled]:(state,action) => {
        state.loading= false;
        state.eventList = action.payload
        state.errors=null
    },
    [getEventList.rejected]:(state,action) => {
        state.loading= false;
        state.errors = action.payload
        
    }
}
});
export default eventSlice.reducer;