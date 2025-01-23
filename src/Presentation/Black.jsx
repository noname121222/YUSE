import React from 'react'
import DW from '../assets/DW.svg'
import DM from '../assets/DM.svg'
const Black = () => {
  return (
<>
<div className='bg-black w-full flex  justify-around py-4'>
        <div className='flex flex-col gap-3  py-3'>
            <p className='text-xl text-white font-bold'>Exclusive</p>
            <p className='text-white'>Subscribe</p>
            <p className='text-white'>Get 10% off your first order</p>
            <input className='bg-black border w-48 border-white py-1 px-3' type="text" placeholder='Enter your email'/>
   
        </div>

        <div className='flex flex-col gap-3  py-3'>
            <p className='text-xl text-white font-bold'>Support</p>
            <p className='text-white w-44'>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
            <p className='text-white'>exclusive@gmail.com</p>
   <p className='text-white'>+88015-88888-9999</p>
        </div>

        <div className='flex flex-col gap-3  py-3'>
            <p className='text-xl text-white font-bold'>Account</p>
            <p className='text-white'>My Account</p>
            <p className='text-white'>Login / Register</p>
   <p className='text-white'>Cart</p>
   <p className='text-white'>Wishlist</p>
   <p className='text-white'>Shop</p>
        </div>


        <div className='flex flex-col gap-3  py-3'>
            <p className='text-xl text-white font-bold'>Quick Link</p>
            <p className='text-white'>Privacy Policy</p>
            <p className='text-white'>Terms Of Use</p>
   <p className='text-white'>FAQ</p>
   <p className='text-white'>Contact</p>

        </div>


        
        <div className='flex flex-col gap-3  py-3'>
            <p className='text-xl text-white font-bold'>Download App</p>
            <p className='text-white'>Save $3 with App New User Only</p>
            <img className='w-48' src={DW} alt="" />
            <img className='w-48' src={DM} alt="" />
        </div>


        
        













    </div>

</>
  )
}

export default Black