import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom';

const RelatedDoctors = ({ docId, speciality }) => {

    let { doctors } = useContext(AppContext);
    let navigate = useNavigate();
    // console.log(doctors,'spe:: ',speciality);


    const [relDoc, setRelDocs] = useState([]);
    useEffect(() => {
        if (doctors.length > 0 && speciality) {
            let filteredData = doctors.filter(ele => ele.speciality == speciality && ele._id != docId);
            console.log('filterdata:: ', filteredData);
            setRelDocs(filteredData);
        }


    }, [doctors, docId, speciality])

    return (
        <div className='my-10'>
            <h2 className='text-3xl text-center md:text-4xl font-medium'>Related Doctors</h2>
            <p className='text-center'>Simply browse through our extensive list of trusted doctors.</p>
            <div className='my-10 border-3 border-yellow-400 flex flex-col md:flex-row flex-wrap justify-center md:justify-start items-center gap-5'>

                {
                    relDoc.map(ele => {
                        return (
                            <div className=' border-2 rounded-xl md:w-[220px] flex flex-col cursor-pointer overflow-hidden hover:translate-y-[-10px] transition-all duration-500'
                                key={ele._id}
                                onClick={() => { navigate(`/appointment/${ele._id}`); scrollTo(0,0) }}>
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

    )
}

export default RelatedDoctors
