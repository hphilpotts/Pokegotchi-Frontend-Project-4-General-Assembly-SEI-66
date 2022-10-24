import React from 'react'

export default function Name(props) {
  return (
    <div className='name'>{ props ? props.name : 'Name not found'}</div>
  )
}
