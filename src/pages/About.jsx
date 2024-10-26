import React from 'react'
import { assets } from '../assets/assets';

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>About <span className='text-gray-700'>Us</span></p>
      </div>

      <div className=' my-10 flex flex-col md:flex-row gap-4'>
        <img className='w-full md:w-[320px]' src={assets.about_image} alt="" />
        <div className='text-sm text-gray-700 py-6 space-y-4'>
          <p>
            Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.
          </p>
          <p className='pb-4'>
            Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.
          </p>
          <b> Our Vision</b>
          <p>
            Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.
          </p>

        </div>
      </div>
      <div className=' text-xl my-9'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='   grid grid-cols-1 md:grid-cols-3  text-sm' >
        <div className='border px-10 py-20 space-y-3   hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer '>
          <p>EFFICIENCY:</p>
          <p className='text-gray-500'>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>
        <div className='border px-10 py-20 space-y-3  hover:bg-primary hover:text-white transition-all duration-300  cursor-pointer'>
          <p>CONVENIENCE:</p>
          <p className='text-gray-500'>Access to a network of trusted healthcare professionals in your area.</p>
        </div>
        <div className='border px-10 py-20 space-y-3  hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer '>

          <p>PERSONALIZATION:</p>
          <p className='text-gray-500'>Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>

      </div>

    </div>
  )
}

export default About;
