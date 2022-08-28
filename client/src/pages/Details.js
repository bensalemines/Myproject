import {useEffect} from 'react';
import { useLocation } from 'react-router';
import {useSelector,useDispatch} from 'react-redux'
import { getEventList } from '../slices/eventSlice';
import {Link,useNavigate} from 'react-router-dom';
import {PageContainer,TextTitle,CardText,CardStatWrapper,Price,CardStats,LinkText,EventDescription,TextDate,EventActivities,Subtitle} from '../styles/components.styled'
import { addToCard } from '../slices/cardSlice';
import Navbar from '../components/Navbar';

const Details = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const eventId = location.state;
  const dispatch=useDispatch()
  const eventList =useSelector((state)=> state.event.eventList)
  const handleAddToCard=(event)=>{
    dispatch(addToCard(event));
    navigate("/ShoppingCard")
    }
  useEffect(()=>{
  dispatch(getEventList())
  },[dispatch]);
  console.log(eventList)
  const event = eventList?.find((el)=> el._id===eventId)
  console.log(event)
  const {isAuth} = useSelector((state)=>state.user);
  return (
    <div >
    <Navbar/>
    {/* <Link to='/JoinUs'> <Back> <Svg src={fleche}/></Back></Link>
    {isAuth ? <Chariot>
      <CardIcon>
            <Link to='/ShoppingCard'><img src="https://img.icons8.com/material-outlined/35/000000/shopping-cart-loaded.png" alt=""/>
            </Link>
            <ItemsNumber>{cartTotalQuantity}</ItemsNumber>
            </CardIcon>
            </Chariot>
            :<></>} */}
    <PageContainer style={{backgroundColor:'white'}} >
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
            <Link to='/ShoppingCard'><LinkText onClick = {()=>handleAddToCard(event)}>Booking</LinkText></Link>
          }
          </CardStats>
          <CardStats>
           <Link to='/Home'>
          <LinkText>Back Home</LinkText>
          </Link>
          </CardStats>
        </CardStatWrapper>
    </PageContainer>
    </div>

    
  )
}

export default Details