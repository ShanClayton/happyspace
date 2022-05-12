import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import herovid from '../assets/herovid.mp4'

const Hero = () => {
  return (
      <div className='w-full h-screen relative'>
          <video
              className='w-full h-full object-cover'
              src={herovid}
              autoPlay
              loop
              muted />
          
          <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30'></div>
          <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4'>
              <h1>Comfortable Living & Positive Vibes</h1>
              <p className='py-4'>Our company aims to make it easier for people to a comfortable place to stay while on business trips, traveling or waiting for home construction.</p>
                  <div>
                  <button className='my-4'>Learn More</button>
                  </div>
             
          </div>
      </div>
  )
}

export default Hero