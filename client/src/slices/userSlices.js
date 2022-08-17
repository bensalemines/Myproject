import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';
import {toast} from 'react-toastify';

//Register thunk function
export const registerNewUser = createAsyncThunk('/user/registerNewUser',async(input,{rejectWithValue})=>{
try{
 const res =await axios.post('/api/v1/users/register',input)
return res.data
}catch (error){
     console.log(error)
    return rejectWithValue(
        error.response.data.msg ?  error.response.data.msg :  error.response.data.errors
    )
}
});

//Login thunk function
export const loginUser = createAsyncThunk('/user/loginUser',async(input,{rejectWithValue})=>{
    try{
     const res =await axios.post('/api/v1/users/login',input)
    return res.data
    }catch (error){
         console.log(error)
        return rejectWithValue(
            error.response.data.msg ?  error.response.data.msg :  error.response.data.errors
        )
    }
    })

    //getUserData thunk function
export const getUserData = createAsyncThunk('/user/getUserData',async(input,{rejectWithValue})=>{
    try{
     const res =await axios.get('/api/v1/users/',{headers:{token:localStorage.getItem('token')}})
    return res.data
    }catch (error){
         console.log(error)
        return rejectWithValue(
            error.response.data.msg ?  error.response.data.msg :  error.response.data.errors
        )
    }
    })
    //DELETE USER
    export const userDelete = createAsyncThunk('/users/userDelete',async(_id)=>{
        try{
         const res =await axios.delete(`/api/v1/users/${_id}`);
         console.log(_id)
        return res.data
        }catch (error){
          
           toast.error(error.response?.data)
           
        }
        });
    export const getUserList = createAsyncThunk('/users/getUserList',async(info,{rejectWithValue})=>{
        try{
         const res =await axios.get('/api/v1/users/getUserList')
        return res.data
        }catch (error){
             console.log(error)
            return rejectWithValue(
                error.response.data.msg ?  error.response.data.msg :  error.response.data.errors
            )
        }
        });

const userSlice = createSlice({
    name:'user',
    initialState:{
        userInfo:{},
        userList:[],
        isAuth: Boolean(localStorage.getItem("isAuthL")) || null,
        token: localStorage.getItem("token") || null,
        errors:null
    },

    //LOGOUT REDUCER
    reducers:{
        logoutUser:(state)=>{
            localStorage.clear();
            state.token=null;
            state.isAuth=false;
            state.userInfo={};
            state.errors=null;
        }
    },
    extraReducers:{
        //REGISTER REDUCERS
            [registerNewUser.fulfilled]:(state,action) => {
                state.token= action.payload.token;
                state.isAuth=true;
                localStorage.setItem('token',action.payload.token);
                localStorage.setItem('isAuth',true);
                state.userInfo=action.payload.userInfo;
            },
            [registerNewUser.rejected]:(state,action) => {
                state.errors = action.payload;
            },
            //LOGIN REDUCERS
            [loginUser.fulfilled]:(state,action) => {
                state.token= action.payload.token;
                state.isAuth=true;
                localStorage.setItem('token',action.payload.token);
                localStorage.setItem('isAuthL',true);
                state.userInfo=action.payload.userInfo;
            },
            [loginUser.rejected]:(state,action) => {
                state.errors = action.payload;
            },

            //GET USER DATA REDUCERS
            [getUserData.fulfilled]:(state,action) => {
                state.userInfo=action.payload;
                state.errors = null;
            },
            [getUserData.rejected]:(state,action) => {
                state.errors = action.payload;
        },
            //GET USER DATA REDUCERS
            [getUserList.fulfilled]:(state,action) => {
                state.userList=action.payload;
                state.errors = null;
            },
            [getUserList.rejected]:(state,action) => {
                state.errors = action.payload;
        }
    },
    })
export default userSlice.reducer;
export const {logoutUser} = userSlice.actions