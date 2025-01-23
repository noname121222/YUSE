import React from 'react'

import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { decrement, increment, Changecolor, onLike, addLike,adddLike, onnLike } from './Plus.js'




const Shop = () => {
  const shop = useSelector(store=>store.todo.shop);
  const data = useSelector(store => store.todo.data)
  console.log(data);

  const dispatch = useDispatch()



  return (
   <>
   <div>
  {shop == null ? "no data":<div className=' items-center gap-6 my-10 mx-8'>
  {
  shop.map(v=><div>
   <div className='carousel-item'>
            <div className='flex gap-6 my-10'>
            <div className='bg-slate-100 rounded-lg py-3 w-96 h-96  '>
              <p className='btn ml-60 text-white bg-red-600' onClick={() => {  dispatch(adddLike(v.id));dispatch(onnLike(v.id)) }}>{v.icon}</p>
       
            <img src={v.img} alt="" className='w-80 h-80'/>


        </div>
        <div className='flex flex-col gap-2'>
        <p className='text-xl font-bold my-2'>{v.name}</p>

   
        <div className='flex items-center gap-4'>
          <p className='font-bold'>{v.text}</p>
          <del className='text-red-600 font-bold'>{v.total}</del>
        </div>

        <p>PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</p>
        <div className='flex items-center gap-10'>
        

<div>
         
<select  className='border border-black py-1 px-3' name="son" id="1">     
<option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>
  <option value="6">6</option>
  <option value="7">7</option>
  <option value="8">8</option>
  <option value="9">9</option>
  <option value="10">10</option>
          </select>
 


</div>
    

        </div>
     
        
        </div>
        
        
                
            </div>
  
        

        </div>
        
    
  </div>

)}

  <div className='ml-56'><div className='ml-96'>
    <Link to={'/check'}>
  <button className='btn bg-red-600 text-white py-2 px-8 text-2xl ml-96'>Buy</button>
  </Link>

  </div>
  </div>



  </div>
  
  }
</div>



   
   </>
  )
}

export default Shop