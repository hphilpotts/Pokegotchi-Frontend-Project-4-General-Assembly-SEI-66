import React, { setState } from 'react'

export default function HP(props) {

  return (
    <div className='HP'>{ props ? 'HP: ' + props.HP : 'HP: N/A' }</div>
  )
}
