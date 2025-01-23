import React from 'react'
import Red from '../assets/red.svg'
import PS from '../assets/PS.svg'
import WM from '../assets/WM.svg'
import PR from '../assets/PR.svg'
import PRR from '../assets/PRR.svg'

const New = () => {
  return (

    <>
      <div className='flex items-center gap-3 ml-10 mt-24'>
      <img src={Red} alt="" />
        <p>Featured</p>
    </div>
    <div className='mt-6 ml-10'>
    <p className='text-3xl font-bold'>New Arrival</p>
</div>





 
<div className='flex items-center justify-around my-10'>
  <div className='bg-black w-1/3 py-4 px-4'>
<img src={PS} alt="" />

<p className='text-white text-3xl font-bold my-3'>PlayStation 5

</p>
<p className='text-white w-64'>Black and White version of the PS5 coming out on sale.</p>
<p className='text-white my-3'>Shop Now</p>
  </div>
<div>
  <div>
  <div className='bg-black w-full py-4 px-4 flex items-center  '>
  
<div>
<p className='text-white text-3xl font-bold my-3'>Women’s Collections

</p>
<p className='text-white w-64'>Featured woman collections that give you another vibe.</p>
<p className='text-white my-3'>Shop Now</p>
</div>
<div>
      
      <img className='w-96' src={WM} alt="" />
      
          </div>
  </div>
  <div className='flex gap-7  mt-9'>
  <div className='bg-black w-96  h-64 px-4  py-3 flex items-center gap-5'>
      <img src={PR} className='w-56 h-48' alt="" />
      <div>
      <p className='text-white text-3xl font-bold my-3'>Speakers

</p>

<p className='text-white '>Shop Now</p>
      </div>

    </div>
    <div className='bg-black w-96 h-64 px-3 py-3 flex items-center gap-5'>
      <img src={PRR} className='w-56 h-48' alt="" />
      <div>
      <p className='text-white text-3xl font-bold my-3'>Perfume

</p>

<p className='text-white '>Shop Now</p>
      </div>

    </div>
  </div>
  
  </div>
  <div>

  </div>
  
</div>
</div>
    
    </>
  )
}

export default New