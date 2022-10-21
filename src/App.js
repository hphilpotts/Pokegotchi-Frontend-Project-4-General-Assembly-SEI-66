import React from 'react'

// MUI imports:
import { Typography } from '@mui/material'

// Component imports:
import Logo from './main/Logo'
import Header from './main/Header'
import { Box } from '@mui/system'

export default function App() {
  return (
    <Box className="app-margin">
      <Logo></Logo>
      <Header></Header>
      <Typography variant="h1">Hey Guys look at our react app</Typography>
    </Box>
  )
}
