import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const getProductList = createAsyncThunk('/products/getProductList',async(info,{rejectWithValue})=>{
    try{
     const res =await axios.get('/api/v1/products/')
    return res.data
    }catch (error){
         console.log(error)
        return rejectWithValue(
            error.response.data.msg ?  error.response.data.msg :  error.response.data.errors
        )
    }
    });
const productSlice =createSlice({ 
    name:'product',
    initialState:{
    productList:[],
    loading:false,
    errors:null,
},
extraReducers:{
    [getProductList.pending]:(state) => {
        state.loading= true;
    },
    [getProductList.fulfilled]:(state,action) => {
        state.loading= false;
        state.productList = action.payload
        state.errors=null
    },
    [getProductList.rejected]:(state,action) => {
        state.loading= false;
        state.errors = action.payload
        
    }
}
});
export default productSlice.reducer;