import React from 'react'
import { RiCustomerService2Fill } from 'react-icons/ri'
import {BiHappyBeaming} from 'react-icons/bi'

const Search = () => {
  return (
       <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16'>
      <div className='lg:col-span-2 flex flex-col justify-evenly'>
              <div>
                  <h2>Let us make it easier for you</h2>
                  <p className='py-4'>Our company aims to make it easier to find a comfortable place to stay while on
                      business trips, traveling or waiting for your home construction. Happy Spaces provides several
                  convenient locations, both in the heart of the city and in secluded areas with breathtaking views.</p>
              </div>
              <div className='grid sm:grid-cols-2 gap-8 py-4'>
                  <div className='flex flex-col lg:flex-row items-center text-center'>
                      <button><RiCustomerService2Fill size={40} /></button>
                      <div>
                          <h3 className='py-2' >Leading Service</h3>
                            <p className='py-1'>We are a leading service provider in the area, and we are always ready to help you.</p>
                      </div>
                  </div>
                  <div className='flex flex-col lg:flex-row items-center text-center'>
                      <button><BiHappyBeaming  size={40}/></button>
                      <div>
                          <h3 className='py-2' >We Can Help</h3>
                            <p className='py-1'>Let Happy Spaces handle your travel arrangements whether you stay at our units or with our partners!</p>
                      </div>
                  </div>
              </div> 
          </div>


          <div>
              <div className='border text-center '>
                  <p className='pt-2'>GET 10% OFF FIRST BOOKING!</p>
                  <p className='py-4'>FILLING UP FAST!</p>
                  <p className='bg-orange-300 text-black-200 py-2'>BOOK NOW</p>
              </div>

              <form className='w-full'>
                  <div className='flex flex-col my-2'>
                      <label className='font-bold'>Destination</label>
                      <select className='border rounded-md p-2'>
                        <option>Los Angeles, CA</option>
                        <option>Rancho Mirage, CA</option>
                        <option>Riverside, CA</option>
                        <option>San Diego, CA</option>
                      </select>
                  </div>

                  <div className='flex flex-col my-3'>
                      <label className='font-bold'>Check-In</label>
                      <input className='border rounded-md p-2' type='date' />
                  </div>
                  <div className='flex flex-col my-2'>
                      <label className='font-bold'>Check-Out</label>
                      <input  className='border rounded-md p-2'type='date' />
                  </div>

                 <button className='w-full my-4'>Rates & Availability</button>
              </form>
          </div>
      </div>
  )
}

export default Search