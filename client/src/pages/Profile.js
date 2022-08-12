import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import  { getUserData } from "../slices/userSlices";
import Navbar from '../components/Navbar'

const Profile = () => {
  const dispatch=useDispatch()
  useEffect(()=>{
		dispatch(getUserData())
	  },[dispatch])
  return (
    <div>
      <Navbar/>
    </div>
  )
}

export default Profile
