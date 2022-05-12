import React from 'react'

import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
      <div className='w-full bg-gray-100 py-16'>
          <div className='max-w-[1240px] mx-auto flex flex-col px-4'>
              <div className='sm:flex text-center justify-between items-center'>
                  <h1>HAPPY SPACES.</h1>
                  <div className='flex justify-between w-full sm:max-w-[280px] my-4 '>
                   <FaFacebook className='icon' />
                    <FaInstagram className='icon' />
                    <FaTwitter  className='icon'/>
                  </div>
              </div>
              <div className='flex justify-between'>
                 <ul className='lg:flex'>
                  <li>About</li>
                  <li>Partners</li>
                  <li>Advertising</li>
              </ul>
              <ul className='text-right lg:flex'>
            <li><a href='/'>Home</a></li>
            <li><a href='/'>Condos</a></li>
            <li><a href='/'>Villas</a></li>
            <li><a href='/'>Hotels</a></li>
            <li><a href='/'>Contact</a></li>
              </ul>
              </div>
             
          </div>
      </div>
  )
}

export default Footer