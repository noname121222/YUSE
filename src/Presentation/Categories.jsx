import React from 'react'

import Swiper from 'swiper';
import App from './App';
import { Link } from 'react-router-dom';

const Categories = () => {

 
  return (
    <>
    <div className='flex items-center justify-around '>
        <div className=''>
        
              <div className='border-black border-r-2 max-w-56'>
                <Link  to={'/womens'} >
                <p className='py-3 px-10 w-56 ' >Woman’s Fashion</p>
                </Link>
                <Link to={'/mens'} >
                <p className='py-3 px-10 w-56' >Men’s Fashion</p>
                </Link>
               
                <Link to={'/elector'} >
                <p className='py-3 px-10 w-56' >Electronics</p>
                </Link>
               
                <Link  to={'/lifestyle'} >
                <p className='py-3 px-10 w-56' >Home & Lifestyle</p>
                </Link>
                <Link to={'/medicine'} >
                <p className='py-3 px-10 w-56' >Medicine</p>
                </Link>
               
                <Link  to={'/sports'} >
                <p className='py-3 px-10 w-56' >Sports & Outdoor</p>
                </Link>
               
                <Link  to={'/baby'} >
                <p className='py-3 px-10 w-56' >Baby’s & Toys</p>
                </Link>
               
                <Link  to={'/groce'} >
                <p className='py-3 px-10 w-56' >Groceries & Pets</p>
                </Link>
               
                <Link  to={'/health'} >
                <p className='py-3 px-10 w-56' >Health & Beauty</p>
                </Link>
               
               


              </div>

       

        </div>
 
     <App/>

   


    </div>

    </>
  )
}

export default Categories