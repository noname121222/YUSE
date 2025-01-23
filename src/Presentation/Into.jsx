import React, { useState } from 'react'
import Im from '../assets/Im.svg'
import Ime from '../assets/Im2.svg'
import Imen from '../assets/Im3.svg'
import Imene from '../assets/Im4.svg'
import Imenen from '../assets/Im5.svg'
import stare from '../assets/stare.svg'
import color from '../assets/color.svg'

import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, Changecolor, onLike, addLike, adddLike,onnLike } from './Plus.js'
import { FaHeart } from "react-icons/fa";
import Thing from './Thing.jsx'
import Black from './Black.jsx'


const Into = () => {
    const items = [
        {
            id: 1,
            img: Im,
            icon: Im,

        },
        {
            id: 2,
            img: Ime,
            icon: Ime,

        },
        {
            id: 3,
            img: Imene,
            icon: Imene,

        },
        {
            id: 4,
            img: Imenen,
            icon: Imenen,

        },

    ]
    const [team, setTeam] = useState(items[0])
    const { data, id } = useSelector(store => store.todo)
    let product = data.filter(v => v.id == id)
 


    const dispatch = useDispatch()

    return (
        <>
            <div className='flex items-center justify-around mt-20'>
                <div className='flex flex-col items-center gap-4 '>

                    {items.map((item, index) => (
                        <div onClick={() => setTeam(items[item.id - 1])}
                            key={item.id} className={`  rounded-2xl  px-4 py-2  w-32 h-32   btn  bg-slate-100 ${index === 0 ? "active" : ''} `}>
                            <img src={item.img} alt='' className=' ' loading='lazy' />



                        </div>

                    ))

                    }
                </div>
                <div className='w-1/2 h-1/2'>
                    <img src={team.icon} className='h-full  w-full px-7 py-4 rounded-3xl bg-slate-100' alt="" />

                </div>

                {product.map((v) => (
                    <div key={v.id}>
                        <div>
                            <div className=' '>




                                <p className='text-3xl font-bold'>Havic HV G-92 Gamepad</p>
                                <div className='flex items-center gap-12 my-3'>
                                    <div className='flex items-center gap-2'>
                                        <img src={v.icone} alt="" />
                                        <p className=''>(150 Reviews)</p>

                                    </div>

                                    <p className='text-green-400'>In Stock</p>


                                </div>
                                <p className='text-2xl font-bold my-2'>$192.00</p>


                                <p className='w-96 font-bold   '>PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</p>
                                <div className='border-black border-b-2 py-3'></div>
                            </div>
                            <div>
                                <div className='flex items-center my-5 gap-3'>
                                    <p className='text-xl font-bold'>Color:</p>
                                    <img src={color} alt="" />
                                </div>
                                <div>
<div className={`bg-red-600 text-white py-2 btn px-8 text-xl rounded-xl ${v.but && "text-red-600"}`}>
<button onClick={() => { dispatch(onnLike(v.id)); dispatch(adddLike(v.id)); }}  >Buy now!</button>

</div>
                                    
                                    <div key={v.id} className={`btn px-1 mr-2  ml-60 ${v.like && 'text-red-600'} `} >
                                        <FaHeart className='h-7 w-7 ' onClick={() => { dispatch(onLike(v.id)); dispatch(addLike(v.id)); }} />

                                    </div>
                                </div>


                            </div>


                        </div>
                    </div>
                ))}
            </div>


            <div className='mt-36'>
                <Thing />
            </div>
            <div className='mt-36'>
                <Black />
            </div>

        </>
    )
}

export default Into