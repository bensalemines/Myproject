import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import {Link} from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import {logoutUser } from '../slices/userSlices'
import {CardIcon,ItemsNumber} from '../styles/components.styled'


const pages = ['Home', 'AboutUs', 'JoinUs'];


const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const cartTotalQuantity = useSelector((state) => state?.cart?.cartTotalQuantity)
  
  const {isAuth,userInfo } = useSelector((state)=>state.user)
  const dispatch = useDispatch()
  const logout = () =>{
    dispatch(logoutUser())
  };

  return (
    <AppBar position="absolute" style={{backgroundColor:'transparent', paddingLeft:'0px', color:'black'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
      <Typography
            style={{color:'rgb(255, 198, 0)',fontSize:'35px'}}
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 5,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Acme',
              fontWeight: 900,
              letterSpacing: '.03rem',
              color: 'black',
              textDecoration: 'none',
              
            }}
           
          >
            CAMPING UNDER THE STARS 
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
            
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}  >
                  <Link to={`/${page}`} textAlign="center" style={{textDecoration:'none' , color:'black', fontFamily:'Acme'}} >{page}</Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
         
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.05rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            CAMPING UNDER THE STARS 
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'inline', md: 'flex' } }}>
            {pages.map((page) => (
              <Link to={`/${page}`} style={{textDecoration: 'none'}}>
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 1, color: 'black', display: 'block' , fontSize:'20px',fontWeight:'bold', fontFamily:'Acme' }}
                style={{paddingLeft:'150px' }}
              >
                {page}
              </Button>
              </Link>
            ))}
          </Box>

          {!isAuth ? <>
          <Link to="/login" style={{textDecoration: 'none'}}>
          <Button
          style={{backgroundColor:' #0000f6',width:'120px',borderRadius:'30px'}}
                key={'login'}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block', fontSize:'18px',fontWeight:'bold', fontFamily:'Acme' }}
              >
                {'login'}
              </Button>
              </Link>
          </>
          : userInfo.role ==="user"?
            <>
          <CardIcon>
            <Link to='/ShoppingCard'><img src="https://img.icons8.com/material-outlined/35/000000/shopping-cart-loaded.png" alt=""/>
            </Link>
            <ItemsNumber>{cartTotalQuantity}</ItemsNumber>
            </CardIcon>
             <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" style={{backgroundColor:"#f5be00"}} />
              </IconButton>
            </Tooltip>
            <Menu
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
            
                {/* <MenuItem  onClick={handleCloseUserMenu}>
                  {userInfo.role ==='user' &&
                  <Link to='/Home' textAlign="center" style={{textDecoration:'none' , color:'black'}}>
                    Profile</Link>
                    }
                </MenuItem> */}
              <MenuItem  onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" onClick={logout}> Logout </Typography>
                </MenuItem>
            </Menu>
          </Box>
          </>:
          <>
             <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="A" src="/static/images/avatar/2.jpg"  style={{backgroundColor:"#f5be00"}} />
              </IconButton>
            </Tooltip>
            <Menu
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
{/*             
                <MenuItem  onClick={handleCloseUserMenu}>
                  {userInfo.role ==='user' &&
                  <Link to='/Home' textAlign="center" style={{textDecoration:'none' , color:'black'}}>
                    Profile</Link>
                    }
                </MenuItem> */}
              <MenuItem  onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" onClick={logout}> Logout </Typography>
                </MenuItem>
            </Menu>
            </Box>
          </>
             }
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
