import {useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {getEventList} from '../slices/eventSlice'
import { Card } from "../components/eventCard";
import {CardContainer,ImageF,Rem,Remarque}from "../styles/components.styled";
import {Link} from 'react-router-dom'
import Navbar from '../components/Navbar';

const JoinUs = () => {
  const dispatch=useDispatch()
  const eventList =useSelector((state)=> state.event.eventList)
  useEffect(()=>{
  dispatch(getEventList())
  },[dispatch]
  )
  const Goleft = "https://img.icons8.com/ios-glyphs/64/FAB005/circled-chevron-right.png";
  return (
    <>
    <Navbar/>
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