import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import wr from '../assets/Work.svg'
import wr1 from '../assets/Work1.svg'
import wr2 from '../assets/Work2.svg'
import nm from '../assets/Name.svg'
import { FaArrowRightLong } from "react-icons/fa6";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

export default function App() {

 
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
        <SwiperSlide className='' >
            <div className='flex items-center justify-around'>
                <div className='flex flex-col gap-0 items-center'>
                    <img className='w-72 h-72' src={wr} alt="" />
                    <p className='text-2xl font-bold'>Tom Cruise</p>
                    <p>Founder & Chairman</p>
                    <img className='w-12 h-12' src={nm} alt="" />
                </div>
                <div className='flex flex-col gap-0 items-center'>
                    <img className='w-72 h-72' src={wr1} alt="" />
                    <p className='text-2xl font-bold'>Emma Watson</p>
                    <p>Managing Director</p>
                    <img className='w-12 h-12' src={nm} alt="" />
                </div>
                <div className='flex flex-col gap-0 items-center'>
                    <img className='w-72 h-72' src={wr2} alt="" />
                    <p className='text-2xl font-bold'>Will Smith</p>
                    <p>Product Designer</p>
                    <img className='w-12 h-12' src={nm} alt="" />
                </div>
            </div>

        </SwiperSlide>
        <SwiperSlide className='' >
            <div className='flex items-center justify-around'>
                <div className='flex flex-col gap-0 items-center'>
                    <img className='w-72 h-72' src={wr} alt="" />
                    <p className='text-2xl font-bold'>Tom Cruise</p>
                    <p>Founder & Chairman</p>
                    <img className='w-12 h-12' src={nm} alt="" />
                </div>
                <div className='flex flex-col gap-0 items-center'>
                    <img className='w-72 h-72' src={wr1} alt="" />
                    <p className='text-2xl font-bold'>Emma Watson</p>
                    <p>Managing Director</p>
                    <img className='w-12 h-12' src={nm} alt="" />
                </div>
                <div className='flex flex-col gap-0 items-center'>
                    <img className='w-72 h-72' src={wr2} alt="" />
                    <p className='text-2xl font-bold'>Will Smith</p>
                    <p>Product Designer</p>
                    <img className='w-12 h-12' src={nm} alt="" />
                </div>
            </div>

        </SwiperSlide>
     
        <SwiperSlide className='' >
            <div className='flex items-center justify-around'>
                <div className='flex flex-col gap-0 items-center'>
                    <img className='w-72 h-72' src={wr} alt="" />
                    <p className='text-2xl font-bold'>Tom Cruise</p>
                    <p>Founder & Chairman</p>
                    <img className='w-12 h-12' src={nm} alt="" />
                </div>
                <div className='flex flex-col gap-0 items-center'>
                    <img className='w-72 h-72' src={wr1} alt="" />
                    <p className='text-2xl font-bold'>Emma Watson</p>
                    <p>Managing Director</p>
                    <img className='w-12 h-12' src={nm} alt="" />
                </div>
                <div className='flex flex-col gap-0 items-center'>
                    <img className='w-72 h-72' src={wr2} alt="" />
                    <p className='text-2xl font-bold'>Will Smith</p>
                    <p>Product Designer</p>
                    <img className='w-12 h-12' src={nm} alt="" />
                </div>
            </div>

        </SwiperSlide>
     
        <SwiperSlide className='' >
            <div className='flex items-center justify-around'>
                <div className='flex flex-col gap-0 items-center'>
                    <img className='w-72 h-72' src={wr} alt="" />
                    <p className='text-2xl font-bold'>Tom Cruise</p>
                    <p>Founder & Chairman</p>
                    <img className='w-12 h-12' src={nm} alt="" />
                </div>
                <div className='flex flex-col gap-0 items-center'>
                    <img className='w-72 h-72' src={wr1} alt="" />
                    <p className='text-2xl font-bold'>Emma Watson</p>
                    <p>Managing Director</p>
                    <img className='w-12 h-12' src={nm} alt="" />
                </div>
                <div className='flex flex-col gap-0 items-center'>
                    <img className='w-72 h-72' src={wr2} alt="" />
                    <p className='text-2xl font-bold'>Will Smith</p>
                    <p>Product Designer</p>
                    <img className='w-12 h-12' src={nm} alt="" />
                </div>
            </div>

        </SwiperSlide>
     
        <SwiperSlide className='' >
            <div className='flex items-center justify-around'>
                <div className='flex flex-col gap-0 items-center'>
                    <img className='w-72 h-72' src={wr} alt="" />
                    <p className='text-2xl font-bold'>Tom Cruise</p>
                    <p>Founder & Chairman</p>
                    <img className='w-12 h-12' src={nm} alt="" />
                </div>
                <div className='flex flex-col gap-0 items-center'>
                    <img className='w-72 h-72' src={wr1} alt="" />
                    <p className='text-2xl font-bold'>Emma Watson</p>
                    <p>Managing Director</p>
                    <img className='w-12 h-12' src={nm} alt="" />
                </div>
                <div className='flex flex-col gap-0 items-center'>
                    <img className='w-72 h-72' src={wr2} alt="" />
                    <p className='text-2xl font-bold'>Will Smith</p>
                    <p>Product Designer</p>
                    <img className='w-12 h-12' src={nm} alt="" />
                </div>
            </div>

        </SwiperSlide>
     
     
     
     
      
      </Swiper>
    </>
  );
}
