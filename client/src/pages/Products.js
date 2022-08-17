import React, { useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux';
import {getProductList} from '../slices/productSlice'
import ProductCard from '../components/ProductCard'
import {Link} from 'react-router-dom';
import { CardContainer,Back,Svg,Chariot,CardIcon,ItemsNumber,} from '../styles/components.styled';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Products = () => {
  const {isAuth} = useSelector((state)=>state.user);
  const {cartTotalQuantity} = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const productList = useSelector((state)=>state.product.productList)
    useEffect(()=>{
        dispatch(getProductList())
    },[dispatch])
    const fleche ="https://img.icons8.com/sf-black-filled/50/FFFFFF/double-left.png";
  return (
    <>
     <ToastContainer/>
    <Link to='/JoinUs'><Back><Svg src={fleche}/></Back></Link>
     {isAuth ? <Chariot>
      <CardIcon>
            <Link to='/ShoppingCard'><img src="https://img.icons8.com/material-outlined/35/000000/shopping-cart-loaded.png" alt=""/>
            </Link>
            <ItemsNumber>{cartTotalQuantity}</ItemsNumber>
            </CardIcon>
            </Chariot>
            :<></>}
    <CardContainer>
    {productList.map((product)=>(<ProductCard  key={product._id} product={product}/>))}<br/> <br/>
</CardContainer>
    </>
  )
}

export default Products