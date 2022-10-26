import React, { useState } from 'react'

import { Box } from '@mui/system'
import { FormControl, InputLabel, Input, FormGroup, Button, Typography } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { useNavigate } from 'react-router-dom';

import './user.css'


export default function Signin(props) {

  const navigate = useNavigate()

  const fireSignalToParent = (signal) => {
    setTimeout(function () {
      console.log("Signal fired, will App.js refresh please?")
      props.passChildSignal(signal)
    }, 1000)

  }

  const [newUser, setNewUser] = useState({ // init to empty string (controlled input)
    emailAddress: '',
    password: ''
  })
  const [values, setValues] = React.useState({
    amount: '',
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const changeHandler = e => {
    const user ={...newUser}
    user[e.target.name] = e.target.value
    console.log(user) 
    setNewUser(user)
  }

  const loginHandler = () => {
    props.login(newUser)
    fireSignalToParent("This is a signal from the child component, Signin.js")
    navigate("/") // TODO : code for if login fails?
  }

  return (
    <div className='card-box card-outer'>
      <div className='card-box card-inner'>
      <Typography variant='h4' className='form-title'>Sign in</Typography>
    <Box className='user-form-box-small' sx={{
      boxShadow: 3
    }}>
      <FormGroup>
      <FormControl className='form-ctrl'>
        <InputLabel htmlFor='email-input'>Email Address</InputLabel>
        <Input id="email-input" aria-describedby="email-helper-text"  name='emailAddress' onChange={changeHandler}></Input>
        {/* <FormHelperText id="email-helper-text">Chuck yer email in here</FormHelperText> */}
      </FormControl><br></br><br></br>

      <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined" className='form-ctrl'>
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={newUser.password}
            name='password'
            onChange={changeHandler}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
      </FormControl><br></br>
      <FormControl className='formctrl'>
      <Button variant="contained" className='form-button' onClick={loginHandler}>Login</Button>
      </FormControl>
      </FormGroup>
    </Box>
    </div>
    </div>
  )
}
