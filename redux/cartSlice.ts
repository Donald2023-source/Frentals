import { createSlice } from '@reduxjs/toolkit'
import { ProductData, User } from '@/types';
import { ActiveWorkspaceMatcher } from 'sanity';
interface InitialState {
    cart: ProductData[];
    favourite: ProductData[];
    user: User[];
}

const initialState: InitialState = {
    cart: [],
    favourite: [],
    user: []
}
export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingProduct = state?.cart?.find((item) => item?._id === action.payload._id)
            if(existingProduct) {
                existingProduct.quantity! =+1
            } else {
                state.cart.push({ ... action.payload, quantity: 1})
            }
        },

        increaseQuantity: (state, action) => {
            const existingProduct = state?.cart?.find((item) => item?._id === action.payload);
            if(existingProduct) {
                existingProduct.quantity! += 1
            }
        },

        decreaseQuantity: (state, action) => {
            const exisitingProduct = state?.cart?.find((item) => item?._id === action.payload);
            if(exisitingProduct) {
                exisitingProduct.quantity! -= 1;
            }
        },

        removeFromCart:(state, action) => {
            state.cart = state.cart.filter((item) => item?._id !== action.payload);
        },
        resetCart: (state) => {
            state.cart = []
        },

        addToFavourite: (state, action) => {
            const existingProduct = state?.favourite.find((item) => item?._id === action.payload?._id);
            if(existingProduct) {
                state.favourite = state.favourite.filter((item) => item?._id !== action.payload?._id)
            } else {
                state.favourite.push(action.payload)
            }
        },

        addUser: (state, action) => {
            state.user.push(action.payload)
        },

        removeUser: (state) => {
            state.user = []
        },
        
        resetFavourite: (state) => {
            state.favourite = []
        }
    }
})

export const { addToCart, removeFromCart, resetCart, increaseQuantity, decreaseQuantity, addToFavourite, resetFavourite} = cartSlice.actions;

export default cartSlice.reducer;