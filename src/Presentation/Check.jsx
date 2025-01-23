import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';

const Check = () => {
  const shop = useSelector(store=>store.todo.shop);
  return (
 <>
 <div className='ml-10 mt-10'>
    
<h1 className='text-4xl font-bold'>Place an order</h1>
<p className='text-2xl font-bold mt-4'>City</p>
<input type="text" placeholder='City' className='border border-black py1 px-2 font-bold my-3' />
<p className='text-2xl font-bold my-3'>Pick-up point</p>
<div className='flex flex-col gap-2 '>
    <div className='flex items-center gap-3'>
    <input type="radio" id="Home delivery" name='ds' value="Home delivery"/>
    <label className='text-xl font-bold' for="Home delivery">Home delivery</label>

    </div>
    
  <div className='flex items-center gap-3'>
  <input type="radio" id="Home delivery" name='ds' value="Home delivery"/>
    <label className='text-xl font-bold' for="Home delivery">Yus</label>
  </div>

</div>

<p className='text-2xl font-bold my-4'>  Recipient of the order</p>
<div className='flex flex-col gap-3 '>
<input className='px-2 w-56 border border-black rounded-sm' type="text" name="" id="" placeholder='Name'/>
<input className='px-2 w-56 border border-black rounded-sm'  type="text" name="" id="" placeholder='Surname'/>
<input className='px-2 w-56 border border-black rounded-sm'  type="number" name="" id="" placeholder='+998'/>

<p  className='text-2xl font-bold'>Your order</p>
{
  shop.map(v=><div>
    <div className='flex  gap-10'>
      <p className='text-xl font-bold'>{v.name}</p>
      <p className='text-xl font-bold'>{v.text}</p>
    </div>
    <img className='bg-slate-100 my-4 py-2 px-3' src={v.img} alt="" />
    <div className='flex  gap-10'>
      <p className='text-xl font-bold'>Total</p>
      <p className='text-xl font-bold'>{v.text}</p>
    </div>


  </div>
  
)}


<p  className='text-2xl font-bold'>Payment method</p>
<div className='flex items-center gap-3'>
    <input type="radio" id="Home delivery" name='ds' value="Home delivery"/>
    <label className='text-xl font-bold' for="Home delivery">By map</label>

    </div>
    <div className='flex items-center gap-3'>
    <input type="radio" id="Home delivery" name='ds' value="Home delivery"/>
    <label className='text-xl font-bold' for="Home delivery">In cash</label>

    </div>




</div>




 </div>
 <Link to={'/fn'}>
<div className='ml-56 my-6'>
    <div className='ml-96'>
    <button className='btn bg-red-600 text-white py-2 px-8 text-2xl ml-96'>Place an order</button>
    </div>
</div>
</Link>
 
 </>
  )
}

export default Check