import React from 'react'
import {useDispatch,useSelector} from 'react-redux';
import {addToCart,decreaseCart,removeFromCart} from '../slices/cardSlice'

import {CartItems,CardItem,ImageBox,ItemTitle,Counter,Btn,Count,Prices,Amount,Remove} from '../styles/components.styled'

const ProductsShoppingCard = () => {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch;
    const handleAddToCart=(product)=>{
        dispatch(addToCart(product));
    }
  return (
    <>
    <CartItems>
    {cart.cartItems?.map(product=>(
     <>
     <CardItem key={product._id}>
     <ImageBox src={product.productImage}></ImageBox>
     <ItemTitle>{product.productName}</ItemTitle>
 
     <Counter>
     <Btn onClick={()=>dispatch(handleAddToCart(product._id))}>+</Btn>
     <Count>{product.cartQuantity}</Count>
     <Btn onClick={()=>dispatch(decreaseCart(product._id))}>-</Btn>
     </Counter>
 
      <Prices>
      <Amount>{(parseInt (product.productPrice) * product.cartQuantity)}DT</Amount>
      <Remove onClick={()=>dispatch(removeFromCart(product._id))}>Remove</Remove>
      </Prices>
      </CardItem>
      </>
    ))}
     </CartItems>
     </>
  )
}

export default ProductsShoppingCard