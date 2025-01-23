import { configureStore } from '@reduxjs/toolkit'
import  counterSlice from './Plus'

export const store = configureStore({
  reducer: {
    todo:counterSlice,
  },
})