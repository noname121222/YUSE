import React, { useState } from 'react'
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'
import { FaHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import '../src/Presentation/Sell'
import { useSelector } from 'react-redux';



const Layout = () => {
  let count = useSelector((state) => state.todo.data)
 
  console.log(count);
   let count1 = count.filter(v=> v.like)
   let count2 = count.filter(v=> v.but)
  return (
    <>
    <div className='flex justify-around py-6 border-black border-b-2 '>
        <div>
            <p className='text-2xl font-bold ' >Exclusive</p>
        </div>
        <div className='flex items-center gap-10  '>
        <Link className='active:border-black border-b' to ={'/'}>Home</Link>
        <Link className='active:border-black border-b'  to ={'/about'}>About</Link>
        <Link className='active:border-black border-b'  to ={'/contact'}>Contact</Link>
        <Link className='active:border-black border-b'  to ={'/signup'}>Sign up</Link>

        </div>
        <div className='flex items-center gap-6'>
            <input type="text"  placeholder='Search' className='bg-slate-50 rounded-2xl py-2 px-4'/>
            <Link  to ={'/like'}>    
            <div className="flex-none">
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
          <div className="indicator">
          <span className="badge badge-sm indicator-item bg-red-600 text-white">{count1?.length??0}</span>
           <FaHeart  className='w-5 h-5'/>

          </div>
        </div>
    
      </div>
      </div></Link>
            <Link className='' to ={'/shop'}>
            <div className="flex-none">
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
          <div className="indicator">
          <span className="badge badge-sm indicator-item bg-red-600 text-white">{count2?.length??0}</span>
           <MdOutlineShoppingCart   className='w-5 h-5'/>

          </div>
        </div>
        <div
          tabIndex={0}
          className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
          <div className="card-body">
            <span className="text-lg font-bold "></span>
            <span className="text-info">Subtotal: $999</span>
            <div className="card-actions">
              <button className="btn btn-primary btn-block">View cart</button>
            </div>
          </div>
        </div>
      </div>
      </div></Link>

            
        </div>

    </div>
    <Outlet/>
    
    
    </>
  )
}

export default Layout