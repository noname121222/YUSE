import React from 'react'
import Red from '../assets/red.svg'
import Phone from '../assets/phone.svg'
import Comp from '../assets/Elec3.svg'
import Comp1 from '../assets/Elec2.svg'
import Comp2 from '../assets/Elec1.svg'
import Comp3 from '../assets/Elec.svg'
import { Link } from 'react-router-dom'
import { CiCamera } from "react-icons/ci";

const Category = () => {
  return (
   <>
   <div className='flex items-center gap-3 ml-10'>
      <img src={Red} alt="" />
        <p>Categories</p>
    </div>
<div className='mt-6 ml-10'>
    <p className='text-3xl font-bold'>Browse By Category </p>
</div>


<div className='flex items-center justify-around mt-16 mx-5'>
<Link to ={'/elector'}>
<div className='border border-black flex flex-col items-center w-42 px-9  h-42 pt-3 pb-4 rounded-md active:bg-red-500 active:text-white'>
        <img className='w-24 h-24 ' src={Phone} alt="" />
        <p className='text-xl font-bold'>Phones</p>

    </div>
</Link>
<Link to ={'/elector'}>
<div className='border border-black flex flex-col items-center w-42 px-9  h-42 pt-3 pb-4 rounded-md active:bg-red-500 active:text-white '>
        <img className='w-24 h-24' src={Comp} alt="" />
        <p className='text-xl font-bold'>Computers</p>

    </div>
</Link>
<Link to ={'/elector'}>
<div className='border border-black flex flex-col items-center w-42 px-9  h-42 pt-3 pb-4 rounded-md active:bg-red-500 active:text-white '>
        <img className='w-24 h-24' src={Comp1} alt="" />
        <p className='text-xl font-bold'>SmartWatch</p>

    </div>
</Link>
<Link to ={'/elector'}>
<div className='border border-black flex flex-col items-center w-42 px-9  h-42 pt-3 pb-4 rounded-md active:bg-red-500 active:text-white '>
<CiCamera  className='w-24 h-24'/>
        <p className='text-xl font-bold'>Camera</p>

    </div>
</Link>
<Link to ={'/elector'}>
<div className='border border-black flex flex-col items-center w-42 px-9  h-42 pt-3 pb-4 rounded-md active:bg-red-500 active:text-white '>
        <img className='w-24 h-24' src={Comp2} alt="" />
        <p className='text-xl font-bold'>HeadPhones</p>

    </div>
</Link>
<Link to ={'/elector'}>
<div className='border border-black flex flex-col items-center w-42 px-9  h-42 pt-3 pb-4 rounded-md active:bg-red-500 active:text-white '>
        <img className='w-24 h-24' src={Comp3} alt="" />
        <p className='text-xl font-bold'>Gaming</p>

    </div>
</Link>
  
    
</div>

   
   </>
  )
}

export default Category