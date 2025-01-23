import React from 'react'
import music from '../assets/Music.svg'

const Music = () => {
  return (
  <>
  <div className='bg-black flex  items-center mx-10 py-10 mt-32'>
    <div>
        <p className='text-green-600 text-2xl font-bold mb-10 ml-16'>Categories</p>
        <p className='text-white text-5xl my-6 ml-16'>Enhance Your Music Experience</p>
        <button className='bg-green-400 text-xl text-white py-1 px-6 mt-6 ml-16'>Buy now!</button>
    </div>
    <div className='mr-10'>
        <img src={music} alt="" className='' />
    </div>
  </div>

  </>
  )
}

export default Music