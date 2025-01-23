import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Phone from '../assets/Phone.png'
import Iphone from '../assets/Iphone.svg'
import { FaArrowRightLong } from "react-icons/fa6";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

export default function App() {

  const teams=[
    {
        logo:Iphone,
        text:" Iphone 12 series",
        sale:"Up to 20% off Voucher",
        text1:"Shop now",
        phone:Phone,
    },


]
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
       
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='ml-48' >
        {teams.map(team=>(
        

       
        <div className='bg-black w-2/3 h-80 items-center justify-around flex my-6 pl-10 '>
        <div>
            <div className='flex items-center gap-3 my-8'>
                <img className='w-10 h-10' src={team.logo} alt="" />
                <p className='text-white font-bold'> {team.text}</p>
            </div>
            <p className='text-white text-5xl font-bold max-w-72 my-8'>{team.sale}</p>
            <div className='flex items-end my-10 gap-4'>
    
                <p className='text-white font-bold'>{team.text1}</p>
                <FaArrowRightLong  className='text-white w-5 h-5'/>
         
            </div>
    
        </div>
        <div>
            <img className='h-72 w-96' src={team.phone} alt="" />
        </div>
        </div>   
   

       ))}
        </SwiperSlide>
        <SwiperSlide >
        {teams.map(team=>(
        

       
        <div className='bg-black w-2/3 h-80 items-center justify-around flex my-6 pl-10 '>
        <div>
            <div className='flex items-center gap-3 my-8'>
                <img className='w-10 h-10' src={team.logo} alt="" />
                <p className='text-white font-bold'> {team.text}</p>
            </div>
            <p className='text-white text-5xl font-bold max-w-72 my-8'>{team.sale}</p>
            <div className='flex items-end my-10 gap-4'>
    
                <p className='text-white font-bold'>{team.text1}</p>
                <FaArrowRightLong  className='text-white w-5 h-5'/>
         
            </div>
    
        </div>
        <div>
            <img className='h-72 w-96' src={team.phone} alt="" />
        </div>
        </div>   
   

       ))}
        </SwiperSlide>
     
        <SwiperSlide >
        {teams.map(team=>(
        

       
        <div className='bg-black w-2/3 h-80 items-center justify-around flex my-6 pl-10 '>
        <div>
            <div className='flex items-center gap-3 my-8'>
                <img className='w-10 h-10' src={team.logo} alt="" />
                <p className='text-white font-bold'> {team.text}</p>
            </div>
            <p className='text-white text-5xl font-bold max-w-72 my-8'>{team.sale}</p>
            <div className='flex items-end my-10 gap-4'>
    
                <p className='text-white font-bold'>{team.text1}</p>
                <FaArrowRightLong  className='text-white w-5 h-5'/>
         
            </div>
    
        </div>
        <div>
            <img className='h-72 w-96' src={team.phone} alt="" />
        </div>
        </div>   
   

       ))}
        </SwiperSlide>
     
        <SwiperSlide >
        {teams.map(team=>(
        

       
        <div className='bg-black w-2/3 h-80 items-center justify-around flex my-6 pl-10 '>
        <div>
            <div className='flex items-center gap-3 my-8'>
                <img className='w-10 h-10' src={team.logo} alt="" />
                <p className='text-white font-bold'> {team.text}</p>
            </div>
            <p className='text-white text-5xl font-bold max-w-72 my-8'>{team.sale}</p>
            <div className='flex items-end my-10 gap-4'>
    
                <p className='text-white font-bold'>{team.text1}</p>
                <FaArrowRightLong  className='text-white w-5 h-5'/>
         
            </div>
    
        </div>
        <div>
            <img className='h-72 w-96' src={team.phone} alt="" />
        </div>
        </div>   
   

       ))}
        </SwiperSlide>
     
        <SwiperSlide >
        {teams.map(team=>(
        

       
        <div className='bg-black w-2/3 h-80 items-center justify-around flex my-6 pl-10 '>
        <div>
            <div className='flex items-center gap-3 my-8'>
                <img className='w-10 h-10' src={team.logo} alt="" />
                <p className='text-white font-bold'> {team.text}</p>
            </div>
            <p className='text-white text-5xl font-bold max-w-72 my-8'>{team.sale}</p>
            <div className='flex items-end my-10 gap-4'>
    
                <p className='text-white font-bold'>{team.text1}</p>
                <FaArrowRightLong  className='text-white w-5 h-5'/>
         
            </div>
    
        </div>
        <div>
            <img className='h-72 w-96' src={team.phone} alt="" />
        </div>
        </div>   
   

       ))}
        </SwiperSlide>
     
     
      
      </Swiper>
    </>
  );
}
