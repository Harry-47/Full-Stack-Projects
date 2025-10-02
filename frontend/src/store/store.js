import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../pages/User/Cartpage/cartSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;