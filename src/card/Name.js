import React from 'react'

import { Typography } from '@mui/material'

export default function Name(props) {
  return (
    <Typography variant="h5">
    <div className='name'>{ props ? props.name : 'Name not found'}</div>
    </Typography>
  )
}
