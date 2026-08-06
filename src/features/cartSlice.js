import { createSlice } from "@reduxjs/toolkit";

// halper function 
const saveCart = (cartItems) => {
  localStorage.setItem("cart", JSON.stringify(cartItems));
};

const initialState = {
    cartItems : JSON.parse(localStorage.getItem("cart")) || [],
    isCartOpen : false,
    cartValue : 0,
}


const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers : {
        toggleCart : (state) => {
            state.isCartOpen = !state.isCartOpen;
        },
        addToCart : (state, action) => {
            console.log("inside cart slice : ",action.payload);
            const existingItem = state.cartItems.find((item) => item.id === action.payload.id);
            
            if(existingItem){
                existingItem.quantity += 1;
            }
            else{
                state.cartItems.push({...action.payload,quantity : 1});
            }
            saveCart(state.cartItems);
        },
        increaseQuantity : (state,action) => {
            const existingItem = state.cartItems.find((item) => item.id === action.payload)

            if(existingItem){
                existingItem.quantity += 1;
            }
            saveCart(state.cartItems);
        },
        decreaseQuantity : (state,action) => {
            const existingItem = state.cartItems.find((item) => item.id === action.payload)

            if(existingItem.quantity > 1){
                existingItem.quantity -= 1;
            }
            else{
                state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
            }

            saveCart(state.cartItems);
        },
        removeFromCart : (state,action) => {
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
            saveCart(state.cartItems);
        },
        clearCart : (state) => {
            state.cartItems = [];
            saveCart(state.cartItems);
        },
        setCartValue : (state, action) => {
            state.cartValue = action.payload;
        }
        
    }
})

export const { addToCart,increaseQuantity ,decreaseQuantity, removeFromCart ,toggleCart ,clearCart, setCartValue } = cartSlice.actions;
export default cartSlice.reducer;