import { Link } from "react-router-dom";


import React from 'react'

// MUI imports:
import { Box } from '@mui/system'

// CSS import:
// import './< your custom css file >.css'
// * css file should be within the same folder as this component, else change './' at start!

export default function User() {

  return (
      <Box className="card-box card-outer" sx={{flexGrow: 1}}>
        <Box className="card-box card-inner">

          <h2>Oops! You seem to be lost.</h2>
            <img className="notfound-img" src='img/confusedPikachu.png'/>
            <p>Here are some helpful links:</p>
            <Link className="link blue-text" to='/'>Home</Link><br></br>
            <Link className="link blue-text" to='/profile'>Profile</Link>

        </Box>
      </Box>
  )
}