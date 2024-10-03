import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Doctors = () => {
  let { speciality } = useParams();
  console.log('params:: ', speciality);
  let { doctors } = useContext(AppContext);
  let navigate = useNavigate();

  let [filterDoc, setFilterDoc] = useState([]);

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter(ele => ele.speciality === speciality))
    }
    else {
      setFilterDoc(doctors)
    }
  }
  useEffect(() => {
    applyFilter()
  }, [doctors, speciality])


  return (
    <div className='space-y-5'>
      <p className='text-gray-700 text-lg'>Browse through the doctors specialist.</p>
      <button className='text-gray-500 border px-3 py-1 text-lg rounded-md flex flex-col md:hidden'>Filters</button>
      <div className='flex  gap-2 w-full '>
        {/* buttons */}
        <div className='hidden md:flex flex-col justify-start rounded-sm gap-2 w-52'>
          {/* {
            doctors.map(ele=>{
              return(
                <button onClick={()=>{navigate(`/doctors/${ele.speciality}`)}} className='px-3 py-2 border rounded-md '>{ele.speciality}</button>
              )
            })
          } */}
          <button onClick={() =>  { speciality === 'Gynecologist'? navigate('/doctors'): navigate('/doctors/Gynecologist') }} className= {`px-3 py-2 border rounded-md ${speciality === 'Gynecologist' ? 'bg-indigo-100 text-black' : ''}`} >Gynecologist</button>
          <button onClick={() =>  { speciality === 'Dermatologist'?navigate('/doctors'): navigate('/doctors/Dermatologist') }} className= {`px-3 py-2 border rounded-md ${speciality === 'Dermatologist' ? 'bg-indigo-100 text-black' : ''}`}>Dermatologist</button>
          <button onClick={() =>  { speciality === 'Pediatricians'?navigate('/doctors'): navigate(`/doctors/Pediatricians`) }} className= {`px-3 py-2 border rounded-md ${speciality === 'Pediatricians' ? 'bg-indigo-100 text-black' : ''}`}>Pediatricians</button>
          <button onClick={() =>  { speciality === 'General physician'?navigate('/doctors'): navigate(`/doctors/General physician`) }} className= {`px-3 py-2 border rounded-md ${speciality === 'General physician' ? 'bg-indigo-100 text-black' : ''}`}>General Physician</button>
          <button onClick={() =>  { speciality === 'Neurologist'?navigate('/doctors'): navigate(`/doctors/Neurologist`) }} className= {`px-3 py-2 border rounded-md ${speciality === 'Neurologist' ? 'bg-indigo-100 text-black' : ''}`}>Neurologist</button>
          <button onClick={() =>  { speciality === 'Gastroenterologist'?navigate('/doctors'): navigate(`/doctors/Gastroenterologist`) }} className= {`px-3 py-2 border rounded-md ${speciality === 'Gastroenterologist' ? 'bg-indigo-100 text-black' : ''}`}>Gastroenterologist</button>
        </div>

        {/* docs */}
        <div className=' border-3 border-yellow-400 flex flex-col md:flex-row flex-wrap justify-center items-center gap-5'>
          {
            filterDoc.map(ele => {
              return (
                <div className=' border-2 rounded-xl md:w-[220px] flex flex-col cursor-pointer overflow-hidden hover:translate-y-[-10px] transition-all duration-500'
                  key={ele._id}
                  onClick={() => { navigate(`/appointment/${ele._id}`) }}>
                  <img className='bg-blue-50' src={ele.image} alt="" />
                  <div className='p-5 space-y-2'>
                    <div className='flex items-center justify-start gap-2'>
                      <p className='w-2 h-2 bg-green-600 rounded-full '></p>
                      <p className='text-md text-green-500'>Available</p>
                    </div>
                    <p className='text-lg'>{ele.name}</p>
                    <p className='text-sm text-gray-500'>{ele.speciality}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Doctors;
