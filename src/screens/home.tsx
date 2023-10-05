import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import BAInput from '../component/BAInput';
// import AdbIcon from '@mui/icons-material/Adb';



// my imports

import Taxilogo from "../assets/Taxilogo.jpg"
import Taxibanner from "../assets/taxi-banner.jpg"
import { useNavigate } from "react-router-dom";
import {  fbLogout } from "../config/firebasemethods"
import BAselect from '../component/BAselect';

const pages = ['Services','About us', 'Blogs', 'Contact Us'];
const settings = ['Profile', 'Account', , 'Logout'];

export default function Home () {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  
  const navigate = useNavigate();

  const logOut = () => {
    fbLogout().then(() => {
      navigate("/login");
    });
  };

  return (



    <>
    <AppBar sx={{background:"white"}}  position="static">
      <Container sx={{background:"white"}} maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <img className="h-[150px] w-[300px]" src={Taxilogo} alt="" />

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              {/* <MenuIcon /> */}
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
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{color:"Black"}} textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
   
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleOpenUserMenu}
                sx={{ my: 2, display: 'block',color:"#ffc107",fontWeight:"700" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="User">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
              {settings.map((setting) => (
                <MenuItem sx={{width:"250px"}} key={setting} onClick={logOut}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>


<Box sx={{position:"relative"}}>


<Box >


<img src={Taxibanner} alt="" />


</Box>
<Box sx={{ height:"650px" , width:"600px" ,background:"#000000C4", position:"absolute" , top:"100px", left:"50px" }}>
<Typography sx={{color:"#ffc107",fontSize:"30px",textAlign:"center",fontWeight:"700"}}>Booking Form</Typography>
<Box sx={{width:"70%" ,marginTop:"20px"}}>
<BAInput label='PICKUP LOCATION' />
<BAInput label='DROP OFF LOCATION' />

<BAselect label='NO OF PASSENGERS' />
<BAselect label='NO OF CASES' />
<input type="date" id="start" name="trip-start" value="2018-07-22" min="2023-01-01" max="2030-12-31" />
<input type="time" id="appt" name="appt" min="09:00" max="18:00" required />
</Box>


</Box>

</Box>


    </>






  );
}