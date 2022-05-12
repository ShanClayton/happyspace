import React, {useState} from 'react'
import {BsPerson} from 'react-icons/bs'
import { BiSearch } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import {FaFacebook, FaTwitter, FaInstagram} from 'react-icons/fa'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [logo, setLogo] = useState(false)
    const handleNav = () => {
        setNav(!nav)
        setLogo(!logo)
    }
    return (
        <div className ='flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white'>
            <div>
                <h1 onClick={handleNav} className ={logo ? 'hidden' : 'block'}>HAPPY SPACES. </h1>
            </div>
            <ul className ='hidden md:flex'>
            <li><a href='/'>Home</a></li>
            <li><a href='/'>Condos</a></li>
            <li><a href='/'>Villas</a></li>
            <li><a href='/'>Hotels</a></li>
            <li><a href='/'>Contact</a></li>
            </ul>
            <div className ='hidden md:flex'>
                <BiSearch className='mr-2' size={20} />
                <BsPerson size={20} />
            </div>
           { /* Hamburger */}
            <div onClick={handleNav} className='md:hidden z-10'>
        {nav ? <AiOutlineClose className='text-black' size={20} /> : <HiOutlineMenuAlt4 size={20} />}
            </div>


            { /* Mobile menu dropdown */}
            <div onClick={handleNav} className= {nav ? 'absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%]' }>
                <ul>
                    <h1>HAPPY SPACES.</h1>
            <li className='border-b'>Home</li>
            <li className='border-b'>Condos</li>
            <li className='border-b'>Villas</li>
            <li className='border-b'>Hotels</li>
            <li className='border-b'>Contact</li>
           
            <div className='flex justify-between my-6'>
                    <FaFacebook className='icon' />
                    <FaInstagram className='icon' />
                    <FaTwitter  className='icon'/>
            </div>
                </ul>
            </div>
        </div>
    )
}

export default Navbar