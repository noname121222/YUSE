import axios from 'axios';
import React, { useState } from 'react'
import cont from '../assets/Tele.svg'

import conte from '../assets/Tele2.svg'
import Black from './Black';

const Contacte = () => {
    const [loading,sendLoading] = useState(true)
    const SendMessage=(event)=>{
        event.preventDefault();
        const token = "7261403029:AAHBKcR9ZDSecvzdqCuiBF3tL2x5oamIPBI";
        const chat_id =5203595510;
        const url =`https://api.telegram.org/bot${token}/sendMessage`;
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const ms = document.getElementById("message").value;
        const send =`Name: ${name} \nEmail: ${email} \nPassword: ${password} \nMessage: ${ms}`
 axios({
    url:url,
    method:'Post',
    data:{
        "chat_id":chat_id,
        "text":send,
       
    }
 }).then ((res)=>{
    document.getElementById("YUS").reset();
    alert("Your message has been sent")
 }).catch((error)=>{
    console.log("Your message has not been sent");
 }).finally(()=>{
    sendLoading(false)
 })
    }
  return (
    <>

    <div className='flex items-center justify-around my-20'>
    <div className='bg-slate-50 py-7 px-14  w-96'>
        <div className='flex items-center gap-3'>
            <img src={cont} alt="" />

            <p className='text-xl font-bold'>Call To Us</p>
        </div>
        <div className='flex flex-col gap-2  mt-5'>
        <p>We are available 24/7, 7 days a week.</p>
        <p>  Phone: +8801611112222</p>
        </div>
        <div className='border-black mt-8 border-b-2'>

        </div>
        <div className='flex items-center gap-4 mt-8'>
            <img src={conte} alt="" />

            <p className='text-xl font-bold'>Write To US</p>
        </div>
        <div className='flex flex-col gap-2  mt-5'>
        <p>Fill out our form and we will contact you within 24 hours.</p>
        <p>  Emails: customer@exclusive.com</p>
        <p>Emails: support@exclusive.com</p>
        </div>


   
  
    </div>
    <div>
    <form className='flex flex-col gap-4 bg-slate-50 py-7 px-7'  id="YUS" onSubmit={SendMessage}>
        <div className='flex  gap-4 '>
        <input placeholder='Your Name' className='border border-black px-3 h-10 ' type="text" id='name' />

<input placeholder='Your Email' className='border border-black px-3 h-10' type="email" id='email'/>

<input placeholder='Your Phone' className='border border-black px-3 h-10 ' type="phone" id='password' />
            
        </div>
       
       
        <div className='' class="tp">
<textarea className='border border-black w-full h-60 py-2 px-3' name="area" id="message" placeholder="Your Message"></textarea>
</div>
<div className='ml-10'>
<button className='btn bg-red-600 ml-96  text-white font-bold mt-4 w-56' type='' loading ={loading}>Send Message</button>


</div>
       

    </form>
  


    </div>



    </div>
  

  <Black/>
    
    </>
  )
}

export default Contacte