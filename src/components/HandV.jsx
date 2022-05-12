import React from 'react'

import anaheim from '../assets/anaheim.jpeg'
import ontariohotel from '../assets/ontariohotel.jpeg'
import losangeles from '../assets/losangeles.jpeg'
import palmsprings from '../assets/palmsprings.jpg'
import riversidehotel from '../assets/riversidehotel.jpeg'
import sandiegohotel from '../assets/sandiegohotel.jpeg'
import HandvCard from './HandvCard'

const HandV = () => {
    return (
        <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
         <h1>Hotels & Villas</h1>
        <p className='py-4'>Strategic locations, and makes it easier for domestic or foreign guests to find a comfortable place. For staycations, honeymoons, and vacations.</p>
      
        <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          <HandvCard bg={anaheim} text='Anaheim'/>
          <HandvCard bg={ontariohotel} text='Ontario'/>
          <HandvCard bg={losangeles} text='Los Angeles'/>
          <HandvCard bg={palmsprings} text='Palm Springs'/>
          <HandvCard bg={riversidehotel} text='Riverside'/>
          <HandvCard bg={sandiegohotel} text='San Diego'/>
      </div>
        </div>
  )
}

export default HandV