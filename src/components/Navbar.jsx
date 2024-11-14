import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
const Navbar = () => {
    const navigate = useNavigate();
    let [showMenu, setShowMenu] = useState(false)
    let [token, setToken] = useState(true)//true --> loggedin
    return (
        <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
            <img className='w-44 cursor-pointer' src={assets.logo} onClick={() => { navigate('/') }} alt="" />
            <ul className='hidden md:flex justify-between font-medium gap-5'>
                <NavLink to='/'>
                    <li className='py-1'>Home</li>
                    <hr className='hidden border-none outline-none h-0.5 bg-primary w-3/5 m-auto ' />
                </NavLink>
                <NavLink to='/doctors' >
                    <li className='py-1'>All Doctors</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink>
                <NavLink to='/about'>
                    <li className='py-1'>About </li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink>
                <NavLink to='/contact'>
                    <li className='py-1'>Contact </li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink>


            </ul>
            <div className='flex items-center gap-4'>
                {
                    token ?
                        <div className='flex gap-2 cursor-pointer group relative'>
                            <img className='rounded-full w-8' src={assets.profile_pic} alt="" />
                            <img className='w-2.5' src={assets.dropdown_icon} alt="" />

                            <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                                <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                                    <p className='hover:text-black cursor-pointer' onClick={() => {
                                        navigate('/myProfile')
                                    }}>My Profile</p>
                                    <p className='hover:text-black cursor-pointer' onClick={() => {
                                        navigate('/my-Appointments')
                                    }}>My Appointments</p>
                                    <p className='hover:text-black cursor-pointer' onClick={() => {
                                        setToken(false)
                                    }} >Logout</p>
                                </div>
                            </div>
                        </div>
                        :
                        <button className='bg-primary rounded-full text-white font-light px-8 py-3 hidden md:block'
                            onClick={() => {

                                navigate('/login')
                            }}>
                            Create Account
                        </button>

                }
                <img onClick={() => { setShowMenu(true) }} className='w-6 md:hidden' src={assets.menu_icon} alt="" />

                {/* mobile menu */}
                <div className={`${showMenu ? 'fixed w-[35%]' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
                    <div className='flex justify-end items-center px-5 py-5'>
                        {/* <img className='w-44 cursor-pointer' src={assets.logo} alt="" /> */}
                        <img className='w-7 cursor-pointer' onClick={() => { setShowMenu(false) }} src={assets.cross_icon} alt="" />
                    </div>
                    <ul className='flex flex-col items-start px-3 gap-2 font-medium text-lg mt-10'>
                        <NavLink  onClick={()=>{setShowMenu(false)}} to='to' > <p className='px-4 py-2 rounded cursor-pointer inline-block'>Home</p> </NavLink>
                        <NavLink  onClick={()=>{setShowMenu(false)}} to='/doctors'> <p className='px-4 py-2 rounded cursor-pointer inline-block'>All Doctors</p> </NavLink>
                        <NavLink  onClick={()=>{setShowMenu(false)}} to='/about'> <p className='px-4 py-2 rounded cursor-pointer inline-block'>About</p> </NavLink>
                        <NavLink  onClick={()=>{setShowMenu(false)}} to='/contact'> <p className='px-4 py-2 rounded cursor-pointer inline-block'>Contact</p> </NavLink>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Navbar
