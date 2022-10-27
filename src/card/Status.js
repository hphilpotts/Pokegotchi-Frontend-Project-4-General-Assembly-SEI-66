import React from 'react'

import { Typography } from '@mui/material'

export default function Status(props) {

  return (
    <>
      <Typography variant="h6">
        <div className="status">Updates</div>
      </Typography>
      <p>{props.status}</p>
    </>
  )
}
