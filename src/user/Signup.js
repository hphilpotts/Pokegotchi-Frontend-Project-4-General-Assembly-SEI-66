import React, { useState } from 'react'
// import { EventHandler } from 'react';

import { Box } from '@mui/system'
import { FormControl, FormHelperText,InputLabel, Input, FormGroup, Button, Typography } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { useNavigate } from 'react-router-dom';

import './user.css'


export default function SignUp(props) {

  const navigate = useNavigate()

  const [newUser, setNewUser] = useState({ // These init as empty strings, else a uncontrolled / controlled input error shows
    emailAddress: '',
    userName: '',
    password: '',
    verifyPassword: ''
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

  const changeHandler = (e) => {
    const user ={...newUser}
    user[e.target.name] = e.target.value
    console.log(user) // todo remove p-debug
    setNewUser(user)
  }

  const registerHandler = () => {
    // TODO : code for if state: password and state: verifyPassword do not match!
      // ? maybe add a cheeky error message or helpertext ?

    props.register(newUser)
    navigate('/signin')
  }

  return (
    <div className='card-box card-outer'>
      <div className='card-box card-inner'>
      <Typography variant='h4' className='form-title'>Sign up</Typography>
    <Box className='user-form-box' sx={{
      boxShadow: 3
    }}>
      <FormGroup>
      <FormControl className='form-ctrl'>
        <InputLabel htmlFor='email-input'>Email Address</InputLabel>
        <Input id="email-input" aria-describedby="email-helper-text" name="emailAddress" onChange={changeHandler}></Input>
        <FormHelperText className='hide-helper' id="email-helper-text">Please enter a valid email adress</FormHelperText>
      </FormControl><br></br>
      <FormControl className='form-ctrl'>
        <InputLabel htmlFor='name-input'> choose a username</InputLabel>
        <Input id="name-input" aria-describedby="email-helper-text" name="userName" onChange={changeHandler}></Input>
        <FormHelperText className='hide-helper' id="email-helper-text">Enter a valid name</FormHelperText>
      </FormControl><br></br>

      <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined" className='form-ctrl'>
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            name="password"
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
        <FormHelperText className='hide-helper' id="email-helper-text">Choose a password</FormHelperText>

      </FormControl><br/>
      <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined" className='form-ctrl'>
          <InputLabel htmlFor="outlined-adornment-verifyPassword">Confirm Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-verifyPassword"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            name="verifyPassword"
            onChange={changeHandler}
            label="Password"
          />
        <FormHelperText className='hide-helper' id="email-helper-text">Choose a password</FormHelperText>

      </FormControl><br/>
      <FormControl className='formctrl'>
      <Button variant="contained" className='form-button' onClick={registerHandler}>Create account</Button>
      </FormControl>
      </FormGroup>
    </Box>
    </div>
    </div>
  )
}
