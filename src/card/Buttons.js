import React from 'react'

import { Box, Typography } from '@mui/material'

export default function Buttons(props) {

  const buttonClick = event => {
    const button = event.target.name
    console.log(`Clicked the ${button} button`)
    props.buttonPress(button)
  }

  return (
    <Box className='button-outer'>
      <Box className='button-upper'>
        <a onClick={buttonClick}><img name='feed' className={'pokeBall'} src="img/pokeball2.png"></img></a>
        <a  onClick={buttonClick}><img name='clean' className={'pokeBall'} src="img/pokeball2.png"></img></a>
        <a onClick={buttonClick}><img name='play' className={'pokeBall'} src="img/pokeball2.png"></img></a>
        <a onClick={buttonClick}><img name='heal' className={'pokeBall'} src="img/pokeball2.png"></img></a>
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
