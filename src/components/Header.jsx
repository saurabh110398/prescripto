import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
    return (
        <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg  px-6 md:px-10 lg:px-20 text-white'>
            {/* Left */}
            <div className='w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
                <p className='text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight  '>Book Appointment<br />With Trusted Doctors</p>
                <div className='flex flex-col items-center md:flex-row gap-3 text-sm font-light'>
                    <img className='w-28' src={assets.group_profiles} alt="" />
                    <p>Simply browse through our extensive list of trusted doctors,<br className='hidden sm:block' /> schedule your appointment hassle-free.</p>
                </div>
                <a className='flex items-center gap-2 px-8 py-3 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300 rounded-full bg-white text-black' href="">
                    Book appointment <img className='w-3' src={assets.arrow_icon} alt="" />
                </a>
                {/* <button className='flex items-center text-gray-600 text-sm gap-2 px-8 py-3 rounded-full bg-white '>
                Book appointment <img src={assets.arrow_icon} alt="" />
                </button> */}

            </div>
            {/* right side */}
            <div className='w-1/2 relative m-auto md:m-0  '>
                <img className='w-full   md:absolute bottom-0 h-auto rounded-lg ' src={assets.header_img} alt="" />
            </div>
        </div>
    )
}

export default Header