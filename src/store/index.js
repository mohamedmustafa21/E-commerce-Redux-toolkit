import { configureStore } from '@reduxjs/toolkit'
import  products  from './api.slice'

export default configureStore({
    reducer: {
      products,
    },
  });