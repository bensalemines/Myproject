import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {addToCard,removeFromCard,decreaseCard} from '../slices/cardSlice'

import {CartItems,CardItem,ImageBox,ItemTitle,Counter,Btn,Count,Prices,Amount,Remove} from '../styles/components.styled'
const EventShoppingCard = () => {
    const dispatch = useDispatch
    const handleAddToCard=(event)=>{
        dispatch(addToCard(event));
    }
    const cart = useSelector(state => state.cart)
return(
<CartItems>
{cart.cartItems?.map(event=>(
<>
<CardItem key={event._id}>
<ImageBox src={event.eventImage}></ImageBox>
<ItemTitle>{event.eventName}</ItemTitle>

<Counter>
<Btn onClick={()=>dispatch(handleAddToCard(event._id))}>+</Btn>
<Count>{event.cartQuantity}</Count>
<Btn onClick={()=>dispatch(decreaseCard(event._id))}>-</Btn>
</Counter>

 <Prices>
 <Amount>{(parseInt (event.eventPrice) * event.cartQuantity)}DT</Amount>
 <Remove onClick={()=>dispatch(removeFromCard(event._id))}>Remove</Remove>
 </Prices>
 </CardItem>
 </>
))}
 </CartItems>
 )}

 export default EventShoppingCard 
