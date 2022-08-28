import {useEffect} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import styled from 'styled-components';
import {useDispatch, useSelector} from 'react-redux';

import EditEvent from './EditEvent';
// import CreateProduct from './CreateProduct';
import { eventDelete, getEventList } from '../../slices/eventSlice';
import CreateEvent from './CreateEvent';


export default function Events() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getEventList())
},[dispatch])
const eventList =useSelector((state)=> state.event.eventList)
    const rows =  eventList && eventList.map(event=>{
        return{
            id: event._id,
            image:event.eventImage,
            eName:event.eventName,
            price:event.eventPrice.toLocaleString(),
            eDate:event.eventDate,

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
      { field: 'eName', headerName: 'EVENT', width: 200 },
      { field: 'eDate', headerName: 'EVENT DATE', width: 100, type:'date' },
      {
        field: 'price',
        headerName: 'PRICE',
        type: 'number',
        width: 120,
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
                <EditEvent eventId = {params.row.id}/>
              </Actions>
          )
      },
    }
    ];
    const handleDelete = (_id)=>{
      dispatch(eventDelete(_id))
      dispatch(getEventList())
      console.log(_id)
    }
  return (
    <>
    <div style={{marginLeft:'50%'}}>
      <CreateEvent/>
    </div>
    <div style={{ height: 430, width: '55%', marginLeft:'550px',marginTop:'50px', border:'black solid 4px' }}>
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