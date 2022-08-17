import {useState} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import Button from '@mui/material/Button';
// import {useSelector} from 'react-redux'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import styled from 'styled-components';
import React from 'react';
import { productsEdit } from '../../slices/productSlice';

export default function EditProduct({prodId}) {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
//   const { createStatus } = useSelector((state) => state.products);
const productList = useSelector((state)=>state.product.productList)
const [currentProd,setCurrentProd] = useState({})
const [previewImg,setPreviewImg] = useState("")
  const [productImg, setProductImg] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleProductImageUpload = (e) => {
    const file = e.target.files[0];

    TransformFileData(file);
  };

  const TransformFileData = (file) => {
    const reader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setProductImg(reader.result);
      };
    } else {
      setProductImg("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(
      productsEdit({
        productImg,
        product:{
          ...currentProd,
          name:name,
          price:price,
        }
      })
    );
  };

  const handleClickOpen = () => {
    setOpen(true);
    let selectedProd = productList.filter((product) => product._id === prodId)
    selectedProd = selectedProd[0]
    setCurrentProd(selectedProd)
    setPreviewImg(selectedProd.productImage)
    setProductImg("")
    setName(selectedProd.productName)
    setPrice(selectedProd.productPrice)

  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Edit  onClick={handleClickOpen}>
       EDIT
      </Edit>
      <Dialog open={open} onClose={handleClose} fullWidth = {true} maxWidth={"md"}>
        <DialogTitle style={{color:"#77c1fe",fontWeight:"bold"}}>Edit product</DialogTitle>
        <DialogContent>
        <StyledEditProduct>
      <StyledForm onSubmit={handleSubmit}>
        <input
          id="imgUpload"
          accept="image/*"
          type="file"
          onChange={handleProductImageUpload}
        />
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <PrimaryButton type="submit">
         UPDATE
        </PrimaryButton>
      </StyledForm>
      <ImagePreview>
        {previewImg ? (
          <>
            <img src={previewImg} alt="error!" />
          </>
        ) : (
          <p>Product image upload preview will appear here!</p>
        )}
      </ImagePreview>
    </StyledEditProduct>
    </DialogContent>
        <DialogActions>
          <Button style={{color:"red",fontWeight:"bold"}}onClick={handleClose}>Cancel</Button>
          <Button style={{color:"green",fontWeight:"bold"}} onClick={handleClose}>Confirm</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}


const Edit = styled.button`
border:none;
outline:none;
padding:3px 5px;
color:white;
border-radius:3px;
cursor:pointer;
background-color:green;
`;


const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin-top: 2rem;
  select,
  input {
    padding: 7px;
    min-height: 30px;
    outline: none;
    border-radius: 5px;
    border: 3px solid black;
    margin: 1rem 0;
    &:focus {
      border: 2px solid rgb(0, 208, 255);
    }
  }
  select {
    color: rgb(95, 95, 95);
  }
`;

const StyledEditProduct = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ImagePreview = styled.div`
  margin: 2rem 0 2rem 2rem;
  padding: 2rem;
  border: 1px solid black;
  max-width: 300px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  color: rgb(78, 78, 78);
  img {
    max-width: 100%;
  }
`;
export const PrimaryButton = styled.button`
  padding: 15px;
  border-radius: 10px;
  font-weight: bold;
  background-color: #77c1fe;
  color: black;
  border: none;
  outline: none;
  cursor: pointer;
  margin: 0.5rem 0;
  &:hover{
    background-color:blue;
  }
`;
