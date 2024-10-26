import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div className='flex  flex-col items-center'>
      <div className='text-2xl py-10 text-gray-500'>
        <p>CONTACT <span className='text-gray-700'>Us</span></p>
      </div>

      <div className='flex flex-col md:flex-row gap-4'>
        <img className='w-full md:w-[330px]' src={assets.contact_image} alt="" />
        <div className='space-y-4'>
          <b>OUR OFFICE</b>
          <div>
            <p className='text-gray-500 text-sm'>
              00000 Willms Station
            </p>
            <p className='text-gray-500 text-sm'>
              Suite 000, Washington, USA
            </p>
          </div>
          <div>
            <p className='text-gray-500 text-sm'>
              Tel: (000) 000-0000
            </p>
            <p className='text-gray-500 text-sm'>
              Email: greatstackdev@gmail.com
            </p>
          </div>
          <b className=''>CAREERS AT PRESCRIPTO</b>
          <p className='text-gray-500 text-sm'>Learn more about our teams and job openings.</p>
          <button className='border border-black px-4 py-2 hover:bg-black hover:text-white'>Explore Jobs</button>
        </div>
       
      </div>
    </div>
  )
}

export default Contact
