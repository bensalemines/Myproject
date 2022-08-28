import React, { useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux';
import {getProductList} from '../slices/productSlice'
import ProductCard from '../components/ProductCard'
import { CardContainer} from '../styles/components.styled';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../components/Navbar';

const Products = () => {
    const dispatch = useDispatch()
    const productList = useSelector((state)=>state.product.productList)
    useEffect(()=>{
        dispatch(getProductList())
    },[dispatch])
  return (
    <>
   
     <ToastContainer/>
     <Navbar/>
    <CardContainer>
    {productList.map((product)=>(<ProductCard  key={product._id} product={product}/>))}<br/> <br/>
</CardContainer>
    </>
  )
}

export default Products