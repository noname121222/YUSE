import React from 'react'
import Thing from '../Thing'
import Sell from '../Sell'
import More from '../More'
import Music from '../Music'
const Medicine = () => {
  return (<>
    <div className='mt-20'>
      <Thing/>
    </div>
    <div>
      <Sell/>
    </div>
    <div>
      <Music/>
    </div>
    <div>
      <More/>
    </div>
    
    </>
  )
}

export default Medicine