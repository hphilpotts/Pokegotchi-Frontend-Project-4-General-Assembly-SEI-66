import React from 'react'

// MUI imports:
import { Box } from '@mui/system'

// Component imports:
import Logo from './main/Logo'
import Header from './main/Header'
import Card from './card/Card'

export default function App() {
  return (
    <div className="app-div">
    <Box className="app-outer">
      <Logo></Logo>
      <Header></Header>
      <Card></Card>
    </Box>
    </div>
  )
}
