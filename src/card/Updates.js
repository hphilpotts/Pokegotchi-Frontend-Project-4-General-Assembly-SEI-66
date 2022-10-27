import React from 'react'
import { Box, Typography } from '@mui/material'
export default function Updates(props) {
  return (
    <Box>
      <Typography variant="h6">
        <div className='updates'>Status</div>
      </Typography>
      <Box sx={{
        display: 'flex'
      }}>
        <Box className='update-detail'>
          <p className='blue-text embolden'>Food Status: { props.pG.foodLevel ? props.pG.foodLevel : '0 or undefined'}</p>
        </Box>
        <Box className='update-detail'>
          <p className='blue-text embolden'>Clean Status: { props.pG.cleanLevel ? props.pG.cleanLevel : '0 or undefined'}</p>
        </Box>
        <Box className='update-detail'>
          <p className='blue-text embolden'>Play Status: { props.pG.playLevel ? props.pG.playLevel : '0 or undefined'}</p>
        </Box>
        <Box className='update-detail'>
          <p className='blue-text embolden'>Happiness Status: { props.pG.playLevel ? props.pG.playLevel : '0 or undefined'}</p>
        </Box>
      </Box>
    </Box>
  )
}
