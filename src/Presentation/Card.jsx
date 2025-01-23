import React from 'react'
import Store from '../assets/Store.png'

const Card = () => {
  return (
<>
<div className='flex items-center gap-14 ml-32 mt-20'>
    <div>
        <p className='text-3xl font-bold '>Our Story</p>
        <p className='max-w-xl my-6'>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
        <p className='max-w-xl'>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>

    </div>
    <div>
        <img className='w-3/4 h-3/4' src={Store} alt="" />

    </div>
</div>

























</>
  )
}

export default Card