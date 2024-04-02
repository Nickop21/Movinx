import { configureStore } from '@reduxjs/toolkit'
import homeSlice from './homeslice'



 const store = configureStore({
  reducer: {
    home: homeSlice, //key :val

  },
})
export default store