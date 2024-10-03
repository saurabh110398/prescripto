import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom';
const SpecialityMenu = () => {
  return (
    <div id='speciality'
      className='flex flex-col text-gray-800 items-center gap-4 py-16 '>
      <h1 className='text-3xl font-medium'>Find by Speciality </h1>
      <p className='text-sm text-center  sm:w-1/3'>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
      <div className='flex gap-4 w-full overflow-scroll justify-center items-center flex-wrap '>
        {
          specialityData.map(ele => {
            return (
              <Link className='py-3 flex flex-col text-sm text-gray-600  justify-center items-center flex-shrink-0 hover:translate-y-[-10px] translate-all '
                key={ele.id}
                to={`/doctors/${ele.speciality}`}
                onClick={()=>{scrollTo(0,0)}}

                >
                <img className='w-16 sm:w-24 md:w-28 mb-2' src={ele.image} alt="" />
                <p >{ele.speciality}</p>
              </Link>
            )
          })
        }
      </div>
    </div>
  )
}

export default SpecialityMenu
