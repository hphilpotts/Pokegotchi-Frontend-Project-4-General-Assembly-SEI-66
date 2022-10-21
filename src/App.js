import React from 'react'

// MUI imports:
import { Typography } from '@mui/material'

// Component imports:
import Logo from './main/Logo'
import Header from './main/Header'
import { Box } from '@mui/system'

export default function App() {
  return (
    <div className="app-div">
    <Box className="app-outer">
      <Logo></Logo>
      <Header></Header>
      <Box className="test-box" sx={{
        height: '79vh'
      }}>
        <Typography variant="h5">Hey Guys look at our react app</Typography>
      </Box>
    </Box>
    </div>
  )
}
