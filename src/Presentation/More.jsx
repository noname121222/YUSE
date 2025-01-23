
import React, { useState } from 'react'
import Red from '../assets/red.svg'
import { FaHeart } from "react-icons/fa";
import star from '../assets/star.svg'
import a7 from '../assets/a6.svg'
import a6 from '../assets/a7.svg'
import AA from '../assets/AA.svg'
import AB from '../assets/AB.svg'
import AD from '../assets/AD.svg'
import AC from '../assets/AC.svg'
import AE from '../assets/AE.svg'
import AN from '../assets/AN.svg'
import AM from '../assets/AM.svg'

import a2 from '../assets/a5.svg'
import a3 from '../assets/a4.svg'
import { useSelector,useDispatch } from 'react-redux';
import { decrement, increment,Changecolor } from './Plus.js'


const More = () => {
    const count = useSelector((state) => state.todo.value)
    const dispatch = useDispatch()

  return (
    <>
    <div className='flex items-center gap-3 ml-10 mt-24'>
    <img src={Red} alt="" />
      <p>Our Products</p>
  </div>
  <div className='mt-6 ml-10'>
  <p className='text-3xl font-bold'>Explore Our Products</p>
</div>
<div className='my-10'>
  

  <div className='flex items-center  carousel gap-6 mx-10'>

  <div className='carousel-item'>
          <div>
          <div className='bg-slate-100 rounded-lg py-3 w-72 '>
          <div className='flex items-center justify-between'>
              
          
         
          <div className='btn px-1 mr-2 '>
  <FaHeart className='h-7 w-7 ' onClick={()=> dispatch(increment())}/>

    </div>



          </div>
          <img src={AA} alt="" className='ml-12'/>


      </div>
      <p className='text-xl font-bold my-2'>HAVIT HV-G92 Gamepad</p>
      <div className='flex items-center gap-4 '>
          <p className='text-red-600 font-bold'>$120</p>
          <del className='font-bold'>$160</del>

      </div>
      <div className='flex gap-3 items-center mt-1'>
          <img className=' ' src={star} alt="" />
          <p className=''>(88)</p>
      </div>
              
          </div>

      

      </div>

      <div className='carousel-item'>
          <div>
          <div className='bg-slate-100 rounded-lg py-3 w-72 '>
          <div className='flex items-center justify-between'>
              
      
        
          <div className='btn px-1 mr-2  ml-60 '>
  <FaHeart className='h-7 w-7 ' onClick={()=> dispatch(increment())}/>

    </div>



          </div>
          <img src={AB} alt="" className='ml-12'/>


      </div>
      <p className='text-xl font-bold my-2'>HAVIT HV-G92 Gamepad</p>
      <div className='flex items-center gap-4 '>
          <p className='text-red-600 font-bold'>$120</p>
          <del className='font-bold'>$160</del>

      </div>
      <div className='flex gap-3 items-center mt-1'>
          <img className=' ' src={star} alt="" />
          <p className=''>(88)</p>
      </div>
              
          </div>

      

      </div>

      <div className='carousel-item'>
          <div>
          <div className='bg-slate-100 rounded-lg py-3 w-72 '>
          <div className='flex items-center justify-between'>
              
        
        
          <div className='btn px-1 mr-2 ml-60 '>
  <FaHeart className='h-7 w-7 'onClick={()=> dispatch(increment())}/>

    </div>



          </div>
          <img src={AE} alt="" className='ml-12'/>


      </div>
      <p className='text-xl font-bold my-2'>HAVIT HV-G92 Gamepad</p>
      <div className='flex items-center gap-4 '>
          <p className='text-red-600 font-bold'>$120</p>
          <del className='font-bold'>$160</del>

      </div>
      <div className='flex gap-3 items-center mt-1'>
          <img className=' ' src={star} alt="" />
          <p className=''>(88)</p>
      </div>
              
          </div>

      

      </div>

      <div className='carousel-item'>
          <div>
          <div className='bg-slate-100 rounded-lg py-3 w-72 '>
          <div className='flex items-center justify-between'>
              
   
        
          <div className='btn px-1 mr-2  ml-60'>
  <FaHeart className='h-7 w-7 ' onClick={()=> dispatch(increment())}/>

    </div>

          </div>
          <img src={AC} alt="" className='ml-12'/>


      </div>
      <p className='text-xl font-bold my-2'>HAVIT HV-G92 Gamepad</p>
      <div className='flex items-center gap-4 '>
          <p className='text-red-600 font-bold'>$120</p>
          <del className='font-bold'>$160</del>

      </div>
      <div className='flex gap-3 items-center mt-1'>
          <img className=' ' src={star} alt="" />
          <p className=''>(88)</p>
      </div>
              
          </div>

      

      </div>
      <div className='carousel-item'>
          <div>
          <div className='bg-slate-100 rounded-lg py-3 w-72 '>
          <div className='flex items-center justify-between'>
              

          <div className='btn px-1 mr-2 ml-60 '>
  <FaHeart className='h-7 w-7 ' onClick={()=> dispatch(increment())}/>

    </div>

          </div>
          <img src={a3} alt="" className='ml-12'/>


      </div>
      <p className='text-xl font-bold my-2'>HAVIT HV-G92 Gamepad</p>
      <div className='flex items-center gap-4 '>
          <p className='text-red-600 font-bold'>$120</p>
          <del className='font-bold'>$160</del>

      </div>
      <div className='flex gap-3 items-center mt-1'>
          <img className=' ' src={star} alt="" />
          <p className=''>(88)</p>
      </div>
              
          </div>

      

      </div>

      <div className='carousel-item'>
          <div>
          <div className='bg-slate-100 rounded-lg py-3 w-72 '>
          <div className='flex items-center justify-between'>
              
     
        
          <div className='btn px-1 mr-2 ml-60'>
  <FaHeart className='h-7 w-7 ' onClick={()=> dispatch(increment())}/>

    </div>

     
     
    


          </div>
          <img src={a2} alt="" className='ml-12'/>


      </div>
      <p className='text-xl font-bold my-2'>HAVIT HV-G92 Gamepad</p>
      <div className='flex items-center gap-4 '>
          <p className='text-red-600 font-bold'>$120</p>
          <del className='font-bold'>$160</del>

      </div>
      <div className='flex gap-3 items-center mt-1'>
          <img className=' ' src={star} alt="" />
          <p className=''>(88)</p>
      </div>
              
          </div>

          

      

      </div>
   
  </div>
  
  
  <div className='flex items-center  carousel gap-6 mx-10 my-16'>

  <div className='carousel-item'>
          <div>
          <div className='bg-slate-100 rounded-lg py-3 w-72 '>
          <div className='flex items-center justify-between'>
              
          
         
          <div className='flex items-center gap-40'>
                
                <p className='bg-green-300 text-white w-14 px-2 ml-2'>New</p>
              
                <div className='btn px-1  ml-4 '>
        <FaHeart className='h-7 w-7 ' onClick={()=> dispatch(increment())}/>
    
          </div>
    
    
                </div>



          </div>
          <img src={AD} alt="" className='ml-12'/>


      </div>
      <p className='text-xl font-bold my-2'>HAVIT HV-G92 Gamepad</p>
      <div className='flex items-center gap-4 '>
          <p className='text-red-600 font-bold'>$120</p>
          <del className='font-bold'>$160</del>

      </div>
      <div className='flex gap-3 items-center mt-1'>
          <img className=' ' src={star} alt="" />
          <p className=''>(88)</p>
      </div>
              
          </div>

      

      </div>

      <div className='carousel-item'>
          <div>
          <div className='bg-slate-100 rounded-lg py-3 w-72 '>
          <div className='flex items-center justify-between'>
              
      
        
          <div className='btn px-1 mr-2  ml-60 '>
  <FaHeart className='h-7 w-7 ' onClick={()=> dispatch(increment())}/>

    </div>



          </div>
          <img src={AN} alt="" className='ml-12'/>


      </div>
      <p className='text-xl font-bold my-2'>HAVIT HV-G92 Gamepad</p>
      <div className='flex items-center gap-4 '>
          <p className='text-red-600 font-bold'>$120</p>
          <del className='font-bold'>$160</del>

      </div>
      <div className='flex gap-3 items-center mt-1'>
          <img className=' ' src={star} alt="" />
          <p className=''>(88)</p>
      </div>
              
          </div>

      

      </div>

      <div className='carousel-item'>
          <div>
          <div className='bg-slate-100 rounded-lg py-3 w-72 '>
          <div className='flex items-center justify-between'>
              
        
        
          <div className='btn px-1 mr-2 ml-60 '>
  <FaHeart className='h-7 w-7 'onClick={()=> dispatch(increment())}/>

    </div>



          </div>
          <img src={AM} alt="" className='ml-12'/>


      </div>
      <p className='text-xl font-bold my-2'>HAVIT HV-G92 Gamepad</p>
      <div className='flex items-center gap-4 '>
          <p className='text-red-600 font-bold'>$120</p>
          <del className='font-bold'>$160</del>

      </div>
      <div className='flex gap-3 items-center mt-1'>
          <img className=' ' src={star} alt="" />
          <p className=''>(88)</p>
      </div>
              
          </div>

      

      </div>

      <div className='carousel-item'>
          <div>
          <div className='bg-slate-100 rounded-lg py-3 w-72 '>
          <div className='flex items-center justify-between'>
              
   
          <div className='flex items-center gap-40'>
                
                <p className='bg-green-300 text-white w-14 px-2 ml-2'>New</p>
              
                <div className='btn px-1  ml-4'>
        <FaHeart className='h-7 w-7 ' onClick={()=> dispatch(increment())}/>
    
          </div>
    
    </div>

          </div>
          <img src={a7} alt="" className='ml-12'/>


      </div>
      <p className='text-xl font-bold my-2'>HAVIT HV-G92 Gamepad</p>
      <div className='flex items-center gap-4 '>
          <p className='text-red-600 font-bold'>$120</p>
          <del className='font-bold'>$160</del>

      </div>
      <div className='flex gap-3 items-center mt-1'>
          <img className=' ' src={star} alt="" />
          <p className=''>(88)</p>
      </div>
              
          </div>

      

      </div>
      <div className='carousel-item'>
          <div>
          <div className='bg-slate-100 rounded-lg py-3 w-72 '>
          <div className='flex items-center justify-between'>
              

          <div className='btn px-1 mr-2 ml-60 '>
  <FaHeart className='h-7 w-7 ' onClick={()=> dispatch(increment())}/>

    </div>

          </div>
          <img src={a3} alt="" className='ml-12'/>


      </div>
      <p className='text-xl font-bold my-2'>HAVIT HV-G92 Gamepad</p>
      <div className='flex items-center gap-4 '>
          <p className='text-red-600 font-bold'>$120</p>
          <del className='font-bold'>$160</del>

      </div>
      <div className='flex gap-3 items-center mt-1'>
          <img className=' ' src={star} alt="" />
          <p className=''>(88)</p>
      </div>
              
          </div>

      

      </div>

      <div className='carousel-item'>
          <div>
          <div className='bg-slate-100 rounded-lg py-3 w-72 '>
          <div className='flex items-center justify-between'>
              
     
        
          <div className='btn px-1 mr-2 ml-60'>
  <FaHeart className='h-7 w-7 ' onClick={()=> dispatch(increment())}/>

    </div>

     
     
    


          </div>
          <img src={a2} alt="" className='ml-12'/>


      </div>
      <p className='text-xl font-bold my-2'>HAVIT HV-G92 Gamepad</p>
      <div className='flex items-center gap-4 '>
          <p className='text-red-600 font-bold'>$120</p>
          <del className='font-bold'>$160</del>

      </div>
      <div className='flex gap-3 items-center mt-1'>
          <img className=' ' src={star} alt="" />
          <p className=''>(88)</p>
      </div>
              
          </div>

          

      

      </div>
   
  </div>
  


  </div>



  </>
  )
}

export default More