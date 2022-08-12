import { createSlice } from "@reduxjs/toolkit";
import {toast} from 'react-toastify';

const initialState={
    cartItems:localStorage.getItem("cartItems")? JSON.parse(localStorage.getItem("cartItems")):
    [],
    cartTotalQuantity:0,
    cartTotalAmount:0,
};
const cartSlice = createSlice({
    name:'cart',
    initialState,
    //REDUCERS
    reducers:{
        addToCart:(state,action)=>{
            const itemIndex = state.cartItems.findIndex((product) => product._id === action.payload);
            console.log(itemIndex)
            if(itemIndex>=0){
               state.cartItems.cartQuantity +=1 
                toast.info("increased product quantity",{position:"buttom-left"})
            }else{
            state.cartItems.push( {...action.payload , cartQuantity:1});
            toast.success(`${action.payload.productName} added successfully`,{position:"bottom-left"})
        }
        localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
        },
        addToCard:(state,action)=>{
            const eventIndex = state.cartItems.findIndex((event) => event._id === action.payload);
            console.log(eventIndex)
            if(eventIndex>=0){
               state.cartItems.cartQuantity +=1 
                toast.info("increased product quantity",{position:"buttom-left"})
            }else{
            state.cartItems.push( {...action.payload , cartQuantity:1});
            toast.success(`${action.payload.eventName} added successfully`,{position:"bottom-left"})
        }
        localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
    }
        ,
        removeFromCart:(state,action)=>{
           const nextCartItems = state.cartItems = state.cartItems.filter((product) => product._id !== action.payload)
           state.cartItems=nextCartItems;
           localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
           toast.error('product removed from cart',{position:"bottom-left"})
        },
        removeFromCard:(state,action)=>{
            const nextCartItems = state.cartItems = state.cartItems.filter((event) => event._id !== action.payload)
            state.cartItems=nextCartItems;
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            toast.error('product removed from cart',{position:"bottom-left"})
         },

        decreaseCart:(state,action)=>{
           const itemIndex=state.cartItems.findIndex(
            (product) => product._id === action.payload
           )
           if (state.cartItems[itemIndex].cartQuantity>1){
            (state.cartItems[itemIndex].cartQuantity) -=1
            toast.info('product decreased from cart',{position:"bottom-left"})
           } else if(state.cartItems[itemIndex].cartQuantity === 1){
            const nextCartItems = state.cartItems = state.cartItems.filter((product) => product._id !== action.payload)
           state.cartItems=nextCartItems;
           toast.error('product removed from cart',{position:"bottom-left"})
           }
           localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
        decreaseCard:(state,action)=>{
            const eventIndex=state.cartItems.findIndex(
             (event) => event._id === action.payload
            )
            if (state.cartItems[eventIndex].cartQuantity>1){
             (state.cartItems[eventIndex].cartQuantity) -=1
             toast.info('product decreased from cart',{position:"bottom-left"})
            } else if(state.cartItems[eventIndex].cartQuantity === 1){
             const nextCartItems = state.cartItems = state.cartItems.filter((event) => event._id !== action.payload)
            state.cartItems=nextCartItems;
            toast.error('product removed from cart',{position:"bottom-left"})
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
         },
        clearCart : (state,action)=>{
            state.cartItems=[]
            toast.error('Cart Cleared',{position:"bottom-left"})
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
        getTotals:(state,action)=>{
            let {quantity,total} = state.cartItems.reduce(
                (cartTotal,cartItem)=>{
                    const { cartQuantity , productPrice } = cartItem
                    const itemTotal =(parseInt(productPrice))*cartQuantity
                    
                    cartTotal.total += itemTotal
                    cartTotal.quantity +=cartQuantity; 
                    return cartTotal;
                },
                {
                    quantity:0,
                    total:0

                }
            );
            state.cartTotalQuantity=quantity
            state.cartTotalAmount=total;
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        }
    },
   
})

export const {addToCard,addToCart,removeFromCart,removeFromCard,decreaseCart,decreaseCard,clearCart,getTotals} =cartSlice.actions;
export default cartSlice.reducer;