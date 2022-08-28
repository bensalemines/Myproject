import {useEffect} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import styled from 'styled-components';
import {useDispatch, useSelector} from 'react-redux';
import { getProductList } from '../../slices/productSlice';
import { productsDelete } from '../../slices/productSlice';
import EditProduct from './EditProduct';
import CreateProduct from './CreateProduct';


export default function Product() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getProductList())
},[dispatch])
  const productList = useSelector((state)=>state.product.productList)
    const rows =  productList && productList.map(product=>{
        return{
            id: product._id,
            image:product.productImage,
            pName:product.productName,
            price:product.productPrice.toLocaleString(),

        }
       
    });
     console.log(rows)
    const columns = [
      { field: 'id', headerName: 'ID', width: 220 },
      { field: 'image', headerName: 'IMAGE', width: 80 ,
      renderCell:(params) =>{
        return(
            <ImageContainer>
                <img src={params.row.image} alt=""/>
            </ImageContainer>
        )
        }},
      { field: 'pName', headerName: 'PRODUCT NAME', width: 200 },
      {
        field: 'price',
        headerName: 'Price',
        type: 'number',
        width: 90,
      },
      {
        field: 'actions',
        headerName: 'Actions',
        sortable: false,
        width: 150,
        renderCell:(params) =>{
          return(
              <Actions>
                <Delete onClick={()=> handleDelete(params.row.id)}>DELETE</Delete>
                <EditProduct prodId = {params.row.id}/>
              </Actions>
          )
      },
    }
    ];
    const handleDelete = (_id)=>{
      dispatch(productsDelete(_id))
      dispatch(getProductList())
      console.log(_id)
    }
  return (
    <>
    <div style={{marginLeft:'50%'}}>
      <CreateProduct/>
    </div>
    <div style={{ height: 300, width: '50%', marginLeft:'550px',marginTop:'50px', border:'black solid 4px' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={6}
        rowsPerPageOptions={[6]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
    </>
  );
}
const ImageContainer = styled.div`
img{
    height:40px;
}
`;
const Actions = styled.div`
width:100%;
display:flex;
justify-content:space-between;
button{
    border:none;
    outline:none;
    padding: 3px 5px;
    color:white;
    border-radius:3px;
    cursor:pointer;
}
`;
const Delete = styled.button`
background-color:red;

`;

