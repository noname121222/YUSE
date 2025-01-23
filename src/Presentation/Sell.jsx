import React, { useState } from 'react'
import Red from '../assets/red.svg'
import { FaHeart } from "react-icons/fa";
import star from '../assets/star.svg'
import a7 from '../assets/a6.svg'
import a6 from '../assets/a7.svg'

import a2 from '../assets/a5.svg'
import a3 from '../assets/a4.svg'
import a4 from '../assets/a3.svg'
import a5 from '../assets/a2.svg'
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, Changecolor, onLike, addLike } from './Plus.js'
const Sell = () => {
    const data = useSelector(store => store.todo.data)
    console.log(data);

    const dispatch = useDispatch()








    return (
        <>
            <div className='flex items-center gap-3 ml-10 mt-24'>
                <img src={Red} alt="" />
                <p>This Month</p>
            </div>
            <div className='mt-6 ml-10'>
                <p className='text-3xl font-bold'>Best Selling Products </p>
            </div>
            <div className='my-10'>



                <div className='flex items-center  carousel gap-6 mx-10'>
                {data.map((v) => (
                    <div className='carousel-item'>
                        <div>
                            <div className='bg-slate-100 rounded-lg py-3 w-72 '>
                                <div className='flex items-center justify-between'>

                                  
                                        <div key={v.id} className={`btn px-1 mr-2  ml-60 ${v.like && 'text-red-600'} `} >
                                            <FaHeart className='h-7 w-7 ' onClick={() => { dispatch(onLike(v.id)); dispatch(addLike(v.id)); }} />

                                        </div>






                                </div>
                                <img src={v.img} alt="" className='ml-12' />


                            </div>
                            <p className='text-xl font-bold my-2'>{v.name}</p>
                            <div className='flex items-center gap-4 '>
                                <p className='text-red-600 font-bold'>{v.text}</p>
                                <del className='font-bold'>{v.total}</del>

                            </div>
                            <div className='flex gap-3 items-center mt-1'>
                                <img className=' ' src={v.icon} alt="" />
                                <p className=''>({v.vest})</p>
                            </div>

                        </div>



                    </div>

))}
                 
                </div>
            </div>
        </>
    )
}

export default Sell