import React, { useContext } from 'react'
// import { doctors } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext';

const TopDoctors = () => {
    let navigate = useNavigate();
    let {doctors} = useContext(AppContext);
  
    console.log('doctors::: -------:: ',doctors);
    
    return (
        <div className='flex flex-col items-center py-16 gap-4 text-gray-800'>
            <h1 className='text-3xl font-medium'>Top Doctors to Book</h1>
            <p className='text-sm sm:w-1/3 text-center mb-5'>Simply browse through our extensive list of trusted doctors.</p>
            <div className=' flex justify-evenly  border-gray-900  flex-wrap gap-3'>
                {
                    doctors.slice(0,10).map(ele => {
                        return (
                            // <div key={ele.id} className='flex flex-col items-start border-2 rounded-lg'>
                            <div key={ele._id} className=' w-[220px] space-y-1 flex flex-col items-start border border-blue-200 rounded-lg overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'
                            onClick={()=>{ navigate(`/appointment/${ele._id}`)}}>
                                <img className='bg-blue-50 ' src={ele.image} alt="" />
                                <div className='flex items-center gap-2 pt-4 pl-4  text-center text-green-500 text-sm'>
                                    <p className='w-2 h-2 bg-green-600 rounded'></p>
                                    <p>Available</p>
                                </div>
                                <div className='pl-4 '>
                                    <p className='text-gray-900 text-lg font-medium'>{ele.name}</p>
                                    <p className='text-gray-600 text-sm font-medium pb-2'>{ele.speciality}</p>
                                </div>
                            </div>

                        )
                    })
                }
                
            </div>
            <button className='bg-blue-50 border text-gray-600 px-12 py-3 rounded-full m-10'
            onClick={()=>{
                navigate('/doctors');
                scrollTo(0,0);
            }}>Load More...</button>
        </div>
    )
}

export default TopDoctors
