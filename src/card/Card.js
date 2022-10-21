import React from 'react'

// MUI imports:
import { Box } from '@mui/system'

// CSS imports:
import './card.css'

// Component imports:
import Name from './Name'
import Sprite from './Sprite'
import Buttons from './Buttons'
import Status from './Status'
import Updates from './Updates'

export default function Card() {
  return (
    <Box className="card-box card-outer" sx={{flexGrow: 1}}>
        <Box className="card-box card-inner">
          <Box className="card-box-inner name-box">
            <Name></Name>
          </Box>
          <Box className="card-box-inner sprite-box">
            <Sprite></Sprite>
          </Box>
          <Box className="card-box-inner buttons-box">
            <Buttons></Buttons>
          </Box>
          <Box className="card-box-inner status-box">
            <Status></Status>
          </Box>
          <Box className="card-box-inner updates-box">
            <Updates></Updates>
          </Box>
        </Box>
    </Box>
  )
}
