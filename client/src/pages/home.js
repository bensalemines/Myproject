import React from 'react'
// import videobg from '../assets/videobg.mov'
import {Landing,Quote,RightSide, JoinusButton,LeftSide,ImageHome,H,A} from '../styles/components.styled'
import {Link} from 'react-router-dom';
import Navbar from '../components/Navbar'
import Homeimage from '../assets/home.png'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Landing>
      {/* <Background src={videobg} autoPlay loop muted/> */}
      <LeftSide>
      <Quote><H>You don't need a therapy </H> <br/> 
      <A>You just need to go CAMPING</A>
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