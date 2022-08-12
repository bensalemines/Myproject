import {useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {getEventList} from '../slices/eventSlice'
import { Card } from "../components/eventCard";
import {CardContainer,ImageF,Rem,Remarque,Back,Svg,CardIcon,ItemsNumber,Chariot}from "../styles/components.styled";
import {Link} from 'react-router-dom'

const JoinUs = () => {
  const fleche = "https://img.icons8.com/sf-black-filled/50/FFFFFF/double-left.png";
  const dispatch=useDispatch()
  const eventList =useSelector((state)=> state.event.eventList)
  useEffect(()=>{
  dispatch(getEventList())
  },[dispatch]
  )
  const {isAuth} = useSelector((state)=>state.user);
  const {cartTotalQuantity} = useSelector(state => state.cart)
  const Goleft = "https://img.icons8.com/glyph-neue/64/FD7E14/circled-right.png";
  return (
    <>
    <Link to='/Home'><Back><Svg src={fleche}/></Back></Link>
    {isAuth ? <Chariot>
      <CardIcon>
            <Link to='/ShoppingCard'><img src="https://img.icons8.com/material-outlined/35/000000/shopping-cart-loaded.png" alt=""/>
            </Link>
            <ItemsNumber>{cartTotalQuantity}</ItemsNumber>
            </CardIcon>
            </Chariot>
            :<></>}
    
    <CardContainer>
    {eventList.map((event)=>(<Card  key={event._id} event={event}/>))}<br/> <br/>
    </CardContainer>
    <Remarque>
     <Rem> IF YOU DONT'T HAVE CAMPING MATERIALS , YOU CAN RENT IT FROM HERE <Link to='/products'><ImageF src={Goleft}/></Link></Rem> 
    </Remarque>
    
    </>
  )
}

export default JoinUs