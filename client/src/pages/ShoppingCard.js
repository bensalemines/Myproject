import {useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {Link } from 'react-router-dom';
import PayButton from '../components/PayButton';

import {  removeFromCart,decreaseCart,clearCart,getTotals, addToCart } from '../slices/cardSlice';
import {Carte,NotYetParag,ShoppingTitle,JumpButton,P,HeadOfCard,TotalResult,Image,Checkout,Total,SubTotal,TotalAmount,BackToProducts,CartItems,ItemTitle,Prices,Remove,Amount,Counter,Count,Btn,ShoppingBagTitle,CardItem,ImageBox,RemoveAllButton} from '../styles/components.styled'

const ShoppingCard = () => {
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(getTotals())
    },[dispatch,cart]);
    const handleAddToCart=(product)=>{
        dispatch(addToCart(product));
        console.log(product)
    }
  //   const handleAddToCard=(event)=>{
  //     dispatch(addToCard(event));
  // }
    const orangefleche = "https://img.icons8.com/ios-filled/20/FD7E14/reply-arrow.png";
    const flechedroite = "https://img.icons8.com/sf-regular-filled/20/FD7E14/right3.png";
    const returnFleche = "https://img.icons8.com/ios-glyphs/20/000000/reply-arrow.png";
  return (
    <Carte>
        {cart.cartItems.length === 0 ? (
            <>
             <ShoppingTitle>
             YOUR CAMPING BAG
            </ShoppingTitle>
            <NotYetParag>
                Your Bag is empty for now!! <br/> <br/> <br/>
                You want a gorgeous camping adventure?  <br/> <br/>
                Let's Go <Link to="/JoinUs"><JumpButton><P><Image src={orangefleche}/>HERE</P></JumpButton></Link> <br/> <br/> <br/> <br/> <br/>
                You don't have the camping material yet ?<br/> <br/>
                You can rent it from <Link to ="/products"> <JumpButton><P><Image src={flechedroite}/>HERE</P></JumpButton></Link>
            </NotYetParag>
            </>
        ) : 
        (<>
    <HeadOfCard>
        <ShoppingBagTitle>YOUR CAMPING BAG</ShoppingBagTitle>
        <RemoveAllButton onClick ={()=>dispatch(clearCart())}>Remove All</RemoveAllButton>
    </HeadOfCard>
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
   {/* <CartItems>
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
     */}

<TotalResult>
   
<Checkout>
<Total>
<SubTotal>TOTAL: </SubTotal>
<TotalAmount>{cart.cartTotalAmount}DT</TotalAmount>
 </Total>            
 <PayButton cartItems ={cart.cartItems}/> 
<Link to="/Products"><BackToProducts><Image src={returnFleche}/>CONTINUE SHOPPING</BackToProducts></Link>
</Checkout>
</TotalResult>
  </>      )}
</Carte>

   )}
  export default ShoppingCard   