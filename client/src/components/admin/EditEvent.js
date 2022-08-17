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
import { eventEdit } from '../../slices/eventSlice';

export default function EditEvent({eventId}) {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
//   const { createStatus } = useSelector((state) => state.products);
const eventList = useSelector((state)=>state.event.eventList)
const [currentEvent,setCurrentEvent] = useState({})
const [previewImg,setPreviewImg] = useState("")
  const [eventImg, setEventImg] = useState("");
  const [date,setDate]= useState("")
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleEventImageUpload = (e) => {
    const file = e.target.files[0];

    TransformFileData(file);
  };

  const TransformFileData = (file) => {
    const reader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setEventImg(reader.result);
      };
    } else {
      setEventImg("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(
      eventEdit({
        eventImg,
       event:{
          ...currentEvent,
          name:name,
          price:price,
          date:date
        }
      })
    );
  };

  const handleClickOpen = () => {
    setOpen(true);
    let selectedEvent = eventList.filter((event) => event._id === eventId)
    selectedEvent = selectedEvent[0]
    setCurrentEvent(selectedEvent)
    setPreviewImg(selectedEvent.eventImage)
    setEventImg("")
    setName(selectedEvent.eventName)
    setPrice(selectedEvent.eventPrice)

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
        <DialogTitle style={{color:"#77c1fe",fontWeight:"bold"}}>Edit Event</DialogTitle>
        <DialogContent>
        <StyledEditEvent>
      <StyledForm onSubmit={handleSubmit}>
        <input
          id="imgUpload"
          accept="image/*"
          type="file"
          onChange={handleEventImageUpload}
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
         <input
          type="text"
          placeholder="Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
         
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
          <p>Event image upload preview will appear here!</p>
        )}
      </ImagePreview>
    </StyledEditEvent>
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
  width: 300px;
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

const StyledEditEvent = styled.div`
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
