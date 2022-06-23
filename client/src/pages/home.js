import React from 'react'
import videobg from '../assets/videobg.mov'

const home = () => {
  return (
    <div className='main'>
      <video src={videobg} autoPlay loop muted/>
     
    </div>
  )
}

export default home