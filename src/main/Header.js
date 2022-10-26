import * as React from 'react';

// MUI imports:
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

// React Router DOM import:
import { Link } from 'react-router-dom'

// CSS import:
import './Main.css'

export default function Header(props) {

  const [anchorElement, setAnchorElement] = React.useState(null)
  const open = Boolean(anchorElement)
  const handleMenuClick = e => {
    setAnchorElement(e.currentTarget)
  }
  const handleMenuClose = () => {
    setAnchorElement(null)
  }

  const logoutHandler = e => {
    props.onLogoutHandler(e)
  }

  return (
    <div className='header-wrapper'>
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
        className="blue-text header-box"
        >

        {/* Menu here - styling only, not yet implemented */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            id="menu-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleMenuClick}    
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorElement}
            open={open}
            onClose={handleMenuClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <Link className="link blue-text" to="/profile"><MenuItem onClick={handleMenuClose}>My Profile</MenuItem></Link>
            <Link className="link blue-text" to="/card"><MenuItem onClick={handleMenuClose}>My PokeGotchi</MenuItem></Link>
            <Link className="link blue-text" to="/pokegotchi"><MenuItem onClick={handleMenuClose}>All PokeGotchi</MenuItem></Link>
            <Link className="link blue-text" to="/"><MenuItem onClick={handleMenuClose}>Home Page</MenuItem></Link>
          </Menu>


        {/* Profile link, sits on left of toolbar */}
          <Typography variant="h7" component="div" sx={{ flexGrow: 1 }}>
            <Link to='/card' className='link'>My Pokégotchi</Link>
          </Typography>

          {/* vertial line for seperating Card from auth links */}
            {/* -> should this be className? getting an error in the console */}
          <div className="vl"></div>

        {/* User Auth buttons */}
          {!props.isAuth ? 
          (<><Link className='link' to='/signin'><Button color="inherit">Sign In</Button></Link>
          <Link className='link' to='/signup'><Button color="inherit" >Sign Up</Button></Link></>) :
          (<>
            {/* <Link className='link' to='/pokegotchi'><Button color="inherit">Pokegotchi</Button></Link> moved to menu */}
            <Typography variant="h7" sx={{ flexGrow: 1 }} className="text-right">
              {/* <Button color="inherit" className="link" onClick={logoutHandler}>Logout</Button> */}
              <Link className='link' onClick={logoutHandler}>Logout</Link>
            </Typography>
          </>)}               
          {/* tesing React MUI alerts - to be added to to Sign in/Sign up, Login */}
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  );
}
