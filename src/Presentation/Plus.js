import { createSlice } from '@reduxjs/toolkit'

import star from '../assets/star.svg'
import a7 from '../assets/a6.svg'
import a6 from '../assets/a7.svg'

import a2 from '../assets/a5.svg'
import a3 from '../assets/a4.svg'
import a4 from '../assets/a3.svg'
import a5 from '../assets/a2.svg'
import { FaRegTrashAlt } from "react-icons/fa";
const initialState = {

  data: [
    {
      id: 1,
      name: "HAVIT HV-G92 Gamepad",
      img: a5,
      text: '120$',
      total: "160$",
      icone: star,
      vest: "88",
      like: false,
      icon: 'Delete',
      buy0:'Buy now!',
      link:'/into',
      but:false
  

    },
    {
      id: 2,
      name: "HAVIT HV-G92 Gamepad",
      img: a4,
      text: '120$',
      total: "160$",
      icone: star,
      vest: "88",
      like: false,
      icon: 'Delete',
      buy1:'Buy now!',
      link:'/intoe',
      but:false
    },
    {
      id: 3,
      name: "HAVIT HV-G92 Gamepad",
      img: a7,
      text: '120$',
      total: "160$",
      icone: star,
      vest: "88",
      like: false,
      icon: 'Delete',
      buy:'Buy now!',
      but:false
    },
    {
      id: 4,
      name: "HAVIT HV-G92 Gamepad",
      img: a6,
      text: '120$',
      total: "160$",
      icone: star,
      vest: "88",
      like: false,
      icon: 'Delete',
      buy:'Buy now!',
      but:false
    },
    {
      id: 5,
      name: "HAVIT HV-G92 Gamepad",
      img: a2,
      text: '120$',
      total: "160$",
      icone: star,
      vest: "88",
      like: false,
      icon: 'Delete',
      buy:'Buy now!',
      but:false
    },
    {
      id: 6,
      name: "HAVIT HV-G92 Gamepad",
      img: a3,
      text: '120$',
      total: "160$",
      icone: star,
      vest: "88",
      like: false,
      icon: 'Delete',
      buy:'Buy now!',
      but:false
    },

  ],
 
  shops:[],
  
 


  shop:[],




  likes: [],
  value: 0,





}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    getId:(state,{payload})=>{
       state.id = payload;
    },
    increment: (state, { }) => {

      state.value += 1
    },
    decrement: (state) => {
      state.value += 1
    },
    Changecolor: (state, { payload }) => {
      state.data.color = payload
    },
    onLike: (state, { payload }) => {
     
      state.data = state.data.map(v => v.id == payload ? { ...v, like: !v.like } : v)
    },
    onnLike: (state, { payload }) => {
     
      state.data = state.data.map(v => v.id == payload ? { ...v, but: !v.but } : v)
      console.log(payload);
    },
    
    addLike: (state, { payload }) => {
      let isHave = state.likes.find(v => v.id == payload);
      if (!isHave) {
        let res = state.data.filter(v => v.id == payload)
        state.likes = [...state.likes, ...res]

      } else {
        state.likes = state.likes.filter(v => v.id !== payload)
      }

    },
    adddLike: (state, { payload }) => {
      let isHave = state.shop.find(v => v.id == payload);
      if (!isHave) {
        let res = state.data.filter(v => v.id == payload)
        state.shop = [...state.shop, ...res]

      } else {
        state.shop = state.shop.filter(v => v.id !== payload)
      }

    },
  


  },
})

export const { getId, increment, decrement, incrementByAmount,onnLike, Changecolor, onLike, addLike,adddeLike, data,adddLike } = counterSlice.actions

export default counterSlice.reducer