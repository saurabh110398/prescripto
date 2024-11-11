import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const MyAppointments = () => {
  const { doctors } = useContext(AppContext)
  console.log(doctors);

  return (
    <div>
      <p>My appointment</p>
      <div>
        {doctors.slice(0, 2).map((item, index) => {
          return (
            <div key={index}>
              <div className='flex justify-between'>
                <div>
                  <img className='w-[100px] ' src={item.image} alt="" />
                </div>
                <div>
                  <p>{item.name}</p>
                  <p>{item.speciality}</p>
                  <p>Address:</p>
                  <p>{item.address.line1}</p>
                  <p>{item.address.line2}</p>
                  <p><span>Date & Time</span></p>
           
                </div>
                <div></div>
                <div className=''>
                  <button>Pay Online</button>
                  <button>Cancel Appointment</button>
                </div>
              </div>

            </div>)
        })}

      </div>
    </div>
  )
}

export default MyAppointments;
