import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const MyAppointments = () => {
  const { doctors } = useContext(AppContext)
  console.log(doctors);

  return (
    <div>
      <p className='pb-3 mt-12 font-medium text-zinc-700 border-b'>My appointment</p>
      <div >
        {doctors.slice(0, 4).map((item, index) => {
          return (
            <div key={index} className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b '>

              <div>
                <img className='w-32 bg-blue-50' src={item.image} alt="" />
              </div>
              <div className='flex-1 text-sm text-zinc-600'>
                <p className='text-neutral-800 font-semibold'>{item.name}</p>
                <p>{item.speciality}</p>
                <p className='text-zinc-700 font-medium mt-1'>Address:</p>
                <p className='text-xs'>{item.address.line1}</p>
                <p className='text-xs'>{item.address.line2}</p>
                <p className='text-xs'><span className='text-sm text-neutral-700 font-medium'>Date & Time: </span></p>

              </div>
              <div></div>
              <div className='flex flex-col justify-end gap-2'>
                <button className=' text-sm text-stone-500 text-center sm:min-w-48 px-5 py-2 border-2 border-rounded hover:bg-primary hover:text-white transition-all duration-300'>Pay Online</button>
                <button className='text-sm text-stone-500 text-center sm:min-w-48 px-5 py-2 border-2  border-rounded hover:bg-red-700 hover:text-white transition-all duration-300'>Cancel Appointment</button>
              </div>


            </div>)
        })}

      </div>
    </div>
  )
}

export default MyAppointments;
