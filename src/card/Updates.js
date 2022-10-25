import React from 'react'
import { Box, Typography } from '@mui/material'
export default function Updates(props) {
  return (
    <Box>
      <Typography variant="h6">
        <div className='updates'>Updates</div>
      </Typography>
      <p>Clean level is: { props.pG.cleanLevel ? props.pG.cleanLevel : '0 or undefined'}</p>
      <p>Play level is: { props.pG.playLevel ? props.pG.playLevel : '0 or undefined'}</p>
    </Box>
  )
}
