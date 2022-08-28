import {NavLink, Outlet} from "react-router-dom";
import styled from "styled-components";
import {useSelector} from "react-redux";
import {FaUsers,FaStore,FaTachometerAlt} from "react-icons/fa";
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {Link} from 'react-router-dom';
import Box from '@mui/material/Box';
// import '../../styles/style.css'
import React from "react";
import {useDispatch} from 'react-redux';
import { logoutUser } from "../../slices/userSlices";


const Dashboard = () =>{
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const {isAuth,userInfo} = useSelector((state)=>state.user);
    const dispatch= useDispatch()
    const logout = () =>{
        dispatch(logoutUser())
      };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
      };
      const handleCloseUserMenu = () => {
        setAnchorElUser(null);
      };

    if (!isAuth && userInfo.role ==='user') return <p>Access denied.</p>
    return(
        <>
        <StyledDashboard>
            <DashboardHeader>
            <DashboardTitle> Dashboard </DashboardTitle>
            <AvatarDiv>
            <Box sx={{ flexGrow: 0 }} >
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="A" src="../../assets/user.jpg" style={{backgroundColor:"#f5be00",marginTop:'10px'}}/>
              </IconButton>
            </Tooltip>
            <Menu
             style={{marginRight:'10px'}}
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
                <MenuItem  onClick={handleCloseUserMenu}>
                  {userInfo.role ==='admin' &&
                  <Link to='/admin' textAlign="center" style={{textDecoration:'none' , color:'black'}}>
                    Dashboard</Link>
                    }
                </MenuItem>
            
                <MenuItem  onClick={handleCloseUserMenu}>
                  <Link to='/Home' textAlign="center" style={{textDecoration:'none' , color:'black'}}>
                    Home</Link>
                </MenuItem>

                <MenuItem  onClick={handleCloseUserMenu}>
                  <Link to='/JoinUs' textAlign="center" style={{textDecoration:'none' , color:'black'}}>
                    Events</Link>
                </MenuItem>

                <MenuItem  onClick={handleCloseUserMenu}>
                  <Link to='/Products' textAlign="center" style={{textDecoration:'none' , color:'black'}}>
                    Products</Link>
                </MenuItem>

                <MenuItem  onClick={handleCloseUserMenu}>
                  <Link to='/AboutUs' textAlign="center" style={{textDecoration:'none' , color:'black'}}>
                    About</Link>
                </MenuItem>

                <MenuItem  onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" onClick={logout}> Logout </Typography>
                </MenuItem>
            </Menu>
            </Box>
            </AvatarDiv>
            </DashboardHeader>
            <SideNav>
                <h3>Quick Links</h3>
                <NavLink  className={({isActive})=>
                isActive? "link-active" : "link-inactive"
                  }
            to="/admin/Summary"
            >
                <FaTachometerAlt/> Summary
            </NavLink>
            <NavLink className={({isActive})=>
                isActive? "link-active" : "link-inactive"
            }to="/admin/Product"
            >
                <FaStore/>Products
            </NavLink>
            <NavLink className={({isActive})=>
                isActive? "link-active" : "link-inactive"
            }to="/admin/Events"
            >
                <FaUsers/> Events
            </NavLink>
            <NavLink className={({isActive})=>
                isActive? "link-active" : "link-inactive"
            }to="/admin/Users"
            >
                <FaUsers/> Users
            </NavLink>
            </SideNav>
        </StyledDashboard>
        <Outlet/>
        </>
    )
};
export default Dashboard;

const StyledDashboard = styled.div`
display:flex;
margin-top:0px;

`;
export const AvatarDiv = styled.div`
margin-left:1400px;
`
const DashboardHeader = styled.div`
display:flex;
flex-direction:space-between;

`
const DashboardTitle = styled.h1`
text-align:center;
margin:40px;
margin-top:10px;

`
const SideNav = styled.div`
height: calc(100vh - 70px);

position:fixed;
overflow-y:auto;
width:200px;
display:flex;
border-radius:10px;
margin-top:-5px;
flex-direction:column;
padding:3rem;
left:0;
buttom:0;
h3{
    margin-bottom:30px;
    padding:0;
    font-size:22px;
    margin-top:60px;
    color:#aaafcf;

}
a{
  text-decoration:none;
  margin-bottom:3rem;
  font-size:15px;
  display:flex;
  color:black;
  align-items:center;
  svg{
    margin-right:0.5rem;
    font-size:15px;
    }
}
`;
// const Content = styled.div`
// margin-left:200px;
// padding: 2rem 3rem;
// width:100%;
// `

