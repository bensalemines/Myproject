import {useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import PayButton from '../components/PayButton';

import {  removeFromCart,decreaseCart,clearCart,getTotals, addToCart } from '../slices/cardSlice';
import {Carte,NotYetParag,ButtonB,ShoppingTitle,JumpButton,P,HeadOfCard,TotalResult,Image,Checkout,Total,SubTotal,TotalAmount,BackToProducts,CartItems,ItemTitle,Prices,Remove,Amount,Counter,Count,Btn,ShoppingBagTitle,CardItem,ImageBox,RemoveAllButton} from '../styles/components.styled'

const ShoppingCard = () => {
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(getTotals())
    },[dispatch,cart]);
    const handleAddToCart=(product)=>{
        dispatch(addToCart(product));
        
    }
  //   const handleAddToCard=(event)=>{
  //     dispatch(addToCard(event));
  // }
    const orangefleche = "https://img.icons8.com/ios-filled/20/FD7E14/reply-arrow.png";
    const flechedroite = "https://img.icons8.com/sf-regular-filled/20/FD7E14/right3.png";
    const returnFleche = "https://img.icons8.com/material-rounded/20/000000/arrow-pointing-left.png";
    var totalamountprice = 0;
  return (
    <>
   <ToastContainer/>
    <Carte>
        {cart.cartItems.length === 0 ? (
            <>
             <ShoppingTitle style={{fontSize:"25px"}}>
             YOUR CAMPING BAG
            </ShoppingTitle>
            <NotYetParag>
                Your Bag is empty for now!! <br/> 
                You want a gorgeous camping adventure?  <br/> 
                Let's Go <Link to="/JoinUs"><JumpButton><P><Image src={orangefleche}/>HERE</P></JumpButton></Link> <br/>  <br/> 
                You don't have the camping material yet ?<br/> <br/>
                You can rent it from <Link to ="/products"> <JumpButton><P><Image src={flechedroite}/>HERE</P></JumpButton></Link> <br/> <br/> <br/>
                <Link to='/Home'><ButtonB>BACK HOME</ButtonB></Link>
            </NotYetParag>
            </>
        ) : 
        (<>
    <HeadOfCard>
        <ShoppingBagTitle>YOUR CAMPING BAG</ShoppingBagTitle>
        <RemoveAllButton onClick ={()=>dispatch(clearCart())}>Remove All</RemoveAllButton>
    </HeadOfCard>
    <CartItems>
   {cart.cartItems?.map((product)=>{
    totalamountprice +=
    parseInt(product.productPrice || product.eventPrice) * product.cartQuantity;
    return(
    <>
    <CardItem key={product._id}>
    <ImageBox src={product.productImage || product.eventImage}></ImageBox>
    <ItemTitle>{product.productName || product.eventName}</ItemTitle>

    <Counter>
    <Btn onClick={()=>dispatch(handleAddToCart(product))}>+</Btn>
    <Count>{product.cartQuantity}</Count>
    <Btn onClick={()=>dispatch(decreaseCart(product._id))}>-</Btn>
    </Counter>

     <Prices>
     <Amount>{parseInt (product.productPrice || product.eventPrice) * product.cartQuantity}DT</Amount>
     <Remove onClick={()=>dispatch(removeFromCart(product._id))}>Remove</Remove>
     </Prices>
     </CardItem>
     </>
    );
   })}
    </CartItems>

<TotalResult>
   
<Checkout>
<Total>
<SubTotal>TOTAL: </SubTotal>
<TotalAmount>{totalamountprice}DT</TotalAmount>
 </Total>            
 <PayButton cartItems ={cart.cartItems}/> 
<Link to="/Products"><BackToProducts><Image src={returnFleche}/>BACK TO PRODUCTS</BackToProducts></Link>
<Link to="/JoinUs"><BackToProducts><Image src={returnFleche}/>BACK TO EVENTS</BackToProducts></Link>
</Checkout>
</TotalResult>
  </>      
  )}
</Carte>
</>
   )};
  export default ShoppingCard   