import React, { useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux';
import {getProductList} from '../slices/productSlice'
import ProductCard from '../components/ProductCard'
import {Link} from 'react-router-dom';
import { CardContainer,Back,Svg} from '../styles/components.styled';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Products = () => {
    const dispatch = useDispatch()
    const productList = useSelector((state)=>state.product.productList)
    useEffect(()=>{
        dispatch(getProductList())
    },[dispatch])
    const fleche = "https://img.icons8.com/sf-black-filled/50/FFFFFF/double-left.png";
  return (
    <>
     <ToastContainer/>
    <Link to='/Booking'><Back><Svg src={fleche}/></Back></Link>
    <CardContainer>
    {productList.map((product)=>(<ProductCard  key={product._id} product={product}/>))}<br/> <br/>
</CardContainer>
    </>
  )
}

export default Products