import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';
export const registerNewUser = createAsyncThunk('/user/registerNewUser',async(input)=>{
try{
 const res =await axios.post('/api/v1/users/register',input)
return res.data
}catch (error){

}
})

const userSlice = createSlice({
    name:'user',
    initialState:{
        userInfo:{},
        isAuth: false,
        token:null,
        errors:null
    },
    // extraReducers:{
    //         [registerNewUser.fulfilled]:(state,action) => {
    //             state.token= action.payload.token;
    //             state.isAuth=true;
    //             state.userInfo=action.payload.userInfo;
    //             localStorage.setItem('token',action.payload.token);
    //             localStorage.setItem('isAuth',true)
    //         }
    //     }
    
})
export default userSlice.reducer;