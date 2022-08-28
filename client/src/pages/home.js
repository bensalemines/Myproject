import React from 'react'
// import videobg from '../assets/videobg.mov'
import {Landing,Quote,RightSide, JoinusButton,LeftSide,ImageHome,H,A} from '../styles/components.styled'
import {Link} from 'react-router-dom';
import Navbar from '../components/Navbar'
import Homeimage from '../assets/home2.jpg'
import '../styles/style.css'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Landing>
      {/* <Background src={videobg} autoPlay loop muted/> */}
      <LeftSide>
      <Quote>
        <H>Live an amazing camping experience</H> 
      <A>We are resilient and adaptable to ever-changing terrain. We bring positivity and gratitude, especially when things are hard. We know when to ask our friends for help. We are creative and resourceful.</A>
      </Quote>
      <Link to = '/JoinUs'><JoinusButton> JOIN US </JoinusButton></Link>
      </LeftSide>
      <RightSide>
      <ImageHome src={Homeimage}></ImageHome>
      </RightSide>
 
    </Landing>

    </>
  )
}

export default Home