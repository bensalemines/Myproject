import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import {toast} from 'react-toastify'
import { setHeaders } from "./api";


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
    export const productsDelete = createAsyncThunk('/products/productsDelete',async(values)=>{
        try{
         const res =await axios.put(`/api/v1/products/${values.product._id}`, values,setHeaders());
        //  console.log()
        return res.data
        }catch (error){
             console.log(error)
           toast.error(error.response?.data)
           
        }
        });
        export const productsEdit = createAsyncThunk('/products/productsEdit',async(_id)=>{
            try{
             const res =await axios.delete(`/api/v1/products/${_id}`)
             console.log(_id)
            return res.data
            }catch (error){
                 console.log(error)
               toast.error(error.response?.data)
               
            }
            });
            export const addNewProduct = createAsyncThunk('/products/addNewProduct',async(info,{rejectWithValue,dispatch})=>{
                try{
                    const formData = new FormData();
                    console.log(info.image)
                    formData.append('productImage',info.image)
                    formData.append('productName',info.name)
                    formData.append('productPrice',info.price)
                 await axios.post('/api/v1/products/addProduct', formData)
                 return dispatch(getProductList())
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
        
    },
    [productsDelete.pending]:(state) => {
        state.loading= true;
    },
    [productsDelete.fulfilled]:(state,action) => {
        toast.error("Product Deleted");
        state.errors=null;
        state.loading= false;
    },
    [productsDelete.rejected]:(state,action) => {
        state.loading= false;
        state.errors = action.payload
        
    },
    [productsEdit.pending]:(state) => {
        state.loading= true;
    },
    [productsEdit.fulfilled]:(state,action) => {
        toast.success("Product Edited");
        // const UpdatedProducts = state.productList.map((product)=>
        // product._id === action.payload._id? action.payload : productSlice
        // )
        // state.productList = UpdatedProducts;
        state.errors=null;
        state.loading= false;
    },
    [productsEdit.rejected]:(state,action) => {
        state.loading= false;
        state.errors = action.payload
        
    }
}
});
export default productSlice.reducer;