import React from 'react'
import ser from '../assets/Ser.svg'
import ser1 from '../assets/ser1.svg'
import ser2 from '../assets/ser2.svg'
import ser3 from '../assets/ser3.svg'

const Persanol = () => {
  return (
<>


<div className='flex items-center justify-around my-36'>
    <div className='flex flex-col gap-2 items-center border border-black w-56 py-4'>
        <img src={ser} alt="" />
        <p className='text-2xl font-bold'>10.5k </p>
        <p>Sallers active our site</p>

    </div>
    <div className='flex flex-col gap-2 items-center border border-black w-56 py-4'>
        <img src={ser3} alt="" />
        <p className='text-2xl font-bold'>33k </p>
        <p>Mopnthly Produduct Sale</p>

    </div>
    <div className='flex flex-col gap-2 items-center border border-black w-56 py-4'>
        <img src={ser2} alt="" />
        <p className='text-2xl font-bold'>45.5k </p>
        <p>Customer active in our site</p>

    </div>
    <div className='flex flex-col gap-2 items-center border border-black w-56 py-4'>
        <img src={ser3} alt="" />
        <p className='text-2xl font-bold'>25k</p>
        <p>Anual gross sale in our site</p>

    </div>
</div>




</>
  )
}

export default Persanol