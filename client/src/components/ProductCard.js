
import {ProductImage,ProductName,ProductStat,ProductText,ProductPrice,Add,ProductContainer} from '../styles/components.styled'
import { addToCart } from '../slices/cardSlice';
import {useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom';
 const ProductCard = ({product}) => {
  const dispatch=useDispatch()
  const navigate = useNavigate()
  const handleAddToCart=(product)=>{
  dispatch(addToCart(product));
  navigate("/ShoppingCard") 
}
  return (
    <>
    <ProductContainer>
    <ProductImage background={product.productImage}/> 
        <ProductText>
      <ProductName>{product.productName}</ProductName>
      <ProductPrice>{product.productPrice}</ProductPrice>
      </ProductText>
      <ProductStat>
       <Add onClick = {()=>handleAddToCart(product)}>ADD TO CARD </Add>
      </ProductStat>
      </ProductContainer>
      
    </>
  )
}
export default ProductCard

