import React from 'react'

import { Box, Typography } from '@mui/material'

export default function Buttons() {

  const buttonClick = event => {
    console.log(`click`)
  }

  return (
    <Box className='button-outer'>
      <Box className='button-upper'>
        <a name='feed' onClick={buttonClick}><img className={'pokeBall'} src="img/pokeball2.png"></img></a>
        <a name='clean' onClick={buttonClick}><img className={'pokeBall'} src="img/pokeball2.png"></img></a>
        <a name='play' onClick={buttonClick}><img className={'pokeBall'} src="img/pokeball2.png"></img></a>
        <a name='heal' onClick={buttonClick}><img className={'pokeBall'} src="img/pokeball2.png"></img></a>
      </Box>
      <Box className='button-lower'>
        <Box className='button-title'>
          <Typography variant='h7'><span className='yellow-text'>Feed</span></Typography>
        </Box>
        <Box className='button-title'>
          <Typography variant='h7'><span className='yellow-text'>Clean</span></Typography>
        </Box>
        <Box className='button-title'>
          <Typography variant='h7'><span className='yellow-text'>Play</span></Typography>
        </Box>
        <Box className='button-title'>
          <Typography variant='h7'><span className='yellow-text'>Heal</span></Typography>
        </Box>
      </Box>
    </Box>
  )
}
