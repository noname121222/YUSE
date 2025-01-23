import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, Changecolor, onLike, addLike,getId } from './Plus.js'
import { Link } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";

const Like = () => {
  function handSelect(id){
    dispatch(getId(id));}
  const likes = useSelector(store=>store.todo.likes);
  console.log(likes);
  const data = useSelector(store => store.todo.data)
  console.log(data);

  const dispatch = useDispatch()

  return (
<>
<div>
  {likes == null ?"no data":<div className='grid grid-cols-4 items-center gap-6 my-10 mx-8'>
  {
  likes.map(v=><div>
   <div className='carousel-item'>
            <div>
             
            <div className='bg-slate-100 rounded-lg py-3 w-72 '>
            <div key={v.id} className={`btn px-1 mr-2  ml-60 ${v.like && 'text-red-600'} `} >
                                            <FaHeart className='h-7 w-7 ' onClick={() => { dispatch(onLike(v.id)); dispatch(addLike(v.id)); }} />

                                        </div>

            <Link to={`/into/${v.id}`} onClick={()=> handSelect(v.id)}>
       
            <img src={v.img} alt="" className='ml-12'/>

            </Link>
        </div>
       
        <p className='text-xl font-bold my-2'>{v.name}</p>
        <div className='flex items-center gap-4 '>
            <p className='text-red-600 font-bold'>{v.text}</p>
            <del className='font-bold'>{v.total}</del>

        </div>
        <div className='flex gap-3 items-center mt-1'>
            <img className=' ' src={v.icon} alt="" />
            <p className=''>({v.vest})</p>
        </div>
                
            </div>
  
        

        </div>
        
    
  </div>)}
  </div>}
</div>
</>
  )
}

export default Like