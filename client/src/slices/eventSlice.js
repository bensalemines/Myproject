import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import {toast} from 'react-toastify'
import { setHeaders } from "./api";

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
    export const eventEdit = createAsyncThunk('/products/eventsDelete',async(values)=>{
        try{
         const res =await axios.delete(`/api/v1/events/${values.event._id}`, values,setHeaders());
        //  console.log()
        return res.data
        }catch (error){
             console.log(error)
           toast.error(error.response?.data)
           
        }
        });
        export const eventDelete = createAsyncThunk('/products/eventEdit',async(_id)=>{
            try{
             const res =await axios.delete(`/api/v1/events/${_id}`)
             console.log(_id)
            return res.data
            }catch (error){
                 console.log(error)
               toast.error(error.response?.data)
               
            }
            });
            export const addNewEvent = createAsyncThunk('/products/addNewProduct',async(info,{rejectWithValue,dispatch})=>{
                try{
                    const formData = new FormData();
                    console.log(info.image)
                    formData.append('event-image',info.image)
                    formData.append('eventPrice',info.price)
                    formData.append('eventName',info.name)
                    formData.append('eventDate',info.date)
                 await axios.post('/api/v1/events/addEvent', formData)
                 return dispatch(getEventList())
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
        
    },
    [eventDelete.pending]:(state) => {
        state.loading= true;
    },
    [eventDelete.fulfilled]:(state,action) => {
        toast.error("event Deleted");
        state.errors=null;
        state.loading= false;
    },
    [eventDelete.rejected]:(state,action) => {
        state.loading= false;
        state.errors = action.payload
        
    },
}
});
export default eventSlice.reducer;