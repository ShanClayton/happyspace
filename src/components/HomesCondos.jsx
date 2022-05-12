import React from 'react'

import outsidehs from '../assets/outsidehs.jpg'
import outsidehousekitchen from '../assets/outsidehousekitchen.jpg'
import outsidecondo from '../assets/outsidecondo.jpg'
import hskitchen from '../assets/hskitchen.jpg'
import hsbedroom from '../assets/hsbedroom.jpg'

const HomesCondos = () => {
  return (
      <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
          <h1>Homes & Condos</h1>
          <p className='py-4'>Providing temporary housing in Southern California</p>
          <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
          <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={outsidehs} alt="outside of house" />
          <img className='w-full h-full object-cover' src={outsidehousekitchen} alt="white living room" />
          <img className='w-full h-full object-cover' src={outsidecondo} alt="pool area of condo " />
          <img className='w-full h-full object-cover' src={hskitchen} alt="condo kitchen" />
          <img className='w-full h-full object-cover' src={hsbedroom} alt="condo bedroom" />
          </div>
      </div>
  )
}

export default HomesCondos