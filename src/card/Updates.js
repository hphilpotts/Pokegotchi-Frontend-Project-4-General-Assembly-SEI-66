import React from 'react'
import { Box } from '@mui/material'
export default function Updates(props) {
  return (
    <Box>
    <h4>Updates</h4>
    <p>Clean level is: { props.pG.cleanLevel ? props.pG.cleanLevel : '0 or undefined'}</p>
    <p>Play level is: { props.pG.playLevel ? props.pG.playLevel : '0 or undefined'}</p>
    </Box>
  )
}
