import React, { useState } from 'react'
import { assets } from '../assets/assets'

const MyProfile = () => {

  const [userData, setUserData] = useState({
    name: 'Jhon Doe',
    image: assets.profile_pic,
    email: 'jhon32@gmail.com',
    phone:'+1 324 876 432',
    address: {
      line1: ' 3B MT Lane',
      lin2: 'New York'
    },
    gender: 'Male',
    dob:'2000-01-20'
  })

  const [isEdit, setIsEdit] = useState(true);

  return (
    <div>
      <img src={userData.image} alt="" />
      {
        isEdit
        ? <input type="text" value={userData.name} onChange={(e)=> setUserData(prev=>({...prev, name:e.target.value}))} />
        : <p>{userData.name}</p> 
      }
      <hr />
      <div>
        <p>Contact Information</p>
        <div>
          <p>Email id: {userData.email}</p>
        </div>
      </div>
      
     
    </div>
  )
}

export default MyProfile
