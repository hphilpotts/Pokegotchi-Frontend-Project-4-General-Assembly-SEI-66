import React from 'react'

export default function Status(props) {

  return (
    <>
      <h4>Status</h4><br></br>
      { props.pG.foodLevel ? 
      (<p>{props.pG.name}'s food level is: {props.pG.foodLevel}</p>) : 
      (<p>You've never fed {props.pG.name}, you heartless monster!</p>) }
    </>
  )
}
