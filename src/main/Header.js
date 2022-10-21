import * as React from 'react';

// MUI imports:
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import { Link } from 'react-router-dom'

// CSS import:
import './main.css'

export default function Header() {
  return (
    <Box sx={{ 
      flexGrow: 1,
      backgroundColor: "#FFDE00"
     }}
     className="header-box"
     >
      <AppBar position="static"
      className="header-bar">
        <Toolbar sx={{
          backgroundColor: "#FFDE00"
        }}
        className="yellow-text header-box"
        >

        {/* Menu here - styling only, not yet implemented */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

        {/* Profile link, sits on left of toolbar */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to='/card' className='link'>Profile</Link>
          </Typography>

        {/* User Auth buttons */}
          <Link className='link' to='/signin'><Button color="inherit">Sign In</Button></Link>
          <Link className='link' to='/signup'><Button color="inherit" >Sign Up</Button></Link>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
