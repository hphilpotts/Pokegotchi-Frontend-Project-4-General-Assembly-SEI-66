import React from 'react'

import { Typography } from '@mui/material'

export default function Status(props) {

  return (
    <>
      <Typography variant="h6">
        <div className="status">Status</div>
      </Typography>
      { props.pG.foodLevel ? 
      (<p>{props.pG.name}'s food level is: {props.pG.foodLevel}</p>) : 
      (<p>You've never fed {props.pG.name}, you heartless monster!</p>) }
    </>
  )
}
