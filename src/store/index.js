import { configureStore } from '@reduxjs/toolkit'
import  products  from './api.slice'
import authSlice from './signup';

export default configureStore({
    reducer: {
      products,
      authSlice,
      
    },
  });