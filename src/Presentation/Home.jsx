import React from 'react'
import Categories from './Categories'
import Thing from './Thing'
import Category from './Category'
import Sell from './Sell'
import Music from './Music'
import More from './More'
import New from './New'
import Services from './Services'


const Home = () => {
  return (
    <div>
         <div>
   <Categories/>
   </div>
   <div className='mt-20'>
    <Thing/>
   </div>
   <div className='mt-20'>
   <Category/>  

   </div>
   <div>
    <Sell/>
   </div>
   <div className=''>
   <Music/>
   
   </div>
   
   <div>
    <More/>
   </div>
   <div>
  <New/>
   </div>
   <Services/>

  
        
    </div>
  )
}

export default Home