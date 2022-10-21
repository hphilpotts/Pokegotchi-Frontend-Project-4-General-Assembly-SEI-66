import React from 'react'

// MUI imports:
import { Box } from '@mui/system'

// React Routing
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// Component imports:
import Logo from './main/Logo'
import Header from './main/Header'
import Card from './card/Card'
import Signin from './user/Signin'
import Signup from './user/Signup'

export default function App() {
  return (
    <div className="app-div">
      <Router>
        <Box className="app-outer">

          <Logo></Logo>
          <Header></Header>

          <Routes>
            <Route path="/card" element={<Card/>}></Route>
            <Route path="/signin" element={<Signin/>}></Route>
            <Route path="/signup" element={<Signup/>}></Route>
          </Routes>

        </Box>
      </Router>
    </div>
  )
}
