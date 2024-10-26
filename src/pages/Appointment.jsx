import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';
import RelatedDoctors from '../components/RelatedDoctors';

const Appointment = () => {

  const { docId } = useParams();
  let { doctors, currencySymbol } = useContext(AppContext);
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];


  const [docInfo, setDocInfo] = useState({});
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState('');

  const fetchDocInfo = async () => {
    let presentDocInfo = doctors.find(ele => ele._id == docId);
    setDocInfo(presentDocInfo);
    // console.log('presentDocInfo:: ', presentDocInfo);

  }

  useEffect(() => {
    fetchDocInfo();
    getAvailableSlots();
  }, [docId, doctors])

  useEffect(() => {
    getAvailableSlots();
  }, [docInfo])
  useEffect(() => {
    console.log('doc slots:: ', docSlots);

  }, [docSlots])

  const getAvailableSlots = async () => {
    setDocSlots([]);

    let today = new Date();
    // console.log(today);

    for (let i = 0; i < 7; i++) {
      // getting date with index
      let currenDate = new Date(today);
      currenDate.setDate(today.getDate() + i)

      // setting end time of the date with index
      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);
      // console.log(endTime);


      // setting hours
      if (today.getDate() === currenDate.getDate()) {
        currenDate.setHours(currenDate.getHours() > 10 ? currenDate.getHours() + 1 : 10);
        currenDate.getMinutes(currenDate.getMinutes > 30 ? 30 : 0)
      }
      else {
        currenDate.setHours(10);
        currenDate.setMinutes(0);
      }

      let timeSlots = [];

      while (currenDate < endTime) {
        let formattedTime = currenDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        timeSlots.push({
          dateTime: new Date(currenDate),
          time: formattedTime,
        })

        // increment time by 30 mins
        currenDate.setMinutes(currenDate.getMinutes() + 30);
      }

      setDocSlots(prev => ([...prev, timeSlots]))


    }


  }


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
      {/* booking slots */}
      <div className='md:ml-72 md:pl-4 mt-4 font-medium text-gray-700'>
        <p>Booking Slots</p>
        <div className='flex gap-3 text-center  w-full overflow-x-scroll mt-4'>
          {
            docSlots.length && docSlots.map((item, index) => {


              return (
                <div >
                  <div
                    onClick={() => { setSlotIndex(index) }}
                    className={`text-center rounded-full cursor-pointer min-w-16 py-6  ${slotIndex == index ? 'bg-primary text-white' : 'border border-gray-200'}`}
                    // className='border-2 rounded-3xl w-14 h-24 py-6 px-1'
                    key={index}>
                    <p>{item[0] && daysOfWeek[item[0].dateTime.getDay()]}</p>
                    <p>{item[0] && item[0].dateTime.getDate()}</p>
                    {/* <p>{item}</p> */}
                  </div>

                </div>
              )
            })
          }


        </div>
        <div className='flex gap-3 text-sm mt-4 w-full overflow-x-scroll'>
          {
            docSlots.length && docSlots[slotIndex].map((item, index) => {
              console.log('item:: ', item.time);
              return (

                <p
                  key={index}
                  onClick={() => { setSlotTime(item.time) }}
                  className={`cursor-pointer rounded-full font-light flex-shrink-0 px-5 py-2 ${item.time === slotTime ? 'bg-primary text-white' : 'border  border-gray-200'}`}
                >
                  {item.time}
                </p>

              )
            })
          }
        </div>
        <button className='mt-5 bg-primary font-light rounded-full text-sm text-white px-9 py-1'>Book an Appointment</button>
      </div>
      {/* Listing related doctors */}

      <RelatedDoctors docId={docId} speciality={docInfo.speciality}/>

    </div>
  )
}

export default Appointment
