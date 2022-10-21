import * as React from 'react';

// MUI imports:
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

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
            Profile
          </Typography>

        {/* User Auth buttons */}
          <Button color="inherit">Sign In</Button>
          <Button color="inherit">Sign Up</Button>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
