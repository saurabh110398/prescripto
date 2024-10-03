import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';

const Appointment = () => {

  const { docId } = useParams();
  let { doctors, currencySymbol } = useContext(AppContext);
  
  let [docInfo, setDocInfo] = useState({});

  const fetchDocInfo = async () => {
    let presentDocInfo = doctors.find(ele => ele._id == docId);
    setDocInfo(presentDocInfo);
    console.log('presentDocInfo:: ', presentDocInfo);

  }

  useEffect(() => {
    fetchDocInfo();
  }, [docId, doctors])


  return docInfo && (

    <div className='gap-4'>
      <div className='flex flex-col md:flex-row  gap-4   w-full'>
        <div className='bg-primary  rounded-lg w-2/3 md:w-1/4 '>
          <img className='bottom-0' src={docInfo?.image} alt="" />
        </div>

        <div className=' border-2 rounded-lg w-2/3 lg:w-full space-y-2 p-3'>
          <p className=' flex gap-2 text-3xl md:text-4xl font-medium'>{docInfo.name}
            <img src={assets.verified_icon} alt="" />
          </p>
          <div className='flex text-md md:text-xl text-gray-500 gap-2'>
            <p>{docInfo.degree} - {docInfo.speciality}</p>

            <button className='border rounded-xl text-sm md:text-lg px-2 hidden lg:flex'>{docInfo.experience}</button>
          </div>
          <p className='border rounded-xl text-sm md:text-lg px-2 inline lg:hidden'>{docInfo.experience}</p>

          <div>
            <p className='text-sm md:text-lg flex gap-2 '>About <img className='w-3' src={assets.info_icon} alt="" /></p>
            <p className='text-sm md:text-lg text-gray-500'>{docInfo.about}</p>
          </div>
          <p className='text-md md:text-lg'>Appointment Fee: {currencySymbol}{docInfo.fees}</p></div>
      </div>
      <div className=' '>2</div>
      <div className='border-2 '>3</div>
    </div>
  )
}

export default Appointment
