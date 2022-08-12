import {CardWrapper,CardImage,CardStatWrapper,CardTextWrapper,CardTextDate,CardStats,LinkText,Separator,CardTextTitle,CardTextBody} from "../styles/components.styled";
  import Tilt from "react-parallax-tilt";
  import {Link,useNavigate} from 'react-router-dom';
  import {useSelector,useDispatch} from 'react-redux';
  import {  addToCard } from '../slices/cardSlice';
  export const Card = ({event}) => {
    const dispatch=useDispatch()
  const navigate = useNavigate()
  const handleAddToCard=(event)=>{
  dispatch(addToCard(event));
  navigate("/ShoppingCard")
  }
    const {isAuth} = useSelector((state)=>state.user)
    return (
      <Tilt >
        <CardWrapper>
        <CardImage background={event.eventImage} />
          <CardTextWrapper>
            <CardTextTitle>{event.eventName}</CardTextTitle>
            <CardTextDate>{event.eventDate} </CardTextDate><br/> <br/> <br/>
            <CardTextBody>
             {event.eventDescription} <br/> <br/> (ONLY FOR ADULTS) <br/> <br/>
             {event.eventActivities}
            </CardTextBody> <br/>
            <CardTextDate> {event.eventPrice}</CardTextDate>
          </CardTextWrapper>
          <CardStatWrapper>
          <CardStats>
          {!isAuth ?
            <Link to='/Login'><LinkText >BOOKING</LinkText></Link>:
            <Link to='/ShoppingCard'><LinkText onClick = {()=>handleAddToCard(event)}>BOOKING</LinkText></Link>
          }
          </CardStats>
          <CardStats>
            <Link to={`/Details/${event._id}` } state={event._id}>
          <LinkText>DETAILS</LinkText>
          </Link>
          </CardStats>
        </CardStatWrapper>
        </CardWrapper>
        <Separator/>
      </Tilt>
    );
  };