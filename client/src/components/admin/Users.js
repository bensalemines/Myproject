import {useEffect} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import styled from 'styled-components';
import {useDispatch, useSelector} from 'react-redux';
// import EditProduct from './EditProduct';
// import CreateProduct from './CreateProduct';
import { getUserList, userDelete } from '../../slices/userSlices';


export default function Users() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getUserList())
},[dispatch])
//   useEffect(()=>{
//     dispatch(())
// },[dispatch])
  const userList = useSelector((state)=>state.user.userList)
    const rows =  userList && userList.map(user=>{
        return{
            id: user._id,
            userName:`${user.userName} ${user.userLastName}`,
            gender:user.gender,
            email:user.email,
            pNumber:user.phoneNumber,
            age:user.age,


        }
       
    });
     console.log(rows)
    const columns = [
      { field: 'id', headerName: 'ID', width: 150 },
      { field: 'userName', headerName: 'USER FULL NAME', width: 220 },
      { field: 'gender', headerName: 'GENDER', width: 80 },
      { field: 'email', headerName: 'EMAIL', width: 200 },
      {
        field: 'age',
        headerName: 'AGE',
        type: 'number',
        width: 70,
      },
      {
        field: 'pNumber',
        headerName: 'PHONE NUMBER',
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
                {/* <EditProduct prodId = {params.row.id}/> */}
              </Actions>
          )
      },
    }
    ];
    const handleDelete = (_id)=>{
      dispatch(userDelete(_id))
      dispatch(getUserList())
      console.log(_id)
    }
  return (
    <>
    {/* <div style={{marginLeft:'50%'}}>
      <CreateProduct/>
    </div> */}
    <div style={{ height: 500, width: '60%', marginLeft:'550px',marginTop:'100px', border:'black solid 4px' }}>
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
// const ImageContainer = styled.div`
// img{
//     height:40px;
// }
// `;
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

