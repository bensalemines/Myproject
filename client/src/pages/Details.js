import {useEffect} from 'react';
import { useLocation } from 'react-router';
import {useSelector,useDispatch} from 'react-redux'
import { getEventList } from '../slices/eventSlice';
import {Link} from 'react-router-dom';
import {PageContainer,TextTitle,CardText,CardIcon,ItemsNumber,Chariot,Svg,Back,Price,CardStatWrapper,CardStats,LinkText,EventDescription,TextDate,EventActivities,Subtitle} from '../styles/components.styled'

const Details = () => {
  const fleche = "https://img.icons8.com/sf-black-filled/64/FFFFFF/double-left.png";
  const location = useLocation()
  const eventId = location.state;
  const dispatch=useDispatch()
  const eventList =useSelector((state)=> state.event.eventList)
  useEffect(()=>{
  dispatch(getEventList())
  },[dispatch]);
  console.log(eventList)
  const event = eventList?.find((el)=> el._id===eventId)
  console.log(event)
  const {isAuth} = useSelector((state)=>state.user);
  const {cartTotalQuantity} = useSelector(state => state.cart)
  return (
    <>
    <Link to='/JoinUs'> <Back> <Svg src={fleche}/></Back></Link>
    {isAuth ? <Chariot>
      <CardIcon>
            <Link to='/ShoppingCard'><img src="https://img.icons8.com/material-outlined/35/000000/shopping-cart-loaded.png" alt=""/>
            </Link>
            <ItemsNumber>{cartTotalQuantity}</ItemsNumber>
            </CardIcon>
            </Chariot>
            :<></>}
    <PageContainer>
    <CardText>
       <TextTitle>{event.eventName}</TextTitle>
            <TextDate>{event.eventDate} </TextDate>
            <Subtitle>Description :</Subtitle>
            <EventDescription>{event.detailedDescription}</EventDescription>
            <Subtitle>Programme :</Subtitle>
            <EventActivities>{event.detailedActivities}</EventActivities>
            <Subtitle>Price :</Subtitle>
            <Price>{event.eventPrice} </Price>
            </CardText>  
            <CardStatWrapper>
          <CardStats>
          {!isAuth ?
            <Link to='/Login'><LinkText >Register & Booking</LinkText></Link>:
            <Link to='/ShoppingCard'><LinkText>BOOKING</LinkText></Link>
          }
          </CardStats>
          <CardStats>
           <Link to='/Home'>
          <LinkText>BACK HOME</LinkText>
          </Link>
          </CardStats>
        </CardStatWrapper>
    </PageContainer>
    </>

    
  )
}

export default Details