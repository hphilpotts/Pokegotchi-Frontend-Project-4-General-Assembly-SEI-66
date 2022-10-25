import React, { setState } from 'react'

import { Typography } from '@mui/material'

export default function HP(props) {

  return (
    <Typography variant="h5">
      <div className="HP">{ props ? 'HP: ' + props.hp : 'HP: N/A' }</div>
    </Typography>
  )
}
