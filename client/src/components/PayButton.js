import axios from "axios";
import {useSelector} from 'react-redux'
import {Paybutton} from '../styles/components.styled';


const PayButton = ({cartItems}) => {
  const user = useSelector((state)=>state.user)
const handleCheckout=()=>{
   axios.post("/api/v1/stripe/create-checkout-session",{
    cartItems, 
    userId:user.id,
   }).then((res)=>{
   window.location.href= res.data.url
  
   }).catch((err)=>console.log(err.message))
};
  return (
    <>
    <Paybutton onClick={()=>handleCheckout()}> CHECKOUT </Paybutton>
    </>
  )
}

export default PayButton