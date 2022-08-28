import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import React from 'react';
import { addNewProduct } from "../../slices/productSlice";

const CreateProduct = () => {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false);
  const [productImg, setProductImg] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleProductImageUpload = (e) => {
    const file = e.target.files[0];

    TransformFileData(file);
  };
 
  
  const handleClose = () => {
    setOpen(false);
  };


  const TransformFileData = (file) => {

    if (file) {
      // reader.readAsDataURL(file);
      // reader.onloadend = () => {
        
      // };
      setProductImg(file);
    } else {
      setProductImg("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(
      addNewProduct({
        name,
        price,
        image: productImg,
      })
    );
  };
  const handleClickOpen = () => {
    setOpen(true);
  }

  return (
    <div>
      <AddProduct  onClick={handleClickOpen}>
       CREATE NEW PRODUCT
      </AddProduct>
      <Dialog open={open} onClose={handleClose} fullWidth = {true} maxWidth={"md"}>
        <DialogTitle style={{color:"green",fontWeight:"bold"}} > CREATE NEW PRODUCT</DialogTitle>
        <DialogContent>
        <StyledCreateProduct>
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
         ADD
        </PrimaryButton>
      </StyledForm>
      <ImagePreview>
        {productImg ? (
          <>
            <img src={productImg} alt="error!" />
          </>
        ) : (
          <p>Product image upload preview will appear here!</p>
        )}
      </ImagePreview>
    </StyledCreateProduct>
    </DialogContent>
        <DialogActions>
          <Button style={{color:"red",fontWeight:"bold"}} onClick={handleClose}>Cancel</Button>
          <Button style={{color:"green",fontWeight:"bold"}} onClick={handleClose}>Confirm</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CreateProduct;
const AddProduct = styled.button`
border:none;
outline:none;
margin-top:-30px;
padding:20px;
font-weight:bold;
color:white;
border-radius:10px;
cursor:pointer;
background-image: linear-gradient(to left, #060606,#002045  );
`;


const StyledCreateProduct = styled.div`
  display: flex;
  justify-content: space-between;
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
    margin: 0.5rem 0;
    &:focus {
      border: 2px solid rgb(0, 208, 255);
    }
  }
  select {
    color: rgb(95, 95, 95);
  }
`;

export const PrimaryButton = styled.button`
  padding: 15px;
  border-radius: 5px;
  font-weight: bold;
  background-color:  #46b950;
  color:black;
  font-size:15px;
  border: none;
  outline: none;
  cursor: pointer;
  margin: 0.5rem 0;
  &:hover{
    background-color:#107d39;
  }
 
`;

const ImagePreview = styled.div`
  margin: 2rem 0 2rem 2rem;
  padding: 2rem;
  border: 3px solid black;
  max-width: 300px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  color: rgb(78, 78, 78);
  p{
    color:black;
  }
  img {
    max-width: 100%;
  }
`;