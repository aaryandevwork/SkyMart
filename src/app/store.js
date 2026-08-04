import { configureStore } from '@reduxjs/toolkit'
import AuthReducer from '../features/authSlice'
import CartReducer from '../features/cartSlice'

export const store = configureStore({
    reducer : {
        auth : AuthReducer,
        cart : CartReducer,
    }
})
